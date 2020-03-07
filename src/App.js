import React, { Component } from 'react';
import './App.css';
import Thread from './components/Thread'
// import CommentForm from './components/CommentForm'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ["Hello, I'm Tom.", "What's up everyone??!!", "How are y'all?"],
      inputText: ''
      //   {
      //     author: "Regan Loper",
      //     text: "This is the first comment posted on this thread!",
      //     date: "2/6/2020",
      //     id: 0
      //   },
      //   {
      //     author: "John Smith",
      //     text: "I think this is a cool website.",
      //     date: "3/1/2020",
      //     id: 1
      //   },
      //   {
      //     author: "April May",
      //     text: "I disagree John Smith - I think this website sucks!",
      //     date: "3/3/2020",
      //     id: 2
      //   }
      // ],
      // currentId: 3
    }
    
  }

  handleCommentInput = (text) => {
    this.setState({ inputText: text });
  }

  // handleAuthorName = (name) => {
  //   this.setState({ inputName: name });
  // }

  handleButtonClick = () => {
    // let newPost = {
    //   author: this.state.inputName,
    //   text: this.state.inputText,
    //   date: new Date(),
    //   id: this.state.currentId
    // }

    
    let newList = this.state.posts.slice();
    newList.push(this.state.inputText);
    this.setState({ posts: newList, inputText: '' });


  }

  render() {
    return (
      <div>
        <h1 className="m-3">Chirper</h1>

        <Thread posts={this.state.posts} />


        <div className="my-3 container-fluid bg-light">
          <form>
            {/* <div className="form-group">
              <label htmlFor="postAuthor">Author</label>
              <input type="text" className="form-control" placeholder="Author" onChange={(event) => this.handleAuthorName(event.target.value)} />
            </div> */}
            <div className="form-group">
              <label htmlFor="commentText">Insert comment here</label>
              <textarea className="form-control" value={this.state.inputText} rows="3" onChange={(event) => this.handleCommentInput(event.target.value)}></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={(() => this.handleButtonClick())}>
              Add Comment!
            </button>
          </form>
        </div>


      </div>


    );
  }


}



export default App;
