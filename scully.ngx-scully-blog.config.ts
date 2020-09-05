import { getSitemapPlugin } from '@gammastream/scully-plugin-sitemap';
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

const { MinifyHtml } = require('scully-plugin-minify-html');
// const { DisableAngular } = require('scully-plugin-disable-angular');
const postRenderers = [MinifyHtml]

const SitemapPlugin = getSitemapPlugin();
setPluginConfig(SitemapPlugin, {
  urlPrefix: 'https://nhannguyendacoder.com',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'monthly',
  priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
  ignoredRoutes: ['/404']
});

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ngx-scully-blog",
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      },
    },
  }
};