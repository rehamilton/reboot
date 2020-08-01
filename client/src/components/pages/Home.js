import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import BookList from '../layout/BookList'
import PageTitle from '../layout/PageTitle'
import Slider from '../layout/Slider'

export default function Home() {

    const {userData} = useContext(UserContext)
    const history = useHistory()
    const[books, setBooks] = useState([])
    const[myBooks, setMyBooks] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('auth-token')
        if(!token) history.push("/login")
    },[userData])

    function getBooks() {
        Axios.get('/api/books/')
        .then((results) =>  {

            setBooks(results.data)
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

    const onSave = ({_id }) => {
        Axios.post('/api/mybooks/' + _id +  '/save', {
            token: localStorage.getItem('auth-token')
        })
        .then((res) => {
            const newBook = res.data;
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
            <PageTitle title={"MUST READS 2020"} subtitle={"Dymocks Top 101"}/>
            <Slider books={books} readBooks={myBooks.filter(x => x.read)} onSave={onSave} onRead={onRead}/>
            
            <div className= "Row">
                <div className="col">
                    <BookList books={books} readBooks={myBooks.filter(x => x.read)} onSave={onSave} onRead={onRead}/>
                </div>
            </div>
        </div>
    )
}
