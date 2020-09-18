import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, HashRouter} from 'react-router-dom'
import BtnDelete from './BtnDelete'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.ref = React.createRef()
    }

    componentDidMount(){
        this.getPost();
    }

    getPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({
                title:data
            })
        })
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    
    render(){
        return (
            <div className="container">
                <Link to='/' className="btn btn-info">Home</Link>
                <Link to='/newPost' className="btn btn-primary">New Post</Link>
                <h2 className="text-center">POSTS</h2><hr/>
                <section>
                    <table className="table shadow p-3 mb-5 bg-white rounded">
                        <thead className="thead-dark">
                            <tr>
                                <th className="col">Title</th>
                                <th className="col">Edit</th>
                                <th className="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.title.map( t => {
                                    return(
                                        <tr key={t.id}>
                                            <td>
                                                <Router>
                                                    <Route>
                                                        <Link to={`/detail/${t.id}`}>{t.title}</Link>
                                                    </Route>
                                                </Router>
                                               
                                            </td>
                                            <td>
                                                <Router>
                                                    <Route>
                                                        <Link className="btn btn-success" to={`/edit/${t.id}`}>Edit</Link>
                                                    </Route>
                                                </Router>
                                            </td>
                                            <td><BtnDelete id={t.id}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default Post