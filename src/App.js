import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Signin from './Components/SignInPage/SignInPage';
import Web3 from 'web3';
import  ServiceAgreement  from  "./contracts/ServiceAgreement.json";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import JobPosting from './Components/JobPostingPage/JobPostingPage';
// const Web3=require('web3');
function App() {
  console.log(ServiceAgreement);
  const [account, setAccount]=useState();
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
  return (

    <Router>
            <Routes>
                <Route exact path="/" element= {<HomePage account={account}/>} />
                <Route path = "/signin" element = {<Signin />} />
                <Route path = "/jobposting" element = {<JobPosting />} />
            </Routes>
    </Router>
    
  );
}

export default App;
