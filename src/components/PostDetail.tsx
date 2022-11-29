import { Link } from 'react-router-dom';
import { withHelloMessage } from '../hoc/withHelloMessage';
import { Post } from '../types/Post';
import './PostDetail.scss';

interface IPostProps {
  post: Post;
  linkTo?: string;
}

const PostDetail = ({ post, linkTo }: IPostProps) => {
  return (
    <div className="margin-bottom-48">
      <h5 className="post__author">{post.author}</h5>
      {linkTo ? (
        <Link to={linkTo}>
          <h1 className="post__anchor-heading margin-bottom-24">
            {post.title}
          </h1>
        </Link>
      ) : (
        <h1 className="post__heading margin-bottom-24">{post.title}</h1>
      )}

      <p className="post__body margin-bottom-24">{post.body}</p>
      {post.comments && post.comments.length > 0 && (
        <>
          {post.comments.map((comment) => (
            <div key={comment.id} className="post__comment margin-bottom-4">
              <h5 className="post__comments-author">{comment.email}</h5>
              <p className="post__comments-body">{comment.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default withHelloMessage(PostDetail, 'PostDetail');
