import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import BookList from '../layout/BookList'
import PageTitle from '../layout/PageTitle'

export default function Home() {

    const {userData} = useContext(UserContext)
    const history = useHistory()
    const[books, setBooks] = useState([])

    useEffect(() => {
        if(!userData.user) history.push("/login")
    },[userData])

    function getBooks() {
        Axios.get('/books/')
        .then((results) =>  {
            console.log(results)
            setBooks(results.data)
        })
    }

    useEffect(() => {
        //will only run once when component mounted
        getBooks()
    },[])


    return (
        <div className="page">
            <PageTitle title={"Books101"} />
            <div className= "Row">
                <div className="col">
                    <BookList books={books}/>
                </div>
            </div>
        </div>
    )
}
