import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart =(props)=>{
    const expensesOnlyArray= props.chartExpenses.map((monthExpenseData)=>{
        return monthExpenseData.price
    })
    const maxValue = Math.max(...expensesOnlyArray);



const chartData = [
    {expenseMont : 'Jan', expenseValue: 0},
    {expenseMont : 'Feb', expenseValue: 0},
    {expenseMont : 'Mar', expenseValue: 0},
    {expenseMont : 'Apr', expenseValue: 0},
    {expenseMont : 'May', expenseValue: 0},
    {expenseMont : 'Jun', expenseValue: 0},
    {expenseMont : 'Jul', expenseValue: 0},
    {expenseMont : 'Aug', expenseValue: 0},
    {expenseMont : 'Sep', expenseValue: 0},
    {expenseMont : 'Oct', expenseValue: 0},
    {expenseMont : 'Nov', expenseValue: 0},
    {expenseMont : 'Dec', expenseValue: 0},
];


for(let expense of props.chartExpenses){
    chartData[expense.date.getMonth()].expenseValue += expense.price;
}

return <div className="chart">
    {chartData.map((monthData)=>{
        return <ChartBar 
        key={monthData.expenseMont} 
        label={monthData.expenseMont} value={monthData.expenseValue}
        maxValue={maxValue} />
    })}
</div>
}

export default Chart;