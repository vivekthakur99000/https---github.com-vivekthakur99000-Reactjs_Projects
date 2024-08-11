import React, { useCallback, useEffect, useRef, useState } from "react";

function NewsContainer({searchQuery}) {
  const [cards, setCards] = useState([]);
  const inputRef = useRef();
  const url = "https://newsapi.org/v2/everything?q=";
  const api_key = "3d7279279a1541bbab9e1285b4b9e6af";

  async function handleNewsDetails(query) {
    try {
      const response = await fetch(`${url}${query}&apiKey=${api_key}`);
      const data = await response.json();
      const filteredArticles = data.articles.filter(
        (article) => article.urlToImage !== null
      ).sort((a, b) => new Date(b.publishedAt)- new Date(a.publishedAt));
      setCards(filteredArticles);
      console.log(data.articles);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleCardClick = (url) => {
    window.open(url, "_blank")
  }

  useEffect(()=> {
    if(searchQuery){
      handleNewsDetails(searchQuery)
    }else{
      handleNewsDetails("coding")
    }
  }, [searchQuery])

  return (
    <div className="mt-10 px-20 flex justify-start items-start flex-wrap gap-9 text-white">
      {cards.map((card, index) => (
        <div key={index} className="card max-w-[400px]"
        onClick={() => handleCardClick(card.url)}
        >
          <div className="card-header">
            <img src={card.urlToImage} alt="news image" id="news-img" />
          </div>
          <div className="card-content mt-5">
            <h3 id="news-title">{card.title}</h3>
            <h6 className="news-source" id="news-source">
              {card.source.name} : {new Date(card.publishedAt).toLocaleString()}{" "}
            </h6>
            <p className="news-desc" id="news-desc">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsContainer;
