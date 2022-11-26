import { useState } from 'react';
import { Input } from '../components/Input';
import { PageContainer } from '../components/PageContainer';
import { PostDetail } from '../components/PostDetail';
import { usePosts } from '../hooks/usePosts';

const Posts = ({ test }: { test: string }) => {
  const { posts, isLoading, error } = usePosts();
  const [searchString, setSearchString] = useState('');
  const onSearchHandler = (searchString: string) => {
    setSearchString(searchString);
  };
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Oooops, something crushed</h1>;

  const filteredPosts = posts
    ? searchString
      ? posts.filter((post) =>
          post.author.toLowerCase().includes(searchString.toLowerCase())
        )
      : posts
    : [];
  return (
    <PageContainer>
      <div className="search-field">
        <Input
          placeholder="search"
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
        <h2>No Posts Found</h2>
      )}
    </PageContainer>
  );
};

export default Posts;
