import React from "react";
import './user.sass'

const Users = (props) => {
    return (
        <div className='users-container'>
            {
                props.users.map(({id,firstName,lastName,dob}) => {
                    return (
                        <div className='users' key={id}>
                            <div className='users-name'>
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                            </div>
                            <p className='users-time'> Time of birth : {new Date(dob).toDateString()}</p>
                        </div>
                    )

                })
            }
        </div>

    )
}

export default Users;