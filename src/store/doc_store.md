# STORE

Store allow share state between components in entire component tree. To use state from store you have map state from 
store to component prop and connected store with component.
```javascript 
const mapStateToProps = state => ({
    ...
    myVar: state.myVar,
    ...
});
...
export default connect( mapStateToProps, null )( MyComponent );
```
After this you can use state via name, in this situation is `this.props.myVar`.

To change state you have to dispatch action to store. Let see code below.

```javascript 
const mapDispatchToProps = dispatch => ({
    ...
    action: () => dispatch({ type: changeState, payload: "valu of new state" }),
    ...
});
...
export default connect( null, mapDispatchToProps )( MyComponent );
```
First create dispatch map of actions then connected store with components. Action are functions and use it as a function,
eg. `this.props.action()`.

Store in this project use [redux](https://redux.js.org/) and [redux-thunk](https://github.com/reduxjs/redux-thunk) library.

For more info about store and redux library [see this](https://redux.js.org/introduction/getting-started).

## Actions

Actions allows secure way change state in store. Via actions you may fetch data from external API. 

### Filter Actions

#### `filter` Function

Take filter action type and value form filter input.

##### Implementation

```javascript
export const filter = ( type, value ) => ({
  type: type,
  payload: value
});
```

Allows action type:
 * SET_FILTER_ID
 * SET_FILTER_NAME
 * SET_FILTER_CITY
 * SET_FILTER_AVERAGE_INCOME_TO
 * SET_FILTER_TOTAL_INCOME_TO
 * SET_FILTER_LAST_MONTH_INCOME_TO
 * SET_FILTER_AVERAGE_INCOME_FROM
 * SET_FILTER_TOTAL_INCOME_FROM
 * SET_FILTER_LAST_MONTH_INCOME_FROM

Second argument is value. Value may be anything you want.

##### How To Use?

First you have to import action to destination file, for example like this:
```javascript
import { filter } from "../../store/actions";
```
Then create dispatch map as shown on [top](https://github.com/LZygmunt/companies/tree/master/src/store/doc_store#Store).
Dispatch function send action to reducer. When you have dispatch map you may use action in your component.

Example
```javascript
import { filter } from "../../store/actions";
...
const mapDispatchToProps = dispatch => ({
  filter: ( type, value ) => dispatch( filter( type, value ))
});
...
class MyComponent extends React.Component {
  ...
  handler = () => {
    this.props.filter( "SET_FILTER_ID", 2 );
  };
  ...
}
...
export default connect( null, mapDispatchToProps )( MyComponent );
```

### Request Actions

#### `requestIncomesPendingEnable` and `requestIncomesPendingDisable` Functions

Change pending state associated with requesting incomes;

##### Implementation

<b>requestIncomesPendingEnable</b> set `isPending` state to true.

<b>requestIncomesPendingDisable</b> set `isPending` state to false.

Both functions have same action type `REQUEST_INCOMES_PENDING`.
```javascript
export const requestIncomesPendingEnable = () => ({
  type: REQUEST_INCOMES_PENDING, payload: true
});

export const requestIncomesPendingDisable = () => ({
  type: REQUEST_INCOMES_PENDING, payload: false
});
```

##### How To Use?

Like others actions you have first import action then map dispatch to props. After then you can use actions.
Example
```javascript
requestIncomesPendingEnable();
requestIncomesPendingDisable();
```

#### `requestIncomes` Function

Fetch from endpoint incomes for specific company id, prepare data for `totalIncome`, `averageIncome` and `lastMonthIncome`.
On the end dispatch action with type `REQUEST_INCOMES_SUCCESS` and payload. Payload contains info about company incomes such as
`id`, `totalIncome`, `averageIncome` and `lastMonthIncome`. When an error occurs, the failed action was called and the error message 
will be saved in state `error`.
 
##### Implementation

First function take argument `companyId` then fetch from endpoint incomes depend on `companyId`. When data is fetched function
prepare total, average and last month incomes and dispatch action to reducer. If response send error status `.catch()` catch them 
and dispatch failed action to reducer.

```javascript
export const requestIncomes = companyId => dispatch => {
  fetch( `https://recruitment.hal.skygate.io/incomes/${ companyId }` )
    .then( res => res.json())
    .then( data => {
      const currentDate = new Date();
      let total, average, lastMonth, incomeDate;
      total = 0;
      lastMonth = 0;

      data.incomes.forEach( income => {
        incomeDate = new Date( income.date );
        if ( incomeDate.getMonth() === currentDate.getMonth() - 1) {
          lastMonth += +income.value;
        }
        total += +income.value;
      });

      total = Math.round( total * 100 ) / 100;
      lastMonth = Math.round( lastMonth * 100 ) / 100;
      average = Math.round( total / data.incomes.length * 100 ) / 100;

      dispatch({
        type: REQUEST_INCOMES_SUCCESS,
        payload: {
          id: data.id,
          totalIncome: total,
          averageIncome: average,
          lastMonthIncome: lastMonth
        }})
    })
    .catch( error => dispatch({ type: REQUEST_INCOMES_FAILED, payload: error}))
};
```

##### How To Use?

Like others actions you have first import action then map dispatch to props. After then you can use actions.

Example
```javascript
requestIncomes( 2 );  // Pass a number via companyId parameter
```

#### `requestCompanies` Function

Request API for companies and fetch companies into state. 

##### Implementation

After call first dispatch pending action. Then fetch data from endpoint and through success action set data in state.
If error occurrence it will save in state.
```javascript
export const requestCompanies = () => dispatch => {
  dispatch({ type: REQUEST_COMPANIES_PENDING });
  fetch( "https://recruitment.hal.skygate.io/companies" )
    .then( res => res.json())
    .then( data => dispatch({ type: REQUEST_COMPANIES_SUCCESS, payload: data }))
    .catch( error => dispatch({ type: REQUEST_COMPANIES_FAILED, payload: error }))
};
```

##### How To Use?

Use like other action.

Example
```javascript
requestCompanies();  
```

## Reducers

Reducers are pure function return always the same output. Reducer take current state and type from called 
action. After copy entire state and payload value from action, it merges them into object which is returned.

To use reducers you have to create store in `src/index.js` file.

```javascript
...
const store = createStore( requestReducer );
...
```

Then wrapped your main component with Provider component and pass to Provider component store as a props. 

```javascript
...
ReactDOM.render( <Provider store={ store }><MainComponent/></Provider>, document.getElementById('root')
);
...
```

Now you can use store in your app.

### Filter Reducers

#### `filterReducer` Function

This reducer manage state associated with filtering functionality.

##### Implementation

First create initial state which is default value for reducer function. Initial state for this reducer has `id`, `name`,
`city`, `averageIncome`, `totalIncome`, `LastMonthIncome` and values assigned to them as shown below.
```javascript
const initState = {
  id: "",
  name: "",
  city: "",
  averageIncome: { from: 0, to: 0 },
  totalIncome: { from: 0, to: 0 },
  lastMonthIncome: { from: 0, to: 0 }
};
```

Below function has switch case instruction. In case condition you have type of action used by this reducer. 
Each condition case is assigned to a different state, which changes.

```javascript
export const filterReducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case SET_FILTER_ID:
      return {
        ...state,
        id: action.payload
      };
    case SET_FILTER_CITY:
      return {
        ...state,
        city: action.payload
      };
    case SET_FILTER_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SET_FILTER_AVERAGE_INCOME_FROM:
      return {
        ...state,
        averageIncome: {
          from: action.payload,
          to: state.averageIncome.to
        }
      };
    case SET_FILTER_LAST_MONTH_INCOME_FROM:
      return {
        ...state,
        lastMonthIncome: {
          from: action.payload,
          to: state.lastMonthIncome.to
        }
      };
    case SET_FILTER_TOTAL_INCOME_FROM:
      return {
        ...state,
        totalIncome: {
          from: action.payload,
          to: state.totalIncome.to
        }
      };
    case SET_FILTER_AVERAGE_INCOME_TO:
      return {
        ...state,
        averageIncome: {
          to: action.payload,
          from: state.averageIncome.from
        }
      };
    case SET_FILTER_LAST_MONTH_INCOME_TO:
      return {
        ...state,
        lastMonthIncome: {
          to: action.payload,
          from: state.lastMonthIncome.from
        }
      };
    case SET_FILTER_TOTAL_INCOME_TO:
      return {
        ...state,
        totalIncome: {
          to: action.payload,
          from: state.totalIncome.from
        }
      };
    default:
      return state;
  }
};
```

### Request Reducers

#### `requestReducer` Function

This reducer manage state associated with requesting functionality.

##### Implementation

First create initial state with `companies`, `incomes`, `isPending`, `error` states and their values.

```javascript
const initState = {
  companies: [],
  incomes: [],
  isPending: "",
  error: ""
};
```

Like `filterReducer` this reducer is function and take two parameters `state` and `action`. Switch case instruction
recognised which action typ is use and change specific state associated with type.

```javascript
export const requestReducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case REQUEST_COMPANIES_PENDING:
      return {
        ...state,
        isPending: REQUEST_COMPANIES_PENDING
      };
    case REQUEST_COMPANIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: ""
      };
    case REQUEST_COMPANIES_SUCCESS:
      return {
        ...state,
        companies: action.payload,
        isPending: ""
      };
    case REQUEST_INCOMES_PENDING:
      return {
        ...state,
        isPending: action.payload ? REQUEST_INCOMES_PENDING: ""
      };
    case REQUEST_INCOMES_SUCCESS:
      let incomes = [ ...state.incomes ];
      incomes.push({ ...action.payload });
      return {
        ...state,
        incomes: incomes
      };
    case REQUEST_INCOMES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: ""
      };
    default:
      return state;
  }
};
```

## Utils

### Constants

 * REQUEST_COMPANIES_PENDING - constants use to set pending for companies request
 * REQUEST_COMPANIES_SUCCESS - constants use to set companies state
 * REQUEST_COMPANIES_FAILED - constants use to set error message
 * REQUEST_INCOMES_PENDING - constants use to set pending for incomes request
 * REQUEST_INCOMES_SUCCESS - constants use to set incomes state
 * REQUEST_INCOMES_FAILED - constants use to set error message
 * SET_FILTER_ID - constants use to filter by id value
 * SET_FILTER_NAME - constants use to filter by name value
 * SET_FILTER_CITY - constants use to filter by city value
 * SET_FILTER_AVERAGE_INCOME_TO - constants use to filter by average income to value
 * SET_FILTER_TOTAL_INCOME_TO - constants use to filter by total income to value
 * SET_FILTER_LAST_MONTH_INCOME_TO - constants use to filter by  by last month income to value
 * SET_FILTER_AVERAGE_INCOME_FROM - constants use to filter by average income from value
 * SET_FILTER_TOTAL_INCOME_FROM - constants use to  filter by total income from value
 * SET_FILTER_LAST_MONTH_INCOME_FROM - constants use to filter by last month income from value
 * INCREASE - constants use to go to the next page
 * DECREASE - constants use to go to the previous page

[<<< To Main Page <<<](https://github.com/LZygmunt/companies)
