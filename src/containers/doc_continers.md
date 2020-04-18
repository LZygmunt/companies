# CONTAINERS

Here you find info about containers used in app. Containers provide logic such as fetch API call, manage local state, 
complex logic that returns data which is provide to presentation components.

## App

### [`App.js`](https://github.com/LZygmunt/companies/tree/master/src/containersapp/App.js) Class Component

App container hold whole application and is connect with store, fetch companies and incomes via store action.

#### `mapStateToProps` and `mapDispatchToProps` Functions

This functions allows to use store actions and states in components.

#### `componentDidMount` Method

Fetch companies via `requestCompanies()` action passed as props.

#### `componentDidUpdate` Method

Change `isPending` state to true and start fetch requesting incomes for each companies when companies was fetched.
When all incomes will fetch `componentDidUpdate` will change `isPending` state to true.

## Company

### [`CompanyContainer.js`](https://github.com/LZygmunt/companies/tree/master/src/containers/company/CompanyContainer.js) Class Component

#### `mapStateToProps` and `mapDispatchToProps` Functions

This functions allows to use store actions and states in components.

#### State

State hold data like current page, number of all page, number of companies display in one page, current 
state of company list, sorting type( ascending and descending ) and current column after which the table is sorted.  

##### Implementation

```javascript
...
state = {
    currentPage: 1,
    countPage: 1,
    resultsNumber: 10,
    companies: [],
    sortType: "",
    column: ""
  };
...
```

#### `componentDidUpdate` Method

 * If fetch incomes already done method merges companies and incomes and save result of merge to state;
 * Set count page after filtering;
 * Sort table if sorting action occurrence;

#### `intervalCondition` Method

Method check how to filter array depend on different condition.

I predicate five conditions:
 * If `from` and `to` value is equal to 0
 * If `from` is not equal to 0 and `to` is equal to 0
 * If `from` is equal to 0 and `to` is not equal to 0
 * If `from` and `to` is greater than 0 and `to` is smaller than `from`
 * If `from` and `to` is greater than 0 and `to` is greater than or equal to `from`

##### Implementation

Function take three arguments `arr`, `obj`, `el`. 
 * `arr` is array that you want to filter;
 * `obj` is object by which the array will be filtered;
 * `el` is string representation of `object`.

```javascript
intervalCondition = ( arr, obj, el ) => {
    switch ( true ) {
      case +obj.from === 0 && +obj.to !== 0:
        return arr = arr.filter( item => +item[ el ] < +obj.to );
      case +obj.to === 0 && +obj.from !== 0:
        return arr = arr.filter( item => +item[ el ] > +obj.from);
      case +obj.from > 0 && +obj.to > 0 && +obj.to < +obj.from :
        return arr;
      case +obj.from > 0 && +obj.to > 0:
        return arr = arr.filter(
          item => +item[ el ] > +obj.from && +item[ el ] < +obj.to
        );
      default:
        return arr
    }
  };
```

##### How To Use?

Call function with parameters like this:
```javascript
...
intervalCondition( filteredCompanies, totalIncome, "totalIncome" );
...
```

#### `filteredCompanies` Method

Filter companies array by filter inputs delivered from another component.

#### `setCountPage` Method

Set count page from passed array and limit page count delivered from the props. Function divide length of passed array
by limit page count and save it into state.  

#### `setPage` Method

Set page number via action type. If action type si equal to `INCREASE` will increase current page. 
If action type si equal to `DECREASE` will decrease current page.

#### `setDisplayCompanies` Method

Return part of array depend on current page and limit items number on page.

#### `swap` Method

Swap items in array.

##### Implementation

Function take `arr`, `i` and `j` arguments. `arr` is array in which items will be change. `i`, `j` are indexes of swapping elements.
Element on `i` index is assign to temporary variable and on his place was inserted element on `j` index. Then on `j` element
place is inserted element `i` which is in temporary variable.

```javascript
swap = ( arr, i, j ) => {
    const temp = arr[ i ];
    arr[ i ] = arr[ j ];
    arr[ j ] = temp;
  };
```

##### How To Use?

Call function signature with specific parameters.

Example

```javascript
let arr = new Array( "zero", "first", "second", "third" );
...
swap( arr, 2, 0 );   // After call array wil be ["second", "first", "zero", "third"]
...
```

#### `partition` Method

Set and return `partitionIndex` and depend on `sortType` state execute specific sort algorithm. 

Type of sort used in function:
 * "asc" for ascending
 * "desc" for descending

##### Implementation

In this function, I keep move all the items smaller than the pivot value to the left and larger than pivot 
value to the right( for ascending sorting ) or greater than the pivot value to the left and smaller than pivot 
value to the right( for descending sorting ). I have to keep track the position of the partition, so I 
using `partitionIndex` variable and it's initial value is assign to left.

