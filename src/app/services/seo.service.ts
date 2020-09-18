import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BLOG_INFO, ROOT_SITE_URL } from '../../../configuration';
import { ISEOData } from '../models';

@Injectable({
    providedIn: 'root'
})
export class SEOService {
    private rootUrl = ROOT_SITE_URL
    
    constructor(private meta: Meta, private title: Title) {}

    /**
     * Set title and meta tags for a web page
     */
    doSEO(data?: Partial<ISEOData>) {
        // Default SEO data
        let seoData: ISEOData = {
            title: BLOG_INFO.DEFAULT_TITLE,
            description: BLOG_INFO.DESCRIPTION,
            image: BLOG_INFO.SHARE_IMAGE,
            route: '',
            keywords: BLOG_INFO.KEYWORDS
        }
        // Update with provided data
        Object.assign(seoData, data)

        this.setTitle(seoData.title)
        this.setMetaTags(seoData)
    }

    private setMetaTags(meta: ISEOData) {
        this.meta.updateTag({ property: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: BLOG_INFO.DEFAULT_TITLE });
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