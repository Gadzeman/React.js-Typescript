import React, {FC} from 'react';
import "./UserItem.css"
import {IUser} from "../../../types";

interface UserItemProps {
    user: IUser;
}
const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div className={"user"}>
            {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street.
        </div>
    );
};

export default UserItem;