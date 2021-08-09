import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../hooks/use-typed-selector";
import {fetchUsers} from "../../redux/action-creators";
import {useActions} from "../../hooks/use-actions";

const Users: FC = () => {
    const {users, error, loading} = useTypedSelector(store => store.users)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
    );
};

export default Users;