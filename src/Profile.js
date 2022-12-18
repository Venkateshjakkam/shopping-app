import React, { useState } from 'react';
import {Modal,ModalBody,ModalHeader} from "reactstrap";
import './Profile.css';

export default function Profile() {
	const [modal ,setModal] = useState(false);
	const [confirm,setConfirm] = useState(false);
	const [cancle,setCancle] = useState(false);

	function handleConfirm(){
		setModal(false)
		setCancle('')
		setConfirm('***Dialog Confirmed***')
	}

	function handleCancle(){
		setModal(false)
		setConfirm('')
		setCancle('***Dialog Cancled***')
	}


	
  return (
	<div>
		<Modal
		size='lg'
		isOpen={modal}
		toggle={()=>setModal(!modal)}
		>
			<ModalHeader toggle={()=>setModal(!modal)}>Model Opener</ModalHeader>
			<ModalBody >
				<label><h1>Welcome</h1> You have opend modal box</label>
				<br></br>
				<button className='done' onClick={handleConfirm}> Confirm</button>
				
				<button className='cancle'  onClick={handleCancle}>cancle</button>
			</ModalBody>
		</Modal>
		<center>
		<button className='btnw' onClick={()=>setModal(true)}>Open </button>
		<div>
		{confirm}
		</div>
		<div>
			{cancle}
		</div>
		
		</center>
	</div>
  )
}
