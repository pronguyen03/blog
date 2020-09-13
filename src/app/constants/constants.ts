import { Category } from '../models'

export const CATEGORY = {
    ALL: '',
    UNCATEGORIZED: 'uncategorized',
    SELF_LEARNING: 'self-learning',
    FOUNDATION: 'foundation',
    HTML_CSS: 'html-css',
    JAVASCRIPT: 'javascript',
    BOOTSTRAP: 'bootstrap',
    ANGULAR: 'angular',
}

export const CATEGORIES: Category[] = [
    {KEY: CATEGORY.ALL, NAME: 'Tất cả'},
    {KEY: CATEGORY.SELF_LEARNING, NAME: 'Hướng dẫn tự học lập trình'},
    {KEY: CATEGORY.FOUNDATION, NAME: 'Nhập môn lập trình'},
    {KEY: CATEGORY.HTML_CSS, NAME: 'HTML CSS'},
    {KEY: CATEGORY.JAVASCRIPT, NAME: 'Javascript'},
    {KEY: CATEGORY.BOOTSTRAP, NAME: 'Bootstrap'},
    {KEY: CATEGORY.ANGULAR, NAME: 'Angular'},
    {KEY: CATEGORY.UNCATEGORIZED, NAME: 'Uncategorized'},
]

export const MENUS = [
    {NAME: 'Trang chủ', ROUTE: '/blog', ICON: ['fas', 'home']},
    {NAME: 'Giới thiệu', ROUTE: '/blog/about'},
]