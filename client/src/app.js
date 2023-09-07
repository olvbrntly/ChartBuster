import React from "react";
import {useState} from 'react'
import axios from 'axios'

function App() {
    const[movies, setMovies] = useState([]);



        axios.get('http://localhost:3000/'
        ).then((res) =>{
            setMovies(res.data)
        }).catch((err) => console.error(err))

 
    return(
        <div>
            <div>Hello There</div>
            <button >Click Here for Movie Title</button>
            <div>{movies}</div>
     
        </div>
    )
}

export default App