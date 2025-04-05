import React from 'react'
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBMI = (e) => {
    e.preventDefault();

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h) {
      alert('Please enter a valid weight and height');
      return;
    }

    const calculatedBMI = (w / (h * h)) * 703;
    setBmi(calculatedBMI.toFixed(1));

    if (calculatedBMI < 25) {
      setMessage('You are under weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      setMessage('You are healthy');
    } else {
      setMessage('You are over weight');
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='App'
    style={{
    background: 'linear-gradient(to right, #f4acfe, #00f2fe)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
  }}>
      <div className="container" style= {{
        textAlign: 'center', 
        border:'2px solid black',
        height: '65vh',
        width: '30vw',
        backgroundColor:'transparent',
        borderRadius:'40px',
        }}>
      <h2 style={{
        textDecoration: 'underline',
      }}>BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label style={{
             marginTop: '5vh',
             fontWeight: 'bold',
             fontSize:'20px',
             marginRight:'80px',
             fontFamily:'Pacifico cursive',
            }}>Weight (lbs)</label>
            <br/>
            <input
            
              type="number"
              min="1"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                borderRadius:'20px',
                height:'7vh',
                width:'25vw',
                border:'2px solid black',
              }}/>
          </div>
          <div>
            <label style={{
              marginTop: '5vh',
              fontWeight:'bold',
              fontWeight: 'bold',
             fontSize:'20px',
             marginRight:'50px',
             fontFamily:'Pacifico cursive',
            }}>Height (inches)</label><br/>
            <input
              type="number"
              min="1"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{
                borderRadius:'20px',
                height:'7vh',
                width:'25vw',
                border:'2px solid black',
              }}
            />
          </div>
          <div>
            <button className="btn btn-success" type="submit"
            style={{
              marginTop:'5vh',

            }}>Submit</button>
            <button className="btn btn-outline btn-danger" type="button" onClick={reload}
            style={{
              marginTop:'5vh',
              marginLeft:'2vh',
            }}>Reload</button>
          </div>
        </form>
        <div className="center">
          <h3 style={{
            marginTop:'2vh',
          }}>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
