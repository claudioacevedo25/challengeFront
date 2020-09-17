import React, { Component} from 'react'
import {Link} from 'react-router-dom'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            content:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.addPost = this.addPost.bind(this)

        this.ref = React.createRef()
    }
    
    addPost(e){
        fetch('https://jsonplaceholder.typicode.com/posts', {
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
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addPost} className="col s12 card">
                        <div className="form-group">
                            <label htmlFor="">Title </label>
                            <input onChange={this.handleChange} type="text" name="title" id="" className="form-control" required/>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="">Content</label>
                            <textarea onChange={this.handleChange} name="content" id="" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form><hr/>
            <Link to="/" className="btn btn-primary">Back</Link>
            </div>
        )
    }
}

export default Form