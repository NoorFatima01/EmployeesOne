import './App.css';
import Header from './Header.js'
import Emp from './Employees.js'
import Footer from './Footer.js'
import Grouped from './Grouped';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Nav'
import NotFound from './NotFound';

function App() {
  const[empl,setempl] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {id:1, fullName:"Bob Jones",designation:"JS Dev",gender:"male",team:"TeamA"},
    {id:2, fullName:"Jill B",designation:"Node dev",gender:"male",team:"TeamA"},
    {id:3, fullName:"John Smith", designation:"sjhdgs",gender:"female",team:"TeamB"},
    {id:4, fullName:"Michael M", designation:"kougwodiuj",gender:"male",team:"TeamB"},
    {id:5, fullName:"K Robert",designation:"qwerrty",gender:"male",team:"TeamC"},
    {id:6, fullName:"kjhcdfg",designation:"lkjderthj",gender:"female",team:"TeamC"}]);

useEffect(() => {
   localStorage.setItem('employeeList',JSON.stringify(empl));
},[empl])


const[selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")
   
function teamChange(event){
    setTeam(event.target.value)
}

useEffect(() => {
  localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
},[selectedTeam])

function cardClick(event){
    const transformed = empl.map((empl) => empl.id === parseInt(event.currentTarget.id)?(empl.team === selectedTeam)?{...empl,team:''}:{...empl,team:selectedTeam }:empl)
    setempl(transformed)
}

  return (
    <Router>
      <Nav/>
      <Header  selectedTeam = {selectedTeam}
      count = {empl.filter((empl)  => empl.team === selectedTeam).length}    
      />
       <Routes>
        <Route path="/" element = {<Emp empl={empl} selectedTeam={selectedTeam}
      cardClick={cardClick}
      teamChange={teamChange}/>
        }></Route>

        <Route path="/Grouped" element={<Grouped empl={empl} selectedTeam={selectedTeam} setTeam={setTeam}/>}></Route> 
        <Route path="*" element={<NotFound/>}>

        </Route>
      </Routes>  

      <Footer/>
    </Router>
  );
}

export default App;

