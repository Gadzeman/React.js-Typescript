import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import UsersPage from "./components/UsersPage/UsersPage";
import TodosPage from "./components/TodosPage/TodosPage";
import UserItemPage from "./components/UsersItemPage/UserItemPage";
import TodoItemPage from "./components/TodoItemPage/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={"/users"}>Users</NavLink>
                    <NavLink to={"/todos"}>Todos</NavLink>
                </div>
                <Route path={"/users"} exact>
                    <UsersPage />
                </Route>
                <Route path={"/todos"} exact>
                    <TodosPage />
                </Route>
                <Route path={"/users/:id"}>
                    <UserItemPage />
                </Route>
                <Route path={"/todos/:id"}>
                    <TodoItemPage />
                </Route>

                {/*<EventsExample />*/}

                {/*<UserList users={users}/>*/}

                {/*<Card onClick={(num) => console.log("Pressed", num)} variant={CardVariant.primary} width={"200px"} height={"200px"}>*/}
                {/*    <button>Кнопка</button>*/}
                {/*</Card>*/}
            </div>
        </BrowserRouter>
    );
};

export default App;