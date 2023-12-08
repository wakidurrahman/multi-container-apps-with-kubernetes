import React from 'react';
import { MainContainer } from '../../components/template/main-container';
import './index.scss';

interface SearchProps {
  pageId?: string | undefined;
}
const Search: React.FC<SearchProps> = ({ pageId }) => {
  return (
    <MainContainer>
      <div className="p-search flex flex-row justify-center" id={pageId}>
        <h1 className='text-5xl mt-10'>Search page </h1>
      </div>
    </MainContainer>
  );
};

export default Search;