/**
 * A menu item in your blog.
 * Example: Home, About
 */
export interface IMenu {
    /**
     * Display name
     */
    name: string
    /**
     * Example: '/about', ['/', 'about']
     */
    route: string|string[]
    /**
     * Example: ['fas', 'home']
     * See more at fontawsome module
     */
    icon?: string[]
}