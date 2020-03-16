import React from 'react';

const PostDetail = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <h5 className="mb-1">{props.author}</h5>
            <small>{props.date.toDateString()}</small>
        </div>
    );
}



export default PostDetail;