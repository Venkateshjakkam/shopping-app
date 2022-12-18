import React from 'react'
import Card from './Card';

const CardOne = (props) => {
    
  return (
	<>
    <div className="abc">
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
  </>
  )
}

export default CardOne;