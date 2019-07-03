// @format
import React, { useContext } from "react";
import axios from "axios";

import { Context } from "./App";

function Input() {
    const url = "http://localhost:3000";

    const { setTodos } = useContext(Context);

    const handleSubmit = e => {
        e.preventDefault();
        const input = e.target[0].value;
        axios.post(url + "/todo", { title: input }).then(res => {
            setTodos(res.data);
        });
        e.target.reset();
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Input;
