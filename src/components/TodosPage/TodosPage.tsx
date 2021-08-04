import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {ITodo} from "../../types";
import TodoItem from "./TodoItem/TodoItem";
import List from "../List/List";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const fetchTodos = async () => {
        try {
            const resp = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
            setTodos(resp.data)
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        fetchTodos()
    }, [])
    return (
        <div>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />
        </div>
    );
};

export default TodosPage;