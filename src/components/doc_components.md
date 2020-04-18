# Components

Here you find info about presentation components. Presentation components provide presentation layer of application.
They take props from parent components and display it.

## Company

### [`CompanyItem.js`](https://github.com/LZygmunt/companies/tree/master/src/components/company/CompanyItem.js) Function Component

[`CompanyItem.js`](https://github.com/LZygmunt/companies/tree/master/src/components/company/CompanyItem.js) component holds information about one company which get from parent component. There are:
 * `id` is ID of company;
 * `name` is company name;
 * `city` is city of company location;
 * `totalIncome` is company total income;
 * `averageIncome` is company average income;
 * `lastMonthIncome` is company last month income.

This information is assign into specific cell in table and delivered to [`Cell.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Cell.js) component. Render a row of [`Cell.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Cell.js) components.

### [`CompanyList.js`](https://github.com/LZygmunt/companies/tree/master/src/components/company/CompanyList.js) Function Component

Gather information about all rows current display in table. Via props `companies` gets array of companies on current page.
From this array map elements to [`CompanyItem.js`](https://github.com/LZygmunt/companies/tree/master/src/components/company/CompanyItem.js) component and render composite list of [`CompanyItem.js`](https://github.com/LZygmunt/companies/tree/master/src/components/company/CompanyItem.js) components.

## Filter

### [`Filter.js`](https://github.com/LZygmunt/companies/tree/master/src/components/filter/Filter.js) Function Component

Represent filtering block with followings props:
 * `filter` is function passed from parent, allows to filter by specific field;
 * `isPending` is state passed from the parent, which determines if the filtering field is disabled;
 * `className` is CSS class passed from parent, which determines if the filtering block is open. 

Filtering block consist of header tag with text and few [`Input.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Input.js) components.

## Misc

### [`setClassNames.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/setClassNames.js) Function

Transform class array to one string.

##### Implementation

Function take the first argument named `mainClass` as start class and depend on condition merge it with the second argument named
`classList`. `classList` may be a string and array of string, If the second argument is neither string or array then will be omitted
and function return `mainClass`. 

```javascript
export default ( mainClass, classList ) => {
    let list;
    if ( typeof classList === "string" && classList !== "") {
      list = [ mainClass, classList ]
        .filter( item => item !== undefined && item !== null && item !== "" )
        .join( " " );
    } else if ( classList && classList.length ){
      list = [ mainClass, ...classList ]
        .filter( item => item !== undefined && item !== null && item !== "" )
        .join( " " );
    } else {
      list = mainClass;
    }

  return list;
};
```

##### How To Use?

Example
```javascript
...
setClassNames( "main-class", [ "this", "is", "class", "array" ]);  // Will return "main-class this is class array"
...
```

### [`WrapperCorner.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/WrapperCorner.js) Function Component

This component create corners for child element. They are display in top-left and bottom-right corner of element.
Component have following props:
 * `children` keep all children passed inside components tag;
 * `classNames` is CSS class list of component;
 * `id` is CSS component identifier.

Component use `setClassNames()` function that transform array to string. 

### [`Arrow.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Arrow.js) Function Component

This component specify appearance and behaviour of elements in component via following props:
 * `diection` describe direction the arrow is pointing;
 * `handleClick` function called after clicking on the arrow.

Component is used to display arrow for multi-functional purpose.

### [`Cell.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Cell.js) Function Component

Describe cell from the table and gets props: 
 * `children` keep all children passed inside components tag;
 * `value` is the text display in cell;
 * `classNames` is CSS class list associated with specific cell.

Component is used to display cell in table.

Component use `setClassNames()` function that transform array to string. 

### [`Hamburger.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Hamburger.js) Function Component

Describe button with three parallel bars that will change to cross after clicking on it a gets props:
 * `handleClick` function called after clicking on the button;
 * `classNames` is CSS class list associated with button.
  
Component is used to display dynamic button for close blocks. 

Component use `setClassNames()` function that transform array to string. 

### [`HeaderCell.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/HeaderCell.js) Function Component

Describe cell in header table and take props:
 * `value` is the text display in cell;
 * `classNames` is CSS class list associated with specific cell;
 * `sort` is sorting function passed from the parent.

Component is used to display cell in header table.

### [`HeaderTable.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/HeaderTable.js) Function Component

Describe appearance and behaviour elements inside this component. Component gets props:
 * `sort` is sorting function passed from the parent;
 * `isPending` is state passed from the parent, which determines if the filtering field is disabled;
 
Component use local state `screenWidth` via react hooks `useState()` and `useEffect()`. This state is responsible for screen
width and holds value of `window.innerWidth` object.

Component is used to display header row of table.

#### `isSmall` Function

Functions return boolean value depend on screen width. It used to disable some elements on small screen. 

### [`Input.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Input.js) Function Component

Describe block of <b>input</b> tag and associated with him <b>label</b> tag. Component gets props: 
 * `id` is CSS identifier of input element;
 * `name` is name associated with input element;
 * `type` is type of input element;
 * `label` is text display over input;
 * `disabled` is property determines if element is disabled or not; 
 * `filter` is function passed from parent, allows to filter by specific field;
 * `actionType` is type of action passes from parents.
 
Component use local state `focused` via react hooks `useState()`. This state is responsible for set focus on element.

Component is used to display input into filtering block and pass value from the input to store.

#### `changeFocus` Function

Changing focus element on enter and leave from input.

#### `handleChange` Function

Change focus element and filter by value form the input.

#### `disableNonNumeric` Function

Disable non numeric and negative value from numbers input. Function gets argument `evt` which is an event and gets it `data` 
and `target`. Check if input type is number and check if data from event is positive number. If provided value is negative 
value or non numeric value is not inserted into input value. 

### [`Loader.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/Loader.js) Function Component

Describe spinner that show depend on CSS class. It should show only data is fetching. Take one props from parent `classNames`
which is CSS class list.

Component is used to display spinner when fetching is not end.

Component use `setClassNames()` function that transform array to string. 

### [`PageList.js`](https://github.com/LZygmunt/companies/tree/master/src/components/misc/PageList.js) Function Component

Describe block with arrows and information about number of pages and current page. Component gets props:
 * `currentPage` is current page number;
 * `countPage` is number of pages;
 * `setPage` is function that set number of next and previous page;

Component is used to display block with arrows and text inform users which page is and how much pages is.

[<<< To Main Page <<<](https://github.com/LZygmunt/companies)
