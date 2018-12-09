# Gatsby Page Nelson

## Features

- Google Analytics Support
- SEO
    - Sitemap
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- Offline Support
- WebApp Manifest Support
- Responsive images
    - The right image size for every screen size
    - Traced SVG loading (lazy-loading)
    - WebP support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:
- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-one/#check-your-development-environment)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LeKoArts/gatsby-starter-portfolio-emma
npm run dev
```

### Adding new features/plugins

You can add other features by having a look at the offical [plugins page](https://www.gatsbyjs.org/docs/plugins/)

use:
yarn add "plugin-name" --save

### Building your site

```
yarn build
```

Copy the content of the ``public`` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You can configure your setup in ``config/SiteConfig``:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'Emma', // Navigation and Site Title
  siteTitleAlt: 'Emma - Gatsby Starter Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://portfolio-emma.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Minimalistic bright portfolio with full-width grid and large images',
  siteFBAppID: '123456789', // Facebook App ID
  userTwitter: '@emma', // Twitter Username
  // og: Meta Tags
  ogSiteName: 'emma', // Facebook Site Name
  ogLanguage: 'de_DE',
  googleAnalyticsID: 'UA-12345689-1',
  copyright: 'Copyright © 2017. All rights reserved. Pictures by Unsplash.', // Copyright in the footer of the site
  // You can translate these three words into your language if you want.
  // They'll be shown on the project page header
  client: 'Client',
  date: 'Date',
  service: 'Service',
  // Date format used in your project header
  // More information here: https://date-fns.org/v1.29.0/docs/format
  dateFormat: 'DD.MM.YYYY',
  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
  // Settings for typography.js
  headerFontFamily: 'Merriweather',
  bodyFontFamily: 'Roboto',
  baseFontSize: '16px',
};
```

You can also configure the styling of the site by editing the SCSS variables in ``config/_variables.scss``:

```SCSS
// --------------
// Configuration
// --------------

// Configure your colors here

$brand-primary: #cf1993;

// Configure your grid here
// You don't need to change it!

$content-width: 100vw;
$gutter: 0px;
$columns: 3;

$row-size: calc( (#{$content-width} - #{$gutter} * (#{$columns} - 1)) / #{$columns} );

// Configure the max-width of your containers here
// Try to keep it in sync with maxWidth of `gatsby-remark-images`

$container: 100rem;
$container-text: 55rem; // Longer texts should have a smaller max-width to improve readability

// Responsive Typography
// You can set your min and max font-size here
// More information: https://www.rucksackcss.org/docs/#responsive-type

html {
    font-size: responsive 12px 16px;
    font-range: 420px 1280px;
}
```

**Attention:** You also need to edit ``static/robots.txt`` to include your domain!

## Automatic Colors

By default the hover overlay of the grid image and the header on the project page automatically choose its color by using [react-palette](https://github.com/leonardokl/react-palette).
The plugin chooses the *vibrant* color of the image and applies it as the ``background-color`` for the hover overlay and header background. If you don't want that behavior you can delete the ``<Palette />`` component both from ``pages/index.jsx`` and ``templates/project.jsx``.

## Credits

- Inspired by [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)
