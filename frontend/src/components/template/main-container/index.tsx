import { FC, ReactNode } from 'react';
import Header from '../../organisms/header';

interface MainContainerProps {
  children?: ReactNode;
  pageId?: string | undefined;
}

export const MainContainer: FC<MainContainerProps> = ({ children, pageId }) => {
  return (
    <div id={pageId} className="t-main-container">
      <Header />
      <main className="t-main-container__body container mx-auto">{children}</main>
    </div>
  );
};
