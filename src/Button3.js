import React, { useState } from 'react';

function Button3() {
	const [show, setShow] = useState(false);
	const [hide, setHide] = useState(false);

	const Company = () => {

		setHide(true); 
	
	};

	return (
		<div>
			{
				show ? <h1>JAKKAM VENKATESH</h1> : <h1>APPLICATION DEVELOPER</h1>
			}
			{
				hide && <h1>TELUS INTERNATIONAL</h1>
			}
			<button onClick={() => setShow(true)}>Personal Details</button>
			<button onClick={() => setShow(false)}>Professional Details</button>
			<button onClick={Company}>Company Details</button>	
		</div>
	);
}

export default Button3;

