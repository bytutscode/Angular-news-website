export interface Post {
    id: number,
    user_id: number,
    category_id: number,
    image: string,
    title: string,
    content: string,
    date: Date | string,
    status: boolean
}