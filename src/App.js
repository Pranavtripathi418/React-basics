import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div>
      <h1>Let's Get Started  </h1>
      
      <ExpenseItem date={new Date(2024,7,15)} title="Book" location="Delhi" price="190"></ExpenseItem>
      <ExpenseItem date={new Date(2023,5,10)} title="Insurance" location="Gorakhpur" price="102"></ExpenseItem>
      <ExpenseItem date={new Date(2021,9,25)} title="Laptop" location="Mumbai" price="150"></ExpenseItem>
      <ExpenseItem date={new Date(2022,8,20)} title="Gym" location="Deoria" price="100"></ExpenseItem>
    </div>
  );
}

export default App;
