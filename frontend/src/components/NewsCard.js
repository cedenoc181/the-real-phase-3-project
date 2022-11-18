import React from 'react'

function NewsCard({article}) {
    
  return (
    <div className="newsCard">
         <p>News title</p>
            <img src={article.urlImage} alt=""/>
            <p>News desciption</p>
            <p>News author</p>
    </div>
  )
}

export default NewsCard