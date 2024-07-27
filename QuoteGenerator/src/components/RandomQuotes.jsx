import React, { useEffect, useState } from 'react'

function RandomQuotes() {

    const[quote, setQuote] = useState({
        
    })

    function tweet() {
        const text = quote.text;
        const author = quote.author;
        const tweetUrl = `https://twitter.com/intent/tweet?text="${text}" - ${author}`;
        window.open(tweetUrl, "Tweet Window", "width=600, height=300");
      }

     async function fetchQuote(){
        try {
            const res = await fetch("https://api.quotable.io/quotes/random");
            let data = await res.json(); 
            setQuote({
                text : data[0].content,
                author : data[0].author
            });
            console.log(quote);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=> {
        fetchQuote();
    }, [setQuote])

    


  return (
    
       <div className=' w-full h-screen bg-[#3D52A0] flex justify-center items-center'>
        <div className=' bg-[#ADBBDA] w-[700px] h-[400px] rounded-2xl relative top-5'>
            <h1 className=' text-center pt-12 font-bold text-3xl'>Random Quotes</h1>
            <div className="details absolute top-32 ">
            <p className='text-2xl text-center font-mono px-12'> {quote.text} </p>
            <p className='text-md mt-2 font-semibold absolute right-8'>{quote.author}</p>
            </div>
            <div className="btns flex gap-3 justify-center items-center mt-56">
                <button
                onClick={fetchQuote}
                className=' bg-gray-700 text-xl font-serif font-semibold px-4 py-2 rounded-full text-white '>New Quote</button>
                <button onClick={tweet} className=' bg-gray-700 text-xl font-serif font-semibold px-4 py-2 rounded-full text-white '>Twitter</button>
            </div>
        </div>

    </div>
  )
}

export default RandomQuotes

