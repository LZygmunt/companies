import {
  SET_FILTER_AVERAGE_INCOME_TO,
  SET_FILTER_AVERAGE_INCOME_FROM,
  SET_FILTER_CITY,
  SET_FILTER_ID,
  SET_FILTER_LAST_MONTH_INCOME_TO,
  SET_FILTER_LAST_MONTH_INCOME_FROM,
  SET_FILTER_NAME,
  SET_FILTER_TOTAL_INCOME_TO,
  SET_FILTER_TOTAL_INCOME_FROM
} from "../utils/constans";

const initState = {
  id: "",
  name: "",
  city: "",
  averageIncome: { from: 0, to: 0 },
  totalIncome: { from: 0, to: 0 },
  lastMonthIncome: { from: 0, to: 0 }
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
