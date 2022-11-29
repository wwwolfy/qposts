import { useRoutes } from 'react-router-dom';
import { routePaths } from './types/routes';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Header from './components/Header';
import { withHelloMessage } from './hoc/withHelloMessage';

function App() {
  const routes = useRoutes([
    { path: routePaths.HOME, element: <Posts /> },
    { path: routePaths.POST, element: <Post /> },
  ]);
  return (
    <div className="app">
      <Header />
      <main>{routes}</main>
    </div>
  );
}

export default withHelloMessage(App, 'App');
