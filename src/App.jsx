import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (customers) => {
    dispatch({ type: "ADD_CASH", payload: customers });
  };

  const deleteCustomer = (customer) => {
    dispatch({ type: "GET_CASH", payload: customers });
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
      {}
    </div>
  );
}

export default App;
