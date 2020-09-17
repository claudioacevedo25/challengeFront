import React, { Component, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const Detail = () => {

    const [post, setPost] = useState([])
    const {id} = useParams()


   useEffect(()=> {
    getPost()
   }, [])

  const getPost = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await data.json()
    setPost(post)
   }

   if(!post.id){
       return <h1 className="text-center text-danger">El post es inexistente!!!</h1>
   }
   return(
      <div>  
            <h1 className="text-center">{post.title}</h1>
            <h3 className="text-center">{post.body}</h3>
            <h4>ID: {post.id}</h4>
            <h4>USERID: {post.userId}</h4> 
      </div>
   )
}

export default Detail