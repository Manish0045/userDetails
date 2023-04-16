import React, { useState } from 'react'

const User = () => {
    const [users, setUsers] = useState([]);

    const getUser = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((json) => {
                setUsers(json.data);
                console.log(json.data);
            });
    };
    return (
        <div className='container'>
            <h1>Hello User</h1>
            <div className="btn btn-primary mt-2" onClick={() => getUser()}>Get Users</div>
            <div className="row">
                {users.map((user) => (
                    <div className="col-md-4" key={user.id}>
                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h4 className="card-title">First Name: <span>{user.first_name}</span></h4>
                                        <h4 className="card-title">Last Name: <span>{user.last_name} </span></h4>
                                    </div>
                                    <div className="col-md-3"><img src={user.avatar} alt="" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"><h3>Email: </h3><p className="card-text">{user.email}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User;
