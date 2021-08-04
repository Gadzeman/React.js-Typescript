import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "./types";
import axios from "axios";
import List from "./components/List/List";
import UserItem from "./components/UserList/UserItem/UserItem";
import TodoItem from "./components/TodoItem/TodoItem";
import EventsExample from "./components/EventsExample/EventsExample";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
    const fetchUsers = async () => {
        try {
            const resp = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(resp.data)
        } catch (e) {
            alert(e)
        }
    }
    const fetchTodos = async () => {
        try {
            const resp = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
            setTodos(resp.data)
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])
    return (
        <div>
            <EventsExample />

            {/*<List*/}
            {/*    items={users}*/}
            {/*    renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}*/}
            {/*/>*/}
            {/*<List*/}
            {/*    items={todos}*/}
            {/*    renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}*/}
            {/*/>*/}

            {/*<UserList users={users}/>*/}

            {/*<Card onClick={(num) => console.log("Pressed", num)} variant={CardVariant.primary} width={"200px"} height={"200px"}>*/}
            {/*    <button>Кнопка</button>*/}
            {/*</Card>*/}

        </div>
    );
};

export default App;