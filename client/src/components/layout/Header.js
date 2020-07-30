import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'
import UserContext from '../../context/UserContext'

export default function Header() {

    const { userData, setUserData } = useContext(UserContext)

    return (
        <div id="page-header">
            {userData.user ? (
                <>
                <Link to='/my'>
                <h1 className= "title">My Books</h1>
                </Link>
                <Link to='/'>
                <h1 className= "title-main">Books101</h1>
                </Link>
                </>
            ) : (
                <>
                   <Link to='/my'>
                    <h1 className= "title-main">My Books</h1>
                    </Link>
                </>
            )}
            <AuthOptions />
        </div>
    )
}
