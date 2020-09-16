import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CONFIG } from '../constants/site.config';
import { SEOData } from '../models/seo-data';

/*
 Object.assign(this, data)
        this.title = this.title || SITE_CONFIG.TITLE
        this.description = this.description || SITE_CONFIG.DESC
        this.image = this.image || SITE_CONFIG.IMAGE
        this.route = this.route || SITE_CONFIG.ROUTE
        this.keywords = this.keywords || SITE_CONFIG.KEYWORDS
*/

@Injectable({
    providedIn: 'root'
})
export class SEOService {
    private rootUrl = SITE_CONFIG.ROOT_URL
    
    constructor(private meta: Meta, private title: Title) {}

    /**
     * Set tittle and meta tags for a web page
     */
    doSEO(data?: Partial<SEOData>) {
        let seoData = new SEOData(data)

        this.setTitle(seoData.title)
        this.setMetaTags(seoData)
    }

    private setMetaTags(meta: SEOData) {
        this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: SITE_CONFIG.NAME });
        this.meta.updateTag({ property: 'og:title', content: meta.title });
        this.meta.updateTag({ name: 'keywords', content: meta.keywords });
        this.meta.updateTag({ property: 'og:description', content: meta.description });
        this.meta.updateTag({ property: 'og:image', content: meta.image });
        this.meta.updateTag({ property: 'og:url', content: this.rootUrl + meta.route });
    }

    private setTitle(title: string) {
        this.title.setTitle(title);
    }
}