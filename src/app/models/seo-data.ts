import { SITE_CONFIG } from '../constants'

export class SEOData {
    title: string
    description: string
    image: string
    route: string
    keywords: string

    constructor(data?: Partial<SEOData>) {
        Object.assign(this, data)
        this.title = this.title || SITE_CONFIG.TITLE
        this.description = this.description || SITE_CONFIG.DESC
        this.image = this.image || SITE_CONFIG.IMAGE
        this.route = this.route || SITE_CONFIG.ROUTE
        this.keywords = this.keywords || SITE_CONFIG.KEYWORDS
    }
}