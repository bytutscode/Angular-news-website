interface Category {
    category_id: number,
    category: string
}

const categories: Category[] = [
    { category_id: 1, category: 'sports' },
    { category_id: 2, category: 'tech' },
    { category_id: 3, category: 'politics' },
    { category_id: 4, category: 'others' },
]

export const findCategoryIdByName = (categoryName: string): number | undefined => {
    const category = categories.find(category => category.category.toLowerCase() == categoryName.toLowerCase());
    return category?.category_id;
}