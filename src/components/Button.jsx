import "./todolist.css"


export const AddButton = (props) => {
    return <button className="addbutton" onClick={props.onClick}>Add</button>
}

export const DeleteButton = (props) => {
    return <button className="deletebutton" onClick={props.onClick}>x</button>
}

export const DoneButton = (props) => {
    return <button className="donebutton" onClick={props.onClick}>√</button>
}