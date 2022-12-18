import { fireEvent, render, screen} from '@testing-library/react';
import Three from './Three';

test("render company details button",()=>{
	render(<Three />);
   const company = screen.getByRole('button',{name: 'Company Details'});
   fireEvent.click(company)
	expect(company).toBe(company);
  });


  test("render professional button",()=>{
	render(<Three />);
   const professional = screen.getByRole('button',{name: 'Professional Details'});
   fireEvent.click(professional)
	expect(professional).toBe(professional);
  });
	  

  test("render person details button",()=>{
	render(<Three />);
   const Person = screen.getByRole('button',{name: 'Person Details'});
   fireEvent.click(Person)
	expect(Person).toBe(Person);
  });
	  