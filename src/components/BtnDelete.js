import React, { Component } from 'react'

class BtnDelete extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: null
        }

        this.deleteId = this.deleteId.bind(this)
        this.ref = React.createRef()
    }
    
    
    deleteId(e){
        const id = this.props.id
       
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            if(res.ok){
                return res.json()
            }
        })
        .then( data => {
            console.log(data);
        })
        .catch( err => console.log(err))
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.deleteId}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        )
    }
}

export default BtnDelete