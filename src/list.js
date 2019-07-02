import React, { useContext } from "react";
import axios from "axios";

import { Context } from "./App";

export default function List({ row }) {
    const { todos, setTodos } = useContext(Context);
    const url = "http://localhost:3000";

    const handleClick = id => {
        const payload = {
            id: id
        };
        axios.post(url + "/finish", payload).then(res => {
            const thetodo = todos.filter(todo => todo._id != res.data._id);
            setTodos(thetodo.concat(res.data));
        });
    };

    const handleDelete = id => {
        const payload = {
            id: id
        };

        axios.post(url + "/delete", { id: id }).then(res => {
            if (res.data.success) {
                const thetodo = todos.filter(todo => todo._id != id);
                setTodos(thetodo);
            }
        });
    };

    return (
        <li style={{ textDecoration: row.finish ? "line-through" : "none" }}>
            <span onClick={() => handleClick(row._id)}>{row.title}</span>

            <button type="button" onClick={() => handleDelete(row._id)}>
                Delete
            </button>
        </li>
    );
}