```javascript
partition = ( arr, pivot, left, right, column, sortType ) => {
    const pivotValue = arr[ pivot ];
    let partitionIndex = left;

    for( let i = left; i < right; i++ ) {
      if ( sortType === "asc" && arr[ i ][ column ] < pivotValue[ column ] ) {
        this.swap( arr, i, partitionIndex );
        partitionIndex++;
      } else if ( sortType === "desc" && arr[ i ][ column ] > pivotValue[ column ] ) {
        this.swap( arr, i, partitionIndex );
        partitionIndex++;
      }
    }

    this.swap( arr, right, partitionIndex );
    return partitionIndex;
  };
```

##### How To Use?

Call function signature with specific parameters.

Example

```javascript
let arr = new Array(
  { id: 0, name: "zero" }, 
  { id: 1, name: "first" },
  { id: 2, name: "second" }, 
  { id: 3, name: "third" }
);
...
partition( arr, arr.length - 1, 0, arr.length - 1, "id", "asc" ); 
...
```

#### `quickSort` Method

Main method for quick sorting. This method execute `partition()` method, recursive call self and returns sorted array. 

Type of sort used in function:
 * "asc" for ascending
 * "desc" for descending

##### Implementation

Method take parameters such as:
 * `arr` is array to sort 
 * `left` and `right` are boundary index that tell method to stop
 * `column` is object by which the array will be sorted
 * `sortType` is type sorting using by algorithm

Check that algorithm not hit bound. If not achieve bound assign `right` to `pivot` variable and take `partitionIndex`
from `partition()` method. Then call self recursive in two cases. In first case is array that have value smaller than element
on `partitionIndex` - 1 index. In second case is array that have value greater than element on `partitionIndex` + 1 index.

```javascript
quickSort = ( arr, left, right, column, sortType ) => {
    let pivot, partitionIndex;

    if ( left < right ) {
      pivot = right;
      partitionIndex = this.partition( arr, pivot, left, right, column, sortType );

      this.quickSort( arr, left, partitionIndex - 1, column, sortType );
      this.quickSort( arr, partitionIndex + 1, right, column, sortType );
    }

    return arr;
  };
```

##### How To Use?

Call function signature with specific parameters.

Example

```javascript
let arr = new Array(
  { id: 0, name: "zero" }, 
  { id: 1, name: "first" },
  { id: 2, name: "second" }, 
  { id: 3, name: "third" }
);
...
quickSort( arr, 0, arr.length - 1, "id", "asc" ); 
...
```

#### `sort` Method

Method handle click event and set column and sort type depend on clicked element.

Type of sort used in function:
 * "asc" for ascending
 * "desc" for descending

##### Implementation

Method gets from event current target and classes from element. Depending on get classes, methods set column and sorting type and 
save it in state. Next selects element that will change CSS classes.

```javascript
sort = evt => {
    const { currentTarget } = evt;
    const { className, classList } = currentTarget.previousElementSibling;

    let column = classList[ 1 ].split( '-' );
    column.forEach(( string, index ) => ( index > 0 )
      ? column[ index ] = string[ 0 ].toUpperCase() + string.slice( 1 )
      : column[ index ]);
    column = column.join( '' );

    this.setState({ column: column });

    let nextEl = document
      .querySelector( `.${ className.replace( ' ', '.' )}` )
      .nextElementSibling;

    if ( currentTarget.dataset["direction"] === "down" ) {
      nextEl.dataset[ "direction" ] = "up";
      nextEl.children[ 0 ].classList.replace( "arrow-down", "arrow-up" );
      this.setState({ sortType: "asc" });
    } else if ( currentTarget.dataset["direction"] === "up" ) {
      nextEl.dataset[ "direction" ] = "down";
      nextEl.children[ 0 ].classList.replace( "arrow-up", "arrow-down" );
      this.setState({ sortType: "desc" });
    }
  };
```

##### How To Use?

Bind to the `onClick` props in your components.

Example

```javascript
...
<input
  ...
  onClick={ sort }
  ...
/>
...
```

## Filter

### [`FilterContainer.js`](https://github.com/LZygmunt/companies/tree/master/src/containers/filter/FilterContainer.js) Class Component

#### `mapStateToProps` and `mapDispatchToProps` Functions

This functions allows to use store actions and states in components.

#### State

`close` state defines that filter block is open or close.

#### `componentDidMount` Method

Check if window width is smaller than or equal to 1024px. If condition is true set `close` state to true. 

#### `handleClick` Method

Method is used for change `close` state value.

[<<< To Main Page <<<](https://github.com/LZygmunt/companies)
