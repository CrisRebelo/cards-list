export interface MinifiedCount<T> extends RequestCounters {
    data: Array<T>;
}

export interface RequestCounters {
    total: number;
    total_pages: number;
    page: number;
    per_page: number;
}