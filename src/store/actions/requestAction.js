import {
  REQUEST_INCOMES_PENDING,
  REQUEST_INCOMES_SUCCESS,
  REQUEST_INCOMES_FAILED,
  REQUEST_COMPANIES_PENDING,
  REQUEST_COMPANIES_SUCCESS,
  REQUEST_COMPANIES_FAILED
} from "../utils/constans";

export const requestIncomes = companyId => dispatch => {
//   dispatch({ type: REQUEST_INCOMES_PENDING });
//   fetch( `https://recruitment.hal.skygate.io/incomes/${ companyId }` )
//     .then( res => res.json())
//     .then( data => dispatch({ type: REQUEST_INCOMES_SUCCESS, payload: data }))
//     .catch( error => dispatch({ type: REQUEST_INCOMES_FAILED, payload: error}))
};

export const requestCompanies = () => dispatch => {
  dispatch({ type: REQUEST_COMPANIES_PENDING });
  fetch( "https://recruitment.hal.skygate.io/companies" )
    .then( res => res.json())
    .then( data => dispatch({ type: REQUEST_COMPANIES_SUCCESS, payload: data }))
    .catch( error => dispatch({ type: REQUEST_COMPANIES_FAILED, payload: error}))

};
