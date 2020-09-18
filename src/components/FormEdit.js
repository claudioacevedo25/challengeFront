import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const FormEdit = () => {
    
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

   const edit = (e)=> {
        const id = this.state.id
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
    })
        .then( res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch( err => console.log(err))
        e.preventDefault()
    }

    const handleChange =(e)=>{
        const {name, value} = e.target
    }

   return(
        <div>
                <form onSubmit={edit} className="col s12 card">
                        <div className="form-group">
                            <label htmlFor="">Title </label>
                            <input onChange={handleChange} type="text" name="title" id="" className="form-control" value={post.title || ''} required/>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="">Content</label>
                            <textarea onChange={handleChange} name="content" id="" cols="30" rows="10" className="form-control" value={post.body || ''}></textarea>
                        </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form><hr/>
            <Link to="/" className="btn btn-primary">Back</Link>
        </div>
   )
   
}

export default FormEdit