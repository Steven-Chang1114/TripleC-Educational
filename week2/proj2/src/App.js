import logo from './logo.svg';
import './App.css';
import Form from './Form'
import { useState, useEffect } from 'react';

function App() {
  const [header, setHeader] = useState("Default");

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }
  }



  const onAppBtnClick = (val) => {
    if (val.name && val.age) {
      console.log(val)
    } else {
      console.log("ERROR")
    }
  }

  return (
    <div style={styles.container}>
      <h1 className='header'>User signup form</h1>
      <Form onBtnClick={onAppBtnClick}/>
    </div>
  );
}

export default App;
