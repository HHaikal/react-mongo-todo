// @format
import React, { useContext } from "react";
import axios from "axios";

import Row from "./row";

import { Context } from "./App";

function List() {
    const { todos, setTodos } = useContext(Context);
    return (
        <div>
            {todos.map((todo, i) => (
                <Row row={todo} key={i} />
            ))}
        </div>
    );
}

export default List;
