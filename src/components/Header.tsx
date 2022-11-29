import { withHelloMessage } from '../hoc/withHelloMessage';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Q posts</h1>
    </div>
  );
};

export default withHelloMessage(Header, 'Header');
