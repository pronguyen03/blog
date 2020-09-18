import { ICategory } from '../../src/app/models'

/**
 * This array define all categories in your blog. You can add your categories by add more items to this array.
 * Each category includes: 
 * - A category key to distinguish a category with others. This key is also used in the header of your blog file (markdown files in blog folder).
 * - A display name, which will be displayed on your blog.
 */
export const CATEGORIES: ICategory[] = [
    {key: '', displayName: 'Tất cả'},
    {key: 'self-learning', displayName: 'Hướng dẫn tự học lập trình'},
    {key: 'foundation', displayName: 'Nhập môn lập trình'},
    {key: 'html-css', displayName: 'HTML CSS'},
    {key: 'javascript', displayName: 'Javascript'},
    {key: 'bootstrap', displayName: 'Bootstrap'},
    {key: 'angular', displayName: 'Angular'},
    {key: 'uncategorized', displayName: 'Uncategorized'},
]