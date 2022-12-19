
import { TestUtils,fireEvent,waitFor, render, screen } from '@testing-library/react';
import Profile from './Profile';

test("render Open Dialog button",()=>{
	render(<Profile/>);
   const Dialog = screen.getByRole('button',{name: 'Open Dialog'});
   fireEvent.click(Dialog)
	expect(Dialog).toBe(Dialog);
  });
 

// test("Check if btn says Clicked after it's clicked",()=>{
// 	const handleCancle = jest.fn;
// 	render(<Profile/>)
//     expect(handleCancle.textContent).toBe('cancle'); 
//     fireEvent.click(handleCancle); 
//     expect(handleCancle.textContent).toBe('Cancled'); 
//  }); 

// test('renders user details', () => {
// 	  render(<Profile />);
// 	  const linkElement = screen.getAllByText(/Open Dialog/i);
// 	//   expect(linkElement).toBeInTheDocument();
// 	});

describe('close modals on certain actions', () => {
it('when mouse is confirm', () => {
	
	const element = screen.getAllByText(/Confirm  /i);
	render(
		<Profile isOpen={true}>
			 Confirm
		</Profile>,
		element
	);
	// rest of the test...
});

it('when mouse cancle', () => {
	
	const element = document.createElement('div');
	render(
		<Profile isOpen={true}>
			 Cancle
		</Profile>,
		element
	);
	// rest of the test...
});
});


// test('modal Confirm button', () => {
// 	// Arrange
// 	const handleCancle = jest.fn()
  
// 	// Act
// 	const {getByText} = render(
// 	  <Profile isOpen={true}>
// 		<div>Cancle</div>
// 	  </Profile>,
// 	)
// 	// Assert
// 	// expect(getByText('Cancle')).toBeTruthy()
  
// 	// Act
// 	fireEvent.click(getByText(/Cancle/i))
  
// 	// Assert
// 	expect(handleCancle).toHaveBeenCalledTimes(1)
//   })








