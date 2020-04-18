import {
  REQUEST_INCOMES_PENDING,
  REQUEST_INCOMES_SUCCESS,
  REQUEST_INCOMES_FAILED,
  REQUEST_COMPANIES_PENDING,
  REQUEST_COMPANIES_SUCCESS,
  REQUEST_COMPANIES_FAILED
} from "../utils/constans";

export const requestIncomesPendingEnable = () => ({
  type: REQUEST_INCOMES_PENDING, payload: true
});

export const requestIncomesPendingDisable = () => ({
  type: REQUEST_INCOMES_PENDING, payload: false
});

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

export const requestCompanies = () => dispatch => {
  dispatch({ type: REQUEST_COMPANIES_PENDING });
  fetch( "https://recruitment.hal.skygate.io/companies" )
    .then( res => res.json())
    .then( data => dispatch({ type: REQUEST_COMPANIES_SUCCESS, payload: data }))
    .catch( error => dispatch({ type: REQUEST_COMPANIES_FAILED, payload: error }))
};
