# Introduction

## Install and Run

1. Clone repository
2. Run `npm install`
3. Run `npm start`

## Description

App allows user display companies with their incomes (average, last month and total), 
filtering and sorting by all fields. Companies and incomes ara fetch from external API.

# Project Documentation

## Files and Folders Structure

```bash
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── assets
│   │   └── scss
│   │       └── _mediaqueries.scss
│   ├── components
│   │   ├── company
│   │   │   ├── CompanyItem.js
│   │   │   ├── CompanyList.js
│   │   │   └── scss
│   │   │       └── company-list.scss
│   │   ├── filter
│   │   │   ├── Filter.js
│   │   │   └── scss
│   │   │       └── filter.scss
│   │   └── misc
│   │       ├── Arrow.js
│   │       ├── Cell.js
│   │       ├── Hamburger.js
│   │       ├── HeaderCell.js
│   │       ├── HeaderTable.js
│   │       ├── Input.js
│   │       ├── Loader.js
│   │       ├── PageList.js
│   │       ├── scss
│   │       │   ├── arrow.scss
│   │       │   ├── cell.scss
│   │       │   ├── grid.scss
│   │       │   ├── hamburger.scss
│   │       │   ├── header-cell.scss
│   │       │   ├── input.scss
│   │       │   ├── loader.scss
│   │       │   ├── page-list.scss
│   │       │   └── wrapper-corner.scss
│   │       ├── setClassNames.js
│   │       └── WrapperCorner.js
│   ├── containers
│   │   ├── app
│   │   │   ├── App.js
│   │   │   └── scss
│   │   │       └── App.scss
│   │   ├── company
│   │   │   ├── CompanyContainer.js
│   │   │   └── scss
│   │   │       └── company-container.scss
│   │   └── filter
│   │       └── FilterContainer.js
│   ├── index.js
│   ├── index.scss
│   ├── serviceWorker.js
│   ├── store
│   │   ├── actions
│   │   │   ├── filterAction.js
│   │   │   ├── index.js
│   │   │   └── requestAction.js
│   │   ├── reducers
│   │   │   ├── filterReducer.js
│   │   │   ├── index.js
│   │   │   └── requestReducer.js
│   │   └── utils
│   │       └── constans.js
```

## `public/` Folder 

This folder contains:
 * `index.html` is the page template;
 * `favicon.ico `, `logo192.png`, `logo512.png` are icons; 
 * `manifest.json` describe icon for mobile devices; 
 * `robots.txt` is a text file that tells web robots( most often search engine s) which pages on your site to crawl.

**Note: The following file and folder names are documentation references associated with them!**

## `src/` Folder 

This folder contains all React source files written in js and jsx and SASS stylesheet files.

 * `./index.js` is the JavaScript entry point;
 * `./index.scss` describe appearance for basic tags such as `<html></html>`, `<body></body>` and custom identifiers
like `#root` and `#app`;
 * `./serwiceWorker.js` contains functions that allows app work offline.

### [`./assets/`](https://github.com/LZygmunt/companies/tree/master/src/assets/doc_assets.md) Folder

This folder contains stylesheets shared over whole app.

[`./scss/_mediaqueries.scss`](https://github.com/LZygmunt/companies/tree/master/src/assets/doc_assets.md#Mediaqueries-Mixin) contains `@mixin` SASS function with breakpoints.

### [`./components/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components) Folder

This folder contains presentation components with stylesheets.
 * [`./company/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components#Company) contains presentation layer of each companies( with incomes ) and list of companies;
 * [`./filter/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components#Filter) contains presentation layer of filter block;
 * [`./misc/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components#Misc) contains presentation layer of miscellaneous components like custom inputs, cells, etc.

### [`./containers/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers) Folder

This folder contains container components with stylesheets.
 * [`./company/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers#Company) contains container with list of companies;
 * [`./filter/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers#Filter) contains container filter block;
 * [`./app/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers#App) contains container with entire application.

### [`./store/`](https://github.com/LZygmunt/companies/tree/master/src/) Folder

This folder contains store with actions.
 * [`./actions/`](https://github.com/LZygmunt/companies/tree/master/src/) contains actions use to filtering and requesting;
 * [`./reducers/`](https://github.com/LZygmunt/companies/tree/master/src/) contains reducers use to filtering and requesting;
 * [`./utils/`](https://github.com/LZygmunt/companies/tree/master/src/) contains utilities like constants.
