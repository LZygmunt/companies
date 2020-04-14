import {
  SET_FILTER_AVERAGE_INCOME,
  SET_FILTER_CITY,
  SET_FILTER_ID,
  SET_FILTER_LAST_MONTH_INCOME,
  SET_FILTER_NAME,
  SET_FILTER_TOTAL_INCOME
} from "../utils/constans";

const initState = {
  id: "",
  name: "",
  city: "",
  averageIncome: "",
  totalIncome: "",
  lastMonthIncome: ""
};

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
    case SET_FILTER_AVERAGE_INCOME:
      return {
        ...state,
        averageIncome: action.payload
      };
    case SET_FILTER_LAST_MONTH_INCOME:
      return {
        ...state,
        lastMonthIncome: action.payload
      };
    case SET_FILTER_TOTAL_INCOME:
      return {
        ...state,
        totalIncome: action.payload
      };
    default:
      return state;
  }
};
