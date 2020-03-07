import React from 'react';
import Comment from './Comment'

const Thread = (props) => {
    let comments = props.posts.map((post, index) => {
        return (
            <Comment key={index} post={post} />
        );
    });

    return (
        <div className="list-group">
            <div>{comments}</div>
        </div>

    );
};



export default Thread;