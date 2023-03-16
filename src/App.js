import { useState } from "react";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import {v4 as uuidv4} from 'uuid';

function App() {


  const [transactions, setTransactions] = useState([])

  const saveTransaction = (transaction) =>{
    const newTransaction = {
      id : uuidv4(),
      text : transaction.text,
      amount : parseInt(transaction.amount)
    }
    setTransactions([...transactions ,newTransaction ])
  }

  const deleteTransaction = (id) =>{
    setTransactions(transactions.filter(item => item.id !== id))
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <MainSection transactions={transactions} saveTransaction={saveTransaction}/>
        <BalanceSection transactions={transactions}/>
        <ListGroup transactions={transactions} deleteTransaction={deleteTransaction}/>
      </div>
    </>
  );
}

export default App;
