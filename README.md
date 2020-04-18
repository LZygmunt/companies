# Introduction

## Install and Run

1. Clone repository
2. Run `npm install`
3. Run `npm start`

## Description

App allows user display companies with their incomes ( average, last month and total ), 
filtering and sorting by all fields. Companies and incomes are fetch from external API.

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
│   │   │   ├── Arrow.js
│   │   │   ├── Cell.js
│   │   │   ├── Hamburger.js
│   │   │   ├── HeaderCell.js
│   │   │   ├── HeaderTable.js
│   │   │   ├── Input.js
│   │   │   ├── Loader.js
│   │   │   ├── PageList.js
│   │   │   ├── scss
│   │   │   │   ├── arrow.scss
│   │   │   │   ├── cell.scss
│   │   │   │   ├── grid.scss
│   │   │   │   ├── hamburger.scss
│   │   │   │   ├── header-cell.scss
│   │   │   │   ├── input.scss
│   │   │   │   ├── loader.scss
│   │   │   │   ├── page-list.scss
│   │   │   │   └── wrapper-corner.scss
│   │   │   ├── setClassNames.js
│   │   │   └── WrapperCorner.js
│   │   └── doc_components.md
│   ├── containers
│   │   ├── app
│   │   │   ├── App.js
│   │   │   └── scss
│   │   │       └── App.scss
│   │   ├── company
│   │   │   ├── CompanyContainer.js
│   │   │   └── scss
│   │   │       └── company-container.scss
│   │   ├── filter
│   │   │   └── FilterContainer.js
│   │   └── doc_continers.md
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
│   └── doc_store.md
```

## [`public/`](https://github.com/LZygmunt/companies/blob/master/public/) Folder 

This folder contains:
 * [`index.html`](https://github.com/LZygmunt/companies/blob/master/public/index.html) is the page template;
 * [`favicon.ico`](https://github.com/LZygmunt/companies/blob/master/public/favicon.ico), [`logo192.png`](https://github.com/LZygmunt/companies/blob/master/public/logo192.png), [`logo512.png`](https://github.com/LZygmunt/companies/blob/master/public/logo512.png) are icons; 
 * [`manifest.json`](https://github.com/LZygmunt/companies/blob/master/public/manifest.json) describe icon for mobile devices; 
 * [`robots.txt`](https://github.com/LZygmunt/companies/blob/master/public/robots.txt) is a text file that tells web robots( most often search engines ) which pages on your site to crawl.

**Note: The following file and folder names are documentation references associated with them!**

## [`src/`](https://github.com/LZygmunt/companies/blob/master/src/) Folder 

This folder contains all React source files written in js and jsx and SASS stylesheet files.

 * [`./index.js`](https://github.com/LZygmunt/companies/blob/master/src/index.js) is the JavaScript entry point;
 * [`./index.scss`](https://github.com/LZygmunt/companies/blob/master/src/index.scss) describe appearance for basic tags such as `<html></html>`, `<body></body>` and custom identifiers
like `#root` and `#app`;
 * [`./serwiceWorker.js`](https://github.com/LZygmunt/companies/blob/master/src/serviceWorker.js) contains functions that allows app work offline.

### [`./assets/`](https://github.com/LZygmunt/companies/tree/master/src/assets/doc_assets.md) Folder

This folder contains stylesheets shared over whole app.

[`./scss/_mediaqueries.scss`](https://github.com/LZygmunt/companies/tree/master/src/assets/doc_assets.md#Mediaqueries-Mixin) contains `@mixin` SASS function with breakpoints.

### [`./components/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components.md) Folder

This folder contains presentation components with stylesheets.
 * [`./company/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components.md#Company) contains presentation layer of each companies( with incomes ) and list of companies;
 * [`./filter/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components.md#Filter) contains presentation layer of filter block;
 * [`./misc/`](https://github.com/LZygmunt/companies/tree/master/src/components/doc_components.md#Misc) contains presentation layer of miscellaneous components like custom inputs, cells, etc.

### [`./containers/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers.md) Folder

This folder contains container components with stylesheets.
 * [`./company/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers.md#Company) contains container with list of companies;
 * [`./filter/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers.md#Filter) contains container filter block;
 * [`./app/`](https://github.com/LZygmunt/companies/tree/master/src/containers/doc_containers.md#App) contains container with entire application.

### [`./store/`](https://github.com/LZygmunt/companies/tree/master/src/store/doc_store.md) Folder

This folder contains store with actions.
 * [`./actions/`](https://github.com/LZygmunt/companies/tree/master/src/store/doc_store.md#Actions) contains actions use to filtering and requesting;
 * [`./reducers/`](https://github.com/LZygmunt/companies/tree/master/src/store/doc_store.md#Reducers) contains reducers use to filtering and requesting;
 * [`./utils/`](https://github.com/LZygmunt/companies/tree/master/src/store/doc_store.md#Utils) contains utilities like constants.
