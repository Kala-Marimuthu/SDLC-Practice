import React from "react";
import ReactDOM from "react-dom/client";
/*function Sample()
{ 
  return <h1>Welcome</h1>
}
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Sample/>);*/
  

//Basic rendering

/*const Sample=()=>{
  return(
    <div>
      <h1>My first react project</h1>
      <p>React is a java script library for building user interface</p>

    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>);*/

//Dynamic rendering
const App=()=>{
  const username="kala";
  const password="1234"
  return(
    <div>
      <h1>My first react project {username} and {password} </h1>
      <p>{new Date().toLocaleDateString()}</p>
      <p>React is a Javascript library for building user interface</p>
      <label>Username</label>
      <input type="text" placeholder="enter your name"/>
      <br/>
      <label>Password</label>
      <input type="password" placeholder="enter your password"/>
      <br/>
      <button>submit</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App/>);