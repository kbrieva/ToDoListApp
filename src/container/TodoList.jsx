import './todolist.css'
import { AddToDoList } from '../components/Input'

export const TodoList = () => {
    
    return (
        <div className="todolist">
            <h1>TodoList</h1>
            <div><AddToDoList /></div>
        </div>
    )
}