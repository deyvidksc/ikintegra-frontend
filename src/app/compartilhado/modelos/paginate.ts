export interface Pagination {
    pageSize?: number,
    pageIndex?: number,
    totalCount: number,
    hasNext: false,
    hasPrevious: false,
    items: []
}


export interface PaginateResponse<T> {
    pageSize?: number,
    pageIndex?: number,
    totalCount: number,
    hasNext: false,
    hasPrevious: false,
    items: []
}
