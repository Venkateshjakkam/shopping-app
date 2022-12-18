import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import Detail2 from './components/detail2';
import App from './App';
// import Search from './components/Search';



// test('renders user details', () => {
//   render(<App />);
//   const linkElement = screen.getAllByText(/User Details/i);
//   // expect(linkElement).toBeInTheDocument();
// });

// test("render User details button",()=>{
//   render(<App/>);
//  const user = screen.getByRole('button',{ name: 'User Details' });
//  fireEvent.click(user)
//  console.log(user);
//   expect(user).toBe(user);
// });

// test("render company details button",()=>{
//   render(<App />);
//  const company = screen.getByRole('button',{name: 'Company Details'});
//  fireEvent.click(company)
//  console.log(company);
//   expect(company).toBe(company); 
// });
    

// describe("app component", () => {
//   it("render user details and company details from API response", async () => {
//     render(<App/>);
//     await waitFor(() =>{
//       screen.getByText("Leanne Graham");
//       screen.getByText("Ervin Howell");
//     });
//   });
// });

jest.mock("./App");
describe("app component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("render user details and company details from API response", async () => {
    App.getLeanneFromApp.mockResolvedValue({
      results:[{ name:"Leanne Graham"}],
    })
    render(<App/>);
    await waitFor(() =>{
      screen.getByText("Leanne Graham");
    });
  });
});









