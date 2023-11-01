import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const FilterLabel = styled.label`
  font-size: 1.5rem;
  margin-right: 10px;

  @media screen and (max-width: 510px) and (min-width: 460px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 459px) {
    font-size: 1rem;
  }
`;

const FilterSelect = styled.select`
  width: 200px;
  text-align: center;
  font-size: 1.2rem; 
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;

  @media screen and (max-width: 510px) and (min-width: 460px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 460px) {
    font-size: 1rem;
    width: 130px;
  }
`;

const Filter = ({ setFilters }) => {
  const handleFilterChange = (event) => {
    setFilters({ category: event.target.value });
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="categoryFilter">Filter by Category: </FilterLabel>
      <FilterSelect id="categoryFilter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="accessories">Accessories</option>
      </FilterSelect>
    </FilterContainer>
  );
};

export default Filter;

