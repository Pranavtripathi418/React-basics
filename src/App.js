
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {id:1,  date:new Date(2024,7,15)  ,title:"Book", location:"Delhi", price:"200"},
    {id:2,  date:new Date(2023,5,10)  ,title:"Insurance", location:"Ayodhya", price:"190"},
    {id:3,  date:new Date(2022,5,25)  ,title:"Laptop", location:"Deoria", price:"100"},
    {id:4,  date:new Date(2022,8,5)  ,title:"Pen", location:"Mumbai", price:"150"}
  ]
  return (
    <div>
      <h1>Let's Get Started  </h1>
      <Expenses items={expenses}/>
      

    </div>
  );
}

export default App;
