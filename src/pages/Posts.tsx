import { usePosts } from '../hooks/usePosts';

const Posts = ({ test }: { test: string }) => {
  const { posts, isValidating } = usePosts();
  console.log(test);
  console.error(posts);
  return <h1>Posts</h1>;
};

export default Posts;
