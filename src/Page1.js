import React,{ createContext } from "react";
import Page2 from "./Page2";

const BioData = createContext();

const Page1 = () => {
	return (
		<BioData.Provider value={'Welcome to Nex_Gen'}>
			<Page2/>
		</BioData.Provider>
	) 
}

export default Page1;
export { BioData };
