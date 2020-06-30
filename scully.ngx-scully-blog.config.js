"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scully_plugin_sitemap_1 = require("@gammastream/scully-plugin-sitemap");
var scully_1 = require("@scullyio/scully");
var MinifyHtml = require('scully-plugin-minify-html').MinifyHtml;
var DisableAngular = require('scully-plugin-disable-angular').DisableAngular;
var postRenderers = [DisableAngular, MinifyHtml];
var SitemapPlugin = scully_plugin_sitemap_1.getSitemapPlugin();
scully_1.setPluginConfig(SitemapPlugin, {
    urlPrefix: 'https://nhannguyendacoder.web.app',
    sitemapFilename: 'sitemap.xml',
    changeFreq: 'monthly',
    priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
    ignoredRoutes: ['/404']
});
exports.config = {
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
