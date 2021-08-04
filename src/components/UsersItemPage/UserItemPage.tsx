import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IUser} from "../../types";
import {useParams, useHistory} from "react-router-dom"

interface UserItemPageParams {
    id: string;
}
const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()
    const fetchUser = async () => {
        try {
            const resp = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id)
            setUser(resp.data)
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            <button onClick={() => history.push("/users")}>Back</button>
            <h1>User: {user?.id} {user?.name}</h1>
            <div>
                {user?.address.city} <br/> {user?.address.street} <br/> {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;