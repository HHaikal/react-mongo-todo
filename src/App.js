// @format

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAsync } from "react-async";

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

    return (
        <Context.Provider value={{ todos, setTodos }}>
            <Input />
            <List />
        </Context.Provider>
    );
}

export default App;
