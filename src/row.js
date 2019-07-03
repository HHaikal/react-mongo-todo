import React, {useContext} from 'react'
import axios from 'axios'

import { Context } from './App'

function Row({ row }) {
    const { todos, setTodos } = useContext(Context);

    const url = "http://localhost:3000";

    const handleFinish = id => {
        axios.post(url + "/finish", { id: id }).then(res => {
            const allWhitoutCurrent = todos.filter(todo => todo._id != id);
            setTodos(allWhitoutCurrent.concat(res.data));
        });
    };

    const handleDelete = id => {
        axios.post(url + "/delete", { id: id }).then(res => {
            const allWhitoutCurrent = todos.filter(todo => todo._id != id);
            setTodos(allWhitoutCurrent);
        });
    };

    return (
        <li>
            <span
                style={{ textDecoration: row.finish ? "line-through" : "none" }}
                onClick={() => handleFinish(row._id)}
            >
                {row.title}
            </span>
            <button onClick={() => handleDelete(row._id)}>Delete</button>
        </li>
    );
}

export default Row;
