export interface MinifiedCount<T> {
    total: number;
    total_pages: number;
    page: number;
    per_page: number;
    data: Array<T>;
}
