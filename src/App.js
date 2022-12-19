import { useEffect, useState } from "react";
// import Search from "./components/Search";
import "./components/Style.css";
import CardOne from "./components/CardOne";


 
function App() {
  const [searchOne, setSearchOne] = useState("");
  const [data, setData] = useState([]);
  const [flag,setFlag]= useState("user");
  const [show,setShow] = useState(true);
  

  const userData =()=>{
    if (flag === "company" ){
      setFlag("user")   
    }
  }
  
  const companyData =()=>{
    if (flag === "user" ) {
      setFlag("company")
    }
  }
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setData(users));
  }, []);

  


  const filterDataChange = data.filter((data) =>
    data.name.toLowerCase().includes(searchOne.toLowerCase())
  );
 

  return (
    <div className="App">
      <h3>User Details and Company Details</h3>
      {/* <Search handleChange={(e) => setSearchOne(e.target.value)} /> */}

      
{/* TYPE HERE: <input type="text" placeholder="search here..." /> */}
      <button  className="btn" onClick={()=>{userData(setShow(true))}} value={userData} >User Details</button>

      <button  className="btn"  onClick={()=>{companyData(setShow(true))}} value={companyData} >Company Details</button>
      
      {
        show && <CardOne data={filterDataChange} flag={flag} />
      }

    </div>
  );
}

export default App;
