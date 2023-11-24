interface Category {
    category_id: number,
    category: string
}

const categories: Category[] = [
    { category_id: 1, category: 'carros' },
    { category_id: 2, category: 'politica' },
    { category_id: 3, category: 'woman' },
    { category_id: 4, category: 'test' },
    { category_id: 5, category: 'money' },
]

export const findCategoryIdByName = (categoryName: string): number | undefined => {
    const category = categories.find(category => category.category.toLowerCase() == categoryName.toLowerCase());
    return category?.category_id;
}