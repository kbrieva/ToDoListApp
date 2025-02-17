import { useState } from 'react'
import { AddButton, DeleteButton, DoneButton } from '../components/Button'
import './todolist.css'
export const AddToDoList = () => {
    const [toDoList, setToDoList] = useState([])
    const [addTask, setAddTask] = useState('')

    const handleAddTask = (e) => {
        setAddTask(e.target.value)
    }

    const handleAddToList = () => {
        const task = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
            taskName: addTask,
            completed: false,
        }
        setToDoList([...toDoList, task])
        setAddTask('')
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            handleAddToList()
        }
    }


    const handleDelete = (id) => {
        setToDoList(toDoList.filter((task) => task.id !== id))
    }

    const completeTask = (id) => {
        setToDoList(toDoList.map((task) => {
            if (task.id === id) {
                return {...task, completed: true}
            }else{
                return task;
            }
        }))
    }

    return (
        <div className="todolist">
            <div><input type="text" placeholder="Add To Do List" onChange={handleAddTask} onKeyDown={onEnter} value={addTask}/>
            <AddButton onClick={handleAddToList}/></div>
            <div className='inputTodoList'>
                {toDoList.map((task) => (
                    <div key={task.id}>
                        <h2 style={{ backgroundColor: task.completed ? "yellow" : "white" }}>
                            {task.id}: {task.taskName}
                        </h2>
                        <DoneButton onClick={() => completeTask(task.id)} />
                        <DeleteButton onClick={() => handleDelete(task.id)} />
                    </div>
                ))}
            </div>
            
        </div>
    )
}