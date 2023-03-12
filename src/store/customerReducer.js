const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_BULK_CUSTOMERS = "ADD_BULK_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BULK_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((c) => c.id !== action.payload),
      };

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});
export const addBulkCustomerAction = (payload) => ({
  type: ADD_BULK_CUSTOMERS,
  payload,
});

export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
