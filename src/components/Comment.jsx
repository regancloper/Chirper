import React from 'react';
// import PostDetail from './PostDetail';

// class Comment extends Component {
//     constructor(props) {
//         super(props);

//         // this.state = {
//         //     // author: props.post.author,
//         //     // text: props.post.text,
//         //     // date: props.post.date,
//         //     // id: props.post.id
//         // }

//     }

//     render() {
//         return (
//             <div className="list-group-item list-group-item-action">
//                 {/* <PostDetail author={this.props.author} date={this.state.date} /> */}
//                 <p className="mb-1">{this.props.post}</p>
//             </div>
//         );
//     }
// }

const Comment = (props) => {
    return (
        <div className="list-group-item list-group-item-action">
            <p className="mb-1">{props.post}</p>
        </div>
    );
};


export default Comment;
