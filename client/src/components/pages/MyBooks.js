import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../../context/UserContext'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import MyBookList from '../layout/MyBookList'
import PageTitle from '../layout/PageTitle'
import Slider from '../layout/Slider'


export default function My() {

    const {userData} = useContext(UserContext)
    const history = useHistory()
    const[books, setBooks] = useState([])

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

    useEffect(() => {
        //will only run once when component mounted
        getBooks()
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
            console.log({deletedBook});
            getBooks()
        })
    } 

    const onRead = ({_id}) => {
        Axios.put('/api/mybooks/' + _id +  '/read', {
            token: localStorage.getItem('auth-token')
        })
        .then((res) => {
            const isReadBook = res.data;
            console.log({isReadBook});
        })

    }


    return (
        <div className="page">
            <PageTitle title={"Your Books"} subtitle={"Your saved books"}/>
            <Slider books={books}/>
            <div className= "Row">
                <div className="col">
                    <MyBookList books={books} onDelete={onDelete} onRead={onRead} />
                </div>
            </div>
        </div>
    )
}
