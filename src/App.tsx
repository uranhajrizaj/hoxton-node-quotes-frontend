import { useEffect, useState } from 'react'
import './App.css'

type Quote={
  id:number,
  title:string,
  author:string
}



function App() {
 const[quotes,setQuotes]=useState<Quote[]>([])

 useEffect(()=>{
  fetch('http://localhost:4000/quotes')
  .then(resp=>resp.json())
  .then(quotesFromServer=>setQuotes(quotesFromServer))
 },[])

  return (
    <div className="App">
      <ul className='quote_list'>
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
