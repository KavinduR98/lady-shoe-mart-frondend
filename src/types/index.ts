export interface NavLink {
    label: string,
    path: string
}

export interface Category {
    id: number,
    name: string,
    description: string,
    imageUrl: string
}

export interface Subcategory {
    id: number,
    name: string,
    description: string,
    categoryId: number
}