import React, { useContext } from 'react';
import { BioData } from "./Page1";

function Page3() {
	const channelName = useContext(BioData);
  return (
	<div> Hello  { channelName }</div>
  )
}

export default Page3; 