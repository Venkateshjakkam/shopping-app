import React,{ useState } from "react";

function Three() {
    const [personal, setPersonal] = useState(false);
    const [professional, setProfessional] = useState(true);
    const [company, setCompany] = useState(false);

    const first = () => {
      setPersonal(true);
      setProfessional(false);
      setCompany(false);
    };
    const second = () => {
      setPersonal(false);
      setProfessional(true);
      setCompany(false);
    };
    const third = () => {
      setPersonal(false);
      setProfessional(false);
      setCompany(true);
    };

    return (  
      <div style={{"marginTop":"25%"}}>
        <center>
        <button onClick={first}>Person Details</button>
        <button onClick={second}>Professional Details </button>
        <button onClick={third}>Company Details</button>
  
        <div>
          {personal && <h1>JAKKAM VENKATESH</h1>}
          {professional && <h1>APPLICATION DEVELOPER</h1>}
          {company && <h1>TELUS INTERNATIONAL</h1>}
        </div>
        </center>
      </div>
      
    );
  }

  export default Three;