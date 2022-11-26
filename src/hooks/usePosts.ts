import { useMemo } from 'react';
import useSWR from 'swr';
import { postApiService } from '../services/PostApiService';
import { userApiService } from '../services/UserApiService';
import { convertArrayToMap } from '../utils/convertingData';
import { Comment } from '../types/Comment';

const postsDataFetcher = () => {
  return Promise.all([
    postApiService.getPosts(),
    postApiService.getComments(),
    userApiService.getAllUsers(),
  ]);
};

export const convertCommentsArrayToMap = (
  commentsArray: Comment[]
): Record<number, Comment[]> => {
  return commentsArray.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.postId]: [...(acc[curr.postId] || []), curr],
    };
  }, {} as Record<number, Comment[]>);
};

export const usePosts = () => {
  const { data, isValidating, error } = useSWR('fetchPosts', postsDataFetcher);
  const postsData = useMemo(() => {
    if (data) {
      const [posts, comments, users] = data;
      const usersMap = convertArrayToMap(users);
      const commentsMap = convertCommentsArrayToMap(comments.flat(2));
      const postData = posts.map((post) => {
        return {
          ...post,
          author: usersMap[post.userId].name,
          comments: commentsMap[post.id],
        };
      });
      return postData;
    }
  }, [data]);

  return {
    posts: postsData,
    isLoading: isValidating,
    error,
  };
};
