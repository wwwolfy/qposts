import { useMemo } from 'react';
import useSWR from 'swr';
import { postApiService } from '../services/PostApiService';
import { userApiService } from '../services/UserApiService';

export const usePost = (id: string) => {
  const {
    data: post,
    isValidating: isPostLoading,
    error: postError,
  } = useSWR(postApiService.getPostUrl(id), (url) =>
    postApiService.getPost(url)
  );
  const {
    data: user,
    isValidating: isUserLoading,
    error: userError,
  } = useSWR(
    () => (post ? userApiService.getUserUrl(post.userId.toString()) : null),
    (url) => userApiService.getUser(url)
  );
  const {
    data: comments,
    isValidating: isCommentsLoading,
    error: commentsError,
  } = useSWR(
    () =>
      post ? postApiService.getCommentsForPostUrl(post.id.toString()) : null,
    (url) => postApiService.getCommentsForPost(url)
  );

  const postData = useMemo(() => {
    if (post) {
      return {
        ...post,
        author: user?.name,
        comments,
      };
    }
  }, [post, user, comments]);

  return {
    post: postData,
    isLoading: isPostLoading || isUserLoading || isCommentsLoading,
    error: postError || userError || commentsError,
  };
};
