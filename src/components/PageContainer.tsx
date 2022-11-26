import { ReactNode } from 'react';
import './PageContainer.scss';

interface IPageContainerProps {
  children: ReactNode;
}
export const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className="page-container">{children}</div>;
};
