import React from 'react';
import { MainContainer } from '../../components/template/main-container';

interface SignInProps {
  pageId?: string | undefined;
}
const SignIn: React.FC<SignInProps> = ({ pageId }) => {
  return (
    <MainContainer>
      <div className="p-signin flex flex-row justify-center" id={pageId}>
        <h1 className='text-5xl mt-10'>SignIn page </h1>
      </div>
    </MainContainer>
  );
};

export default SignIn;