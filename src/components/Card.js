const Card = (props) => {
    // console.log(props.flag)
    return (

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
        </>
    );
  };
  
  export default Card;
  