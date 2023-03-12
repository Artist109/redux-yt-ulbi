import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./store/asyncAction/customers";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addBulkCustomerAction,
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  // в state.cash.cash первый cash это ключ в объекте rootReducer, т.е. вначале ключ - говорим к какому редюсеру обращаемся,
  // а потом к каким данным к этом редюсере
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(cash);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer1 = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer1));
  };

  //  const addBulkCustomers = () => {
  //    dispatch(addBulkCustomerAction(fetchCustomers()));
  //  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
      <div>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button>
        {customers.length > 0 ? (
          customers.map((c) => (
            <div onClick={() => removeCustomer(c)}>{c.name}</div>
          ))
        ) : (
          <div>Клиентов пока нет!</div>
        )}
      </div>
    </div>
  );
}

export default App;
