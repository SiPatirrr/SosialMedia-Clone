import React from "react";
import "../css/PostCard.css";
import IconProfile from "../assets/user.png";
import PostImage from "../assets/post.png";
import IconLike from "../assets/like.png";
import IconComment from "../assets/messagef.png";
import IconShare from "../assets/share.png";

function PostCard({ users, setUsers }) {
    // const [likes, setlikes] = useState(0)
    // const [comment, setcomment] = useState(0)


    const newLikes = (id) => {
        setUsers(
            users.map((user) => {
                if (user.id === id) {
                    if (user.liked) {
                        return {
                            ...user,
                            likes: user.likes - 1,
                            liked: false
                        };
                    }else {
                        return {
                            ...user,
                            likes: user.likes + 1,
                            liked: true
                        };
                    }
                } else {
                    return user
                }
            })
        )
    }

    const newComment = (id) => {
        setUsers(
            users.map((user) => {
                if (user.id === id) {
                    return {
                        ...user,
                        comment: user.comment + 1
                    }
                } else {
                    return user
                }
            })
        )
    }

    return (
        users.map((user) => (
        <div className="post-card">
            <div className="post-info">
                <img src={IconProfile} alt="Profile" className="icon" />
                <h4>{user.name}</h4>
            </div>
            <img src={PostImage} alt="Post" className="post-image" />
            <div className="post-action">
                <div className="action-item" onClick={() => newLikes(user.id)}>
                    <img src={IconLike} alt="Like" className="action-icon" />
                    <span>{user.likes}</span>
                </div>

                <div className="action-item" onClick={() => newComment(user.id)}>
                    <img src={IconComment} alt="Comment" className="action-icon" />
                    <span>{user.comment}</span>
                </div>

                <div className="action-item">
                    <img src={IconShare} alt="Share" className="action-icon" />
                </div>
            </div>
            <div className="post-bio">
                <p>
                    <strong>{user.username}</strong> <span>[{user.email}]</span>
                </p>
            </div>
        </div>
        ))
    );
}

export default PostCard;