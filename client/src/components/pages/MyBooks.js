import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import BookList from '../layout/BookList'
import PageTitle from '../layout/PageTitle'
import Slider from '../layout/Slider'


export default function My() {

    const {userData} = useContext(UserContext)
    const history = useHistory()
    const[books, setBooks] = useState([])
    const[myBooks, setMyBooks] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('auth-token')
        if(!token) history.push("/login")
    },[userData])

    function getBooks() {
        Axios.get('/api/mybooks/all', {
            headers: {
                'x-auth-token' : localStorage.getItem('auth-token')
            }
        })
        .then((results) =>  {
     
            setBooks(results.data.map((savedBook) => savedBook.book))
        })
    }

    function getMyBooks() {
        Axios.get('/api/mybooks/all', {
            headers: {
                'x-auth-token' : localStorage.getItem('auth-token')
            }
        })
        .then((results) =>  {
     
            setMyBooks(results.data)
        })
    }

    useEffect(() => {
        //will only run once when component mounted
        getBooks()
        getMyBooks()
    },[])

    const onDelete = ({ _id }) => {
        console.log("that" + _id)
        Axios.delete('/api/mybooks/' + _id +  '/delete', {
            headers: {
                'x-auth-token' : localStorage.getItem('auth-token')
            }
        })
        .then((res) => {
            const deletedBook = res.data;

            getBooks()
            getMyBooks()
        })
    } 

    const onRead = ({_id}) => {
        Axios.put('/api/mybooks/' + _id +  '/read', {
            token: localStorage.getItem('auth-token')
        })
        .then((res) => {
            const isReadBook = res.data;

            getBooks()
            getMyBooks()
        })
    }

    return (
        <div className="page">
            <PageTitle title={"Your Books"} subtitle={"Your saved books"}/>
            <Slider books={books} readBooks={myBooks.filter(x => x.read)} onDelete={onDelete} onRead={onRead} />
            <div className= "Row">
                <div className="col">
                    <BookList books={books} readBooks={myBooks.filter(x => x.read)} onDelete={onDelete} onRead={onRead} />
                </div>
            </div>
        </div>
    )
}
