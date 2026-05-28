import "../css/PostCard.css";
import IconProfile from "../assets/user.png";
import PostImage from "../assets/post.png";
import IconLike from "../assets/like.png";
import IconComment from "../assets/messagef.png";
import IconShare from "../assets/share.png";
import { useState, useEffect } from "react";

function PostCard() {
    const [likes, setlikes] = useState(0)
    const [comment, setcomment] = useState(0)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        users.map((user) => (
        <div className="post-card">
            <div className="post-info">
                <img src={IconProfile} alt="Profile" className="icon" />
                <h4>{user.name}</h4>
            </div>
            <img src={PostImage} alt="Post" className="post-image" />
            <div className="post-action">
                <div className="action-item" onClick={() => setlikes(likes + 1)}>
                    <img src={IconLike} alt="Like" className="action-icon" />
                    <span>{likes}</span>
                </div>

                <div className="action-item" onClick={() => setcomment(comment + 1)}>
                    <img src={IconComment} alt="Comment" className="action-icon" />
                    <span>{comment}</span>
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