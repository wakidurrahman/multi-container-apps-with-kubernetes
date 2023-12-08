import React from 'react';
import { MainContainer } from '../../components/template/main-container';
import './index.scss';

interface OtherProps {
  pageId?: string | undefined;
}
const Others: React.FC<OtherProps> = ({ pageId }) => {
  return (
    <MainContainer>
      <div className="p-other flex flex-row justify-center" id={pageId}>
        <h1 className='text-5xl mt-10'>Other page </h1>
      </div>
    </MainContainer>
  );
};

export default Others;
