import React from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const SortLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 10px;
`;

const SortSelect = styled.select`
  width: 200px;
  text-align: center;
  font-size: 1.2rem; 
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Sorting = ({ setSorting }) => {
  const handleSortChange = (event) => {
    const sortingKey = event.target.value;
    setSorting(sortingKey);
  };

  return (
    <SortContainer>
      <SortLabel htmlFor="sorting">Sort By: </SortLabel>
      <SortSelect id="sorting" onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="priceAsc">Price (Low to High)</option>
        <option value="priceDesc">Price (High to Low)</option>
      </SortSelect>
    </SortContainer>
  );
};

export default Sorting;
