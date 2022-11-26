import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/PageContainer';
import { PostDetail } from '../components/PostDetail';
import { usePost } from '../hooks/usePost';

const Post = () => {
  const params = useParams();
  const { post, isLoading, error } = usePost(params.id as string);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;
  return post ? (
    <PageContainer>
      <PostDetail post={post} />
    </PageContainer>
  ) : (
    <h1>Post not found</h1>
  );
};

export default Post;
