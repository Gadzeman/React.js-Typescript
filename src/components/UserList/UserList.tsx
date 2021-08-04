import React, {FC} from 'react';
import {IUser} from "../../types";
import UserItem from "./UserItem/UserItem";
import "./UserList.css"

interface UserListProps {
    users: IUser[];
}
const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div className={"users"}>
            <div className={"users-wrap"}>
                {users.map(user =>
                    <UserItem user={user} key={user.id}/>
                )}
            </div>
        </div>
    );
};

export default UserList;