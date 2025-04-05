import React from 'react';
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
    <div
      className="App"
      style={{
        background: 'linear-gradient(to right, #f4acfe, #00f2fe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="container"
        style={{
          textAlign: 'center',
          border: '2px solid black',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'transparent',
          borderRadius: '40px',
          padding: '30px',
        }}
      >
        <h2
          style={{
            textDecoration: 'underline',
            fontSize: '24px',
            marginBottom: '20px',
          }}
        >
          BMI Calculator
        </h2>
        <form onSubmit={calcBMI}>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Pacifico, cursive',
                marginBottom: '8px',
              }}
            >
              Weight (lbs)
            </label>
            <input
              type="number"
              min="1"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                borderRadius: '20px',
                height: '40px',
                width: '100%',
                border: '2px solid black',
                padding: '0 10px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Pacifico, cursive',
                marginBottom: '8px',
              }}
            >
              Height (inches)
            </label>
            <input
              type="number"
              min="1"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{
                borderRadius: '20px',
                height: '40px',
                width: '100%',
                border: '2px solid black',
                padding: '0 10px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <button
              className="btn btn-success"
              type="submit"
              style={{
                flex: 1,
                height: '40px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
            <button
              className="btn btn-outline btn-danger"
              type="button"
              onClick={reload}
              style={{
                flex: 1,
                height: '40px',
                backgroundColor: '#f8d7da',
                color: '#721c24',
                border: '1px solid #f5c6cb',
                borderRadius: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Reload
            </button>
          </div>
        </form>
        <div className="center" style={{ marginTop: '20px' }}>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
