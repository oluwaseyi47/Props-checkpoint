import React from 'react'
import Profile from './Profile/Profile'


function App() {
  const handleName = () => {
    alert ('OLUWASEYI KAYODE')
  }

  return (
    <div className="App" style ={{ textAlign:'center'}}>
      <Profile fullName='OLUWASEYI KAYODE' bio ='I am really intereted in anything bringing money legitimately' profession='Software Engineer'>
        <img src='WhatsApp Image 2021-05-31 at 10.51.18 (1).jpeg' alt='Mypic' width ='200px'/>
      </Profile>

      <handleName>
        <button onClick={handleName} style ={{backgroundColor: 'orange', color: 'black'}}>
        My Name</button>
      </handleName>
    </div>
  );

}

export default App;
