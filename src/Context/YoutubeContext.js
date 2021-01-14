import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const YoutubeContext = createContext()

export const YoutubeProvider = (props) => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('')


    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data.items)
            })

    }, [url])

    return (
        <YoutubeContext.Provider value={{ myData: [data, setData], myQuery: [query, setQuery] }}>
            {props.children}
        </YoutubeContext.Provider>
    )
}