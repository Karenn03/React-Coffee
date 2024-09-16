import React from 'react';
import './CommentBox.css';

const CommentBox = ({ imageSrc, userName, rating, commentDate, commentText }) => {
    return (
        <div className="comment">
            <div className="comment-header">
                <img src={imageSrc} alt="user" className="user-img" />
                <div className="comment-info">
                    <div className="comment-top">
                        <span className="user-name">{userName}</span>
                        <div className="comment-meta">
                            <span className="star">{rating}</span>
                            <span className="comment-date">{commentDate}</span>
                        </div>
                    </div>
                    <div className="comment-body">{commentText}</div>
                </div>
            </div>
        </div>
    );
};

export default CommentBox;