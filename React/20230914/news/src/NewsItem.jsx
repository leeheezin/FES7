import React from 'react'

export default function NewsItem({article}) {
    const { title, description, author, urlToImage,publishedAt} = article;
    return (
        <>
            
            <li>
                <h2>{title}</h2>
                <span>{author}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='newsImg'>
                <img src={urlToImage} alt={title} />
                </div>
                <span>{publishedAt}</span>
            </li>
        </>
    )
}
