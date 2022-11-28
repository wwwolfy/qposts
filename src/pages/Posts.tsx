import { useState } from 'react';
import { Input } from '../components/Input';
import { PageContainer } from '../components/PageContainer';
import { PostDetail } from '../components/PostDetail';
import { usePosts } from '../hooks/usePosts';
import { Message } from '../components/Message';
import { MessageType } from '../types/enums/MessageType';

const Posts = ({ test }: { test: string }) => {
  const { posts, isLoading, error } = usePosts();
  const [searchString, setSearchString] = useState('');
  const onSearchHandler = (searchString: string) => {
    setSearchString(searchString);
  };
  if (isLoading) return <Message>Loading...</Message>;
  if (error)
    return (
      <Message messageType={MessageType.ERROR}>Something went wrong</Message>
    );

  const filteredPosts = posts
    ? searchString
      ? posts.filter((post) =>
          post.author.toLowerCase().includes(searchString.toLowerCase())
        )
      : posts
    : [];
  return (
    <PageContainer>
      <div className="margin-bottom-48">
        <Input
          placeholder="Search by author"
          name="search"
          onChange={onSearchHandler}
          value={searchString}
        />
      </div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <PostDetail post={post} key={post.id} linkTo={`/posts/${post.id}`} />
        ))
      ) : (
        <Message>No Data Found</Message>
      )}
    </PageContainer>
  );
};

export default Posts;
