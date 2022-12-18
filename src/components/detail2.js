
import { useEffect, useState } from "react";
import Card from './Card';
const Detail2 = (props) => {
	const [data,setData] = useState([])
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
		  .then((response) => response.json())
		  .then((users) => setData(users));
	  }, []);


	return(
		<>
    {/* <div className="abc">
    {props.data.map((data) => {
      return (
        <div
          style={{
            width: "350px",
          	borderRadius:"25px",
            border: "2px solid black",
            backgroundColor: "green",
            color:"black"
        
          }}
        >
          <Card key={data.id} data={data} flag={props.flag} />
        </div>
      );
    })}
  </div>
  <>
        { (props.flag === "user") ?
      <div>
        <p>{props.data.name}</p>
        <p>{props.data.email}</p>
        <p>{props.data.address.city}</p>
        <p>{props.data.address.zipcode}</p>
      </div>
      :
        <div> 
        <p>{props.data.name}</p>
        <p>{props.data.username}</p>
        <p>{props.data.company.name}</p>
        <p>{props.data.company.catchPhrase}</p>
        <p>{props.data.website}</p>
        <p>{props.data.phone}</p>

        </div>
        }
        </> */}

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>REACT</li>
        </ul>
  </>
		
	)
}
export default Detail2;