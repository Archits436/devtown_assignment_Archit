import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  overflow: hidden;
`;

const PageButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: #bfbfbf; /* Change to your desired circle color */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  user-select: none;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #0074D9; /* Change to your desired active circle color */
  }
`;

const LeftArrow = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

const RightArrow = styled.div`
  cursor: pointer;
  margin-left: 10px;
`;

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const pageCircles = [];

    for (let i = 1; i <= totalPages; i++) {
        pageCircles.push(
            <PageButton
                key={i}
                onClick={() => setCurrentPage(i)}
                className={currentPage === i ? 'active' : ''}
            >
            </PageButton>
        );
    }

    return (
        <PaginationContainer>
            <LeftArrow
                onClick={() => {
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
            >
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </LeftArrow>
            {pageCircles}
            <RightArrow
                onClick={() => {
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
            >
                <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </RightArrow>
        </PaginationContainer>
    );
};

export default Pagination;
