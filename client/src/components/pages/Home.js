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

    useEffect(() => {
        if(!userData.user) history.push("/login")
    },[userData])

    function getBooks() {
        Axios.get('/api/books/')
        .then((results) =>  {

            setBooks(results.data)
        })
    }

    useEffect(() => {
        //will only run once when component mounted
        getBooks()
    },[])

    const onSave = "() =>" 


    return (
        <div className="page">
            <PageTitle title={"MUST READS 2020"} subtitle={"Dymocks Top 101"}/>
            <Slider books={books}/>
            <div className= "Row">
                <div className="col">
                    <BookList books={books} onSave={onSave}/>
                </div>
            </div>
        </div>
    )
}
