import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from './NewsItem'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    height: 100%;
  }
  li {
    list-style: none;
    border-radius: 10px;
    border: 1px solid gray;    
    padding: 10px;
    flex: 0 0 25%;
    height: 500px;
    
    h2{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
  .newsImg {
    width: 100%;
    height: 200px;
    img {
    width: 100%;
    height: 100%;
    }
  }
`
export default function NewNewsPage() {
    const [news, setNews] = useState([])
    useEffect(()=>{
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a4ec71b5a08b4cd6924090f1b1f07d2d`)
    .then((response)=>{
      const data = response.data.articles.slice(0,21) //일단 열개만
      setNews(data)
      console.log(response.data)
    })
    .catch((error)=>{
      console.error(error)
    })
  },[]) //한번만 가져와야하니 빈배열

  return (
    <Wrap>
      <ul>
        {news.map((newsItem,index)=>(
          <NewsItem key={index} article={newsItem}/>
        ))}
      </ul>
    </Wrap>
  )
}
