import { ReactNode } from 'react';
import { withHelloMessage } from '../hoc/withHelloMessage';
import './PageContainer.scss';

interface IPageContainerProps {
  children: ReactNode;
}
const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className="page-container">{children}</div>;
};

export default withHelloMessage(PageContainer, 'PageContainer');
