import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const Paginationwrap = styled(Pagination)`
  ul > li {
    a {
      position: relative;
      display: block;
      padding: 0.5rem 0.75rem;
      margin-left: -1px;
      line-height: 1.25;
      background-color: #fff;
      border: 1px solid #dee2e6;
      text-transform: capitalize;
    }
    &.active {
      a {
        background-color: #343a40 !important;
        border-color: #343a40;
        color: #fff !important;
      }
    }
  }
  .page-item {
    .page-link {
      color: #999;
    }
    &.active {
      .page-link {
        background-color: #343a40;
        border-color: #343a40;
        color: #fff;
      }
    }
  }
`;
function PaginationComponent({
  total,
  onPageChange,
  currentPage,
  className,
}: {
  total: number;
  onPageChange: (e: any) => void;
  currentPage: number;
  className?: string;
}) {
  return (
    <Paginationwrap className={className}>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={total}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage - 1}
      />
    </Paginationwrap>
  );
}
export default PaginationComponent;
