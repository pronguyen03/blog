import { ScullyRoute } from '@scullyio/ng-lib';

export interface IPost extends ScullyRoute {
    descriptiontitle: string
    description: string
    keywords?: string
    categories?: string
    date?: string
    image?: string
}