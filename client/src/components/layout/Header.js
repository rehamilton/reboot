import React from 'react'
import {Link} from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'

export default function Header() {
    return (
        <header id="page-header">
           <Link to='/'>
               <h1 className= "title">Books101</h1>
            </Link>
            <AuthOptions />
        </header>
    )
}
