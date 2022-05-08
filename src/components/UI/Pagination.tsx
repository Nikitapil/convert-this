import React, { FC } from 'react'
import '../../styles/pagination.scss'
interface PaginationProps {
    pages: number[] | null,
    onPaginationClick : (page: number) => void,
    currentPage: number
}

export const Pagination:FC<PaginationProps> = ({pages, onPaginationClick, currentPage}) => {
  return (
    <div className='pagination'>
        {pages?.map(page => {
            return (
                <button key={page} onClick={() => onPaginationClick(page)} className={'pagination-button' + (currentPage === page ? ' pagination-active' : '')}>{page}</button>
            )
        })}
    </div>
  )
}
