// @format

import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import Input from "./input";
import List from "./list";

const url = "http://localhost:3000";

export const Context = React.createContext();

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(url + "/todo").then(res => {
            setTodos(res.data);
        });
    }, []);

    // render twicez
    return (
        <Context.Provider value={{ todos, setTodos }}>
            <Input addTodo={setTodos} />
            <ul>
                {todos.map((todo, i) => (
                    <List row={todo} key={i} />
                ))}
            </ul>
        </Context.Provider>
    );
}

export default App;
