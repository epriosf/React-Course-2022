import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
const Expenses = (props)=>{
    return (
        <Card className='expenses'>
            <ul>
                {props.expenses.map((expense)=>(
                    <div key={expense.id}>
                        <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                    </div>
                ))}
            </ul>
        </Card>
    )
}
export default Expenses;