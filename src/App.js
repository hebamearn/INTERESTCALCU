import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setprinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0)
   
  
  const validate = (e) => {
   const { name, value } = e.target;
    if (name === 'principle') {
      setprinciple(value)
    }
    else if (name === 'interestRate') {
      setRate(value)
    }
    else {
      setYear(value)
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("principle amount enterd", principle);
    console.log("intrest rate", rate);
    console.log("total year", year);
    const result = ((principle*rate*year) / 100)
    setInterest(result)
  }
  return (
    <>
      <div style={{ backgroundColor: "black", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <div style={{ backgroundColor: "white", width: "500px" }} className='p-5 rounded'>
          <h2>Simple Intrest Application</h2>
          <p>calculate your simple intrest easily</p>
          <div style={{ height: '150px', backgroundColor: "orange" }}
            className='p-3 mt-3 rounded shadow d-flex justify-content-center align-items-center flex-coloumn' >
            <h2 className='fw-bold'>&#8377; {interest} </h2>
            <p>Total simple intrest</p>

          </div>
          <form onSubmit={handleCalculate}>
            <div className='mt-3'>
              <TextField id="outlined-basic" label="principle amount" variant="outlined" className='w-100' name="principle"
                onChange={(e) => validate(e)} />
              <div className='mt-3'>
                <TextField id="outlined-basic" label="Rate of intrest in %" variant="outlined" className='w-100 ' name="intrestRate" onChange={(e) => validate(e)} />
              </div>
              <div>
              <TextField id="outlined-basic" label="Total years" variant="outlin ed" className='w-100 mt-3' name="totalYear" onChange={(e) => validate(e)} />
              </div>
             
            </div>
            <div className='mt-3 d-flex justify-content-between'>
              <Button variant="contained" color="success" style={{ width: "190px", padding: "10px" }} type='submit'>
                CALCULATE
              </Button>
              <Button variant="outlined" style={{ width: "190px", padding: "10px" }} >
                RESET
              </Button>
            </div>
          </form>

        </div>

      </div>
    </>

  );
}

export default App;
