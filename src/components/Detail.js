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

    <div class="card">
        <div class="card-header">
             USERID: {post.userId} - ID: {post.id}
        </div>
        <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
            <a href="/" class="btn btn-primary">Back</a>
        </div>
    </div>
   )
}

export default Detail