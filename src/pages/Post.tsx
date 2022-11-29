import { useParams } from 'react-router-dom';
import Message from '../components/Message';
import PageContainer from '../components/PageContainer';
import PostDetail from '../components/PostDetail';
import { withHelloMessage } from '../hoc/withHelloMessage';
import { usePost } from '../hooks/usePost';
import { MessageType } from '../types/enums/MessageType';

const Post = () => {
  const params = useParams();
  const { post, isLoading, error } = usePost(params.id as string);
  if (isLoading) return <Message>Loading...</Message>;
  if (error)
    return (
      <Message messageType={MessageType.ERROR}>Something went wrong</Message>
    );

  return post ? (
    <PageContainer>
      <PostDetail post={post} />
    </PageContainer>
  ) : (
    <Message>No post found</Message>
  );
};

export default withHelloMessage(Post, 'PostPage');
