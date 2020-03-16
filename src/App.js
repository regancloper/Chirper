import React, { Component } from 'react';
import './App.css';
import Thread from './components/Thread'
// import CommentForm from './components/CommentForm'

class App extends Component {
  state = {
    posts: [
      {
        author: "Regan Loper",
        text: "This is the first comment posted on this thread!",
        date: Date.now()
      },
      {
        author: "John Smith",
        text: "I think this is a cool website.",
        date: Date.now()
      },
      {
        author: "April May",
        text: "I disagree John Smith - I think this website sucks!",
        date: Date.now()
      }
    ],
    inputText: '',
    author: ''
  }

  handleCommentInput = e => this.setState({ inputText: e.target.value });
  handleAuthorInput = e => this.setState({ author: e.target.value });


  handleButtonClick = (e) => {
    e.preventDefault();
    const newPost = {
      author: this.state.author,
      text: this.state.inputText,
      date: Date.now()
    }
    this.setState({
      posts: [...this.state.posts, newPost],
      inputText: '',
      author: ''
    });
  }

  render() {
    return (
      <div>
        <h1 className="m-3">Chirper</h1>

        <Thread posts={this.state.posts} />


        <div className="my-3 container-fluid bg-light">
          <form>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input type="text" value={this.state.author} className="form-control" onChange={this.handleAuthorInput} />
              <label htmlFor="commentText">Insert comment here</label>
              <textarea className="form-control" value={this.state.inputText} rows="3" onChange={this.handleCommentInput} />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handleButtonClick}>
              Add Comment!
            </button>
          </form>
        </div>


      </div>


    );
  }


}



export default App;
