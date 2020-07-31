import React, {useEffect, useState} from 'react';
import './app.sass'
import Users from "../users/users";
import Header from "../header/header";
import Error from "../error/error";
import Loader from "../loader/loader";

const App = () => {
    const _apiBase = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';
    const initialState = [
        {id: 0, name: 'January', color: undefined},
        {id: 1, name: 'February', color: undefined},
        {id: 2, name: 'March', color: undefined},
        {id: 3, name: 'April', color: undefined},
        {id: 4, name: 'May', color: undefined},
        {id: 5, name: 'June', color: undefined},
        {id: 6, name: 'July', color: undefined},
        {id: 7, name: 'August', color: undefined},
        {id: 8, name: 'September', color: undefined},
        {id: 9, name: 'October', color: undefined},
        {id: 10, name: 'November', color: undefined},
        {id: 11, name: 'December', color: undefined}
    ]
    const [state, setState] = useState(initialState);
    const [users, setUsers] = useState([]);
    const [selectedItem, setSelectedItem] = useState(undefined);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(_apiBase)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setColor(data);
                setLoad(true);
            })
            .catch(err => {
                setError(true);
                throw new Error(`Could not fetch ${_apiBase}` +
                    `, received ${err.status}`)
            })
    }, [])

    const setColor = (people) => {
        const newState = state.map(item => {
            return {
                ...item,
                color: changeColor(people.filter(({dob}) => new Date(dob).getMonth() === item.id).length)
            }
        })
        setState(newState);
    }

    const changeColor = (data) => {
        if (data <= 2) {
            return '#b0bec5'
        }
        if (data <= 6 || data <= 3) {
            return '#1e88e5'
        }
        if (data <= 7 || data <= 10) {
            return '#7cb342'
        }
        if (data > 11) {
            return '#e53935'
        }
    }

    return (
        <>
            <Header/>
            {
                error ? <Error/> : load ?
                    <div className="container">
                        <div className='mounts-list'>
                            {
                                state.map(({id, name, color}) => {
                                    return (
                                        <div className={`mounts-list-item`}
                                             key={id}
                                             style={{backgroundColor: `${selectedItem === id ? ' #484848' : ' #212121'}`}}
                                             onMouseEnter={() => setSelectedItem(id)}
                                        >
                                            <h3 style={{color: `${color}`}}>{name}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Users users={users.filter(item => new Date(item.dob).getMonth() === selectedItem)}/>
                    </div> : <Loader/>
            }
        </>
    );
}
export default App;