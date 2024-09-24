import './App.css';
import { useState } from 'react';
 
function App() {
  const [userdata, setUserdata] = useState()
  function fetchdata() {
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(data => {
        setUserdata(data.data)
      })
  }
 
  return (
    <div>
      <div className='nav'>
        <div>
          <h1>Brand Name</h1>
        </div>
        <div>
          <button className='btn btn-dark' onClick={() => fetchdata()}>Get user</button>
        </div>
      </div>
      <div className='display'>
        {(userdata) ? userdata.map((val) => {
          return (
            <div className="card" style={{width: "18rem"}}>
              <img src={val.avatar} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{val.first_name}</h5>
                <p className="card-text">{val.last_name}</p>
              </div>
            </div>
          )
 
        }) : <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>}
      </div>
    </div>
  );
}
 
export default App;
 
 