import {
  REQUEST_COMPANIES_FAILED,
  REQUEST_COMPANIES_PENDING,
  REQUEST_COMPANIES_SUCCESS,
  REQUEST_INCOMES_FAILED,
  REQUEST_INCOMES_PENDING,
  REQUEST_INCOMES_SUCCESS
} from "../utils/constants";

const initState = {
  companies: [],
  incomes: [],
  isPending: "",
  error: ""
};

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
