import "./quote.css"
import axios from "axios"
import { useEffect, useState } from "react"

const Quote = () => {
    const [quote, setQuote] = useState({
        text : "",
        author : ""
    })
    useEffect(()=>{
        const random = Math.floor(Math.random() * 1643)
        const getQuoteData = async() => {
            const quoteData = await axios.get("https://type.fit/api/quotes")
            setQuote({
                text : quoteData.data[random].text,
                author : quoteData.data[random].author
            })
        }
        getQuoteData()
    },[])
    return(
        <div className="quote__main-container">
            <p className="quote">{quote.text}</p>
            <p className="author">{quote.author === null ? "By unknown" : `By ${quote.author}`}</p>
        </div>
    )
}

export {Quote}