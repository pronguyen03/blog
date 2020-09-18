# Ngx-scully-blog: A simple blog for developers that is easy to setup and SEO supported.

sitemap


A minimal blogging app using [Angular](https://angular.io/) and [Scully](https://scully.io) with basic supports for search engine optimization (SEO).

You can easily clone the project to your machine, update the configs to make it your own, start writing and deploy to anywhere you want to show everyone.

Demo: [https://nhannguyen-blog.web.app](https://nhannguyen-blog.web.app)

References: 

- Article [Getting started with Scully](https://nartc-scully.netlify.app/blog/getting-started-scully) - [Chau Tran](https://github.com/nartc)
- Scully live demo [Introducing Scully: Angular + JAMStack](https://www.youtube.com/watch?v=Sh37rIUL-d4)

## SEO supports

- Set default title and meta tags
- Set meta tag for social networks
- Auto set a corresponding title and meta tags for each blog post
- Supported meta tags: 
    ```html
    <meta name="twitter:card" content="<your content>">
    <meta property="og:type" content="<your content>">
    <meta property="og:site_name" content="<your content>">
    <meta property="og:url" content="<your content>" />
    <meta property="og:title" content="<your content>" />
    <meta property="og:description" content="<your content>" />
    <meta property="og:image" content="<your content>" />
    ```
## Getting started

### Clone the project

`git clone https://github.com/nhaancs/ngx-scully-blog.git`

### Make it your own

- Update the configs to your blog at `/src/app/site.config.ts` file
- Update the about component to introduce about your blog
- Update the favicon.ico

### Run the project 

- Run the command `npm install` to install dependencies
- Then run `ng build && npm run scully && npm run scully:serve` to build Angular, then run Scully, and finally serve Scully
    ```
    Expected result:
    Scully static server started on "http://localhost:1668/"
    Angular distribution server started on "http://localhost:1864/"
    ```
- Open the browser at `http://localhost:1668` to see your static website

### Other useful commands

- Add new blog post: `ng g @scullyio/init:post --name="blog name"`
- Scan for unhandled routes: `npm run scully -- --scanRoutes`

### Blog post formats

Your blog posts will be written in markdown format and stored in `/blog` folder.

Sample post: 

```
---
title: <the title of your post>
description: <the short description of your post>
published: <true or false, indicate whether or not show your post>
keywords: <the keywords of your post, separate with commas>
image: <a link to the thumbnail image of your post>
categories: <the categories that your post belong, separate with commas>
date: <YYYY-MM-DD>
---

<The content of your post written in markdown>

```

File name of a blog post:

`<category names> + <post title>.md`


## Still have questions?

For any futher questions, just creat a new issue. Thank you.

New Angular project in minial mode: 
ng new ngx-scully-blog --minimal

Add Scully to the project:
ng add @scullyio/init

Init a Scully blog
ng g @scullyio/init:blog

Add new blog post
ng g @scullyio/init:post --name="blog name"

Scan for unhandled routes:
npm run scully -- --scanRoutes

Build Angular: 
ng build --stats-json

Run Scully:
npm run scully

Serve Scully:
npm run scully:serve

ng build --prod && npm run scully && npm run scully:serve
ng build && npm run scully && npm run scully:serve

## References
This project uses resources from:
- [Angular](https://angular.io)
- [Scully.io](https://scully.io)
- [Start Bootstrap Resume theme](https://startbootstrap.com/themes/resume)
- [Start Bootstrap Blog Home template](https://startbootstrap.com/templates/blog-home)
- [Start Bootstrap Blog Post template](http://startbootstrap.com/templates/blog-post)