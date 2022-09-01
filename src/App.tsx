import { useEffect, useState } from 'react'
import './App.css'

type QuoteWithAuthor={
  id:number,
  title:string,
  authorID:number,
  author:{
    id:number,
    name:string,
    img:string,
  }
}


function App() {
 const[quotes,setQuotes]=useState<QuoteWithAuthor[]>([])
 const[radomquote,setrandomQuote]=useState<QuoteWithAuthor>({
  id:0,
  title:"",
  authorID:0,
  author:{
    id:0,
    name:"",
    img:"",
  }
 })


 useEffect(()=>{
  fetch('http://localhost:4000/quotes&author')
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
         <h3>Author: {radomquote.author.name}</h3>
      </li>

      {quotes.map(quote=>(
      <li className='quote'>
       <h2> "{quote.title}"</h2>  
       <h3>Author: {quote.author.name}</h3>
      </li>
      )  
      )}
      </ul>
    </div>
  )
}

export default App
