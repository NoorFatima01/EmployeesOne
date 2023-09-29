import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({selectedTeam, count}) => {
    return (
      <header className="container">
        <div className='row justify-content-center mt-3 mb-4'>
            <div className='col-8'>
            <h1>Team M
            ember Allocation</h1>
        <h3>{selectedTeam} has {count}</h3>
            </div>
        </div>
        
      </header>
    );
  }
  export default Header