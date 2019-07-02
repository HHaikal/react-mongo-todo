// @format
import React from "react";
import axios from "axios";

export default function Input(props) {
    const handleSubmit = e => {
        e.preventDefault(); // prevent from submit (reload)
        const { addTodo } = props;
        const input = e.target[0].value;

        const payload = {
            title: input
        };

        const url = "http://localhost:3000";
        axios.post(url + "/todo", payload).then(res => {
            addTodo(res.data);
        });
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    );
}
