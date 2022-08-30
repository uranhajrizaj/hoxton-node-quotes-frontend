import { useEffect, useState } from 'react'
import './App.css'

type Quote={
  id:number,
  title:string,
  author:string
}



function App() {
 const[quotes,setQuotes]=useState<Quote[]>([])
 const[radomquote,setrandomQuote]=useState<Quote>({
  id:0,
  title:"",
  author:""
 })

 useEffect(()=>{
  fetch('http://localhost:4000/quotes')
  .then(resp=>resp.json())
  .then(quotesFromServer=>setQuotes(quotesFromServer))
 },[])

 useEffect(()=>{
  fetch('http://localhost:4000/random')
  .then(resp=>resp.json())
  .then(quoteFromServer=>setrandomQuote(quoteFromServer))
 },[])


  return (
    <div className="App">
      <ul className='quote_list'>
      <li className='quote random'>
          Random Quote:
         <h2> "{radomquote.title}"</h2>  
         <h3>Author: {radomquote.author}</h3>
      </li>

      {quotes.map(quote=>(
      <li className='quote'>
       <h2> "{quote.title}"</h2>  
       <h3>Author: {quote.author}</h3>
      </li>
      )  
      )}
      </ul>
    </div>
  )
}

export default App
