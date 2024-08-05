import React, { useState } from 'react'

function NewsTemplate() {
    const [deatils, setDeatils] = useState([{}])

    const url = "https://newsapi.org/v2/everything?q="

    const getNewsData = async (topic) => {
        const res = await fetch(`${url}${topic}&apikey=${process.env.API_KEY}`)
        const data = await res.json()
        console.log(data)
    }

    getNewsData("India");

  return (
    <div className=' flex justify-start items-center gap-20 px-20 mt-16 flex-wrap'>
     
       <div className="card max-w-sm text-white ">
            <div className="card-header">
                <img src="https://via.placeholder.com/400x200" alt="news image" id="news-img" />
            </div>
            <div className="card-content mt-7">
                <h3 id="news-title">This is the title</h3>
                <h6 className="news-source" id="news-source">End Gadget 15/02/2024</h6>
                <p className="news-desc" id="news-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolores suscipit iste adipisci accusamus inventore saepe dignissimos qui est provident.</p>
            </div>
        </div>
    </div>
  )
}

export default NewsTemplate
