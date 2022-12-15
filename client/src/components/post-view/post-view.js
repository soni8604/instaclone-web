import axios from "axios";
import { useState, useEffect } from "react";
import "./post-view.css"

const PostView = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function showPost() {
            const apiResult = await axios.get("http://localhost:8000/api/posts")
            // setData(apiResult.data)
            setData(apiResult.data.data)
        }
        showPost()
    }, [data])
    return (
        <>

            <div id="insta-container">
                {
                    data.map((post) => {
                        const { id, name, location, description,likes,date, url } = post;
                        return (
                            <>
                                <div id="card" key={id}>
                                    <div className="card-header">
                                        <div className="card-header-name">
                                            {name}
                                        </div>
                                        <div className="card-place">
                                            {location}
                                        </div>
                                    </div>
                                    <span className="share">
                                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>

                                    </span>
                                    <div className="card-image">
                                        <img src={url} alt="vv" />
                                    </div>

                                    <div className="card-action">
                                        <span className="like">
                                            <i className="fa fa-heart-o" aria-hidden="true"></i>

                                        </span>
                                        <span className="shareIcon">
                                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>

                                        </span>
                                        <span className="date">
                                            {date}
                                        </span>
                                    </div>
                                    <div className="likes">
                                        {likes} likes
                                    </div>
                                    <div id="desciption">{description}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default PostView;
