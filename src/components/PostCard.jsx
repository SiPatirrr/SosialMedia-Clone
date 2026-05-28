import "../css/PostCard.css";
import IconProfile from "../assets/user.png";
import PostImage from "../assets/post.png";
import IconLike from "../assets/like.png";
import IconComment from "../assets/messagef.png";
import IconShare from "../assets/share.png";
import { useState, useEffect } from "react";

function PostCard() {
    // const [likes, setlikes] = useState(0)
    // const [comment, setcomment] = useState(0)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                const NewData = data.map((user) => ({
                    ...user,
                    likes: 0,
                    comment: 0
                }))
                setUsers(NewData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const newLikes = (id) => {
        setUsers(
            users.map((user) => {
                if (user.id === id) {
                    return {
                        ...user,
                        likes: user.likes + 1
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