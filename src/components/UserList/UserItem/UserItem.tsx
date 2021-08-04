import React, {FC} from 'react';
import "./UserItem.css"
import {IUser} from "../../../types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}
const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div className={"user"} onClick={() => onClick(user)}>
            {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street.
        </div>
    );
};

export default UserItem;