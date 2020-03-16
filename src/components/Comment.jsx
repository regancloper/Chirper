import React from 'react';
import moment from 'moment';

const Comment = (props) => {
    return (
        <div className="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.post.author}</h5>
                <small>{moment(props.post.date).format('MMMM Do YYYY, h:mm:ss a')}</small>
            </div>
            <p className="mb-1">{props.post.text}</p>
        </div>
    );
};


export default Comment;
