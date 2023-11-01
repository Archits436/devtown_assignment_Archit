import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion'
import ProductItem from './ProductItem';
import Filter from './Filter';
import Sorting from './Sorting';
import Pagination from './Pagination';
import products from '../utilities/products';
import styled from 'styled-components'

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SortingAndFilter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 20px 0 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const ProductList = () => {
    const [filters, setFilters] = useState({ category: 'all' });
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sorting, setSorting] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            if (filters.category === 'all') return true;
            return product.category === filters.category;
        });
    }, [filters]);

    useEffect(() => {
        let sorted = [...filteredProducts];

        switch (sorting) {
            case 'priceAsc':
                sorted = sorted.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                sorted = sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                // No sorting or default sorting
                break;
        }

        setSortedProducts(sorted);
    }, [sorting, filteredProducts]);

    const totalProducts = sortedProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <ProductListContainer>
            <SortingAndFilter>
                <Filter setFilters={setFilters} />
                <Sorting setSorting={setSorting} />
            </SortingAndFilter>
            <ProductListWrapper
                as={motion.div}
                whileInView={{ y: [0, 50], opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >
                {paginatedProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ProductListWrapper>
            <PaginationWrapper>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </PaginationWrapper>
        </ProductListContainer>
    );
};

export default ProductList;
