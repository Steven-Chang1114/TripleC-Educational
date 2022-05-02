import { useState, useEffect, useContext } from 'react';

const Form = (props) => {
    const [userInfo, setUserInfo] = useState({})

    useEffect(()=> {
      console.log("Called")
    },[])

    const styles = {
      form: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "1px",
        borderRadius: "10%",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
      },
      btn: {
        borderStyle: "solid",
        borderColor: "green",
        backgroundColor: "green",
        color: "white",
        borderWidth: "1px",
        borderWadius: "12px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        paddingRight: "10px"
      }
    }

    return (
      <div style={styles.form}>
              <div >
                    <label >Name:</label>
                    <input onChange={e=>{setUserInfo({...userInfo, name: e.target.value})}} />
                </div>
                <label>Age:</label>
                <input onChange={e=>{
                      setUserInfo({...userInfo, age: e.target.value})
                      }}/>
                <p>Your status:</p>
                <div>
                    <input
                           checked onChange={e=>{
                      setUserInfo({...userInfo, status: "freshman"})
                      console.log(userInfo)
                      }}/>
                    <label>Freshman</label>
                  </div>
                  
                  <div>
                    <input onChange={e=>{
                      setUserInfo({...userInfo, status: "sophomore"})
                      console.log(userInfo)
                      }}/>
                    <label>Sophomore</label>
                  </div>
                  <input style={styles.btn} value="Click" onClick={() => props.onBtnClick(userInfo)} />
      </div>
    );
  }
  
  export default Form;