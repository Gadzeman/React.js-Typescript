import React, {FC} from 'react';
import Users from "./components/Users/Users";
import Todos from "./components/Todos/Todos";

const App: FC = () => {
    return (
        <div>
            <Users />
            <Todos />
        </div>
    );
};

export default App;