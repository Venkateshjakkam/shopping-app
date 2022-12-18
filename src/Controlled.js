import React from 'react';
import { useState } from 'react';

export default function Controlled() {
	const [name,setName] = useState('');
	const changeHandler = e => {
		setName(e.target.value)
	}
  return (
	<div>
		<center>
			Name:{name}
			<br/>
			<input type='text' onChange={changeHandler}/>
		</center>
	</div>
  )
}
