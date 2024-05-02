import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}><br></br>
                <h4 style={{border:'2px solid',padding:"1px 140px "}}>{todo} &nbsp;</h4> <button onClick={() => deleteHandler(index)}>Delete</button>
            </div>)}
        </div>
    )
}

export default TodoList