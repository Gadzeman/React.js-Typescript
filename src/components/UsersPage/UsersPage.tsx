import React, {FC, useEffect, useState} from 'react';
import UserItem from "../UserList/UserItem/UserItem";
import List from "../List/List";
import axios from "axios";
import {IUser} from "../../types";
import {useHistory} from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()
    const fetchUsers = async () => {
        try {
            const resp = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(resp.data)
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem onClick={(user) => history.push("/users/" + user.id)} user={user} key={user.id}/>}
            />
        </div>
    );
};

export default UsersPage;