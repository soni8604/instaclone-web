import axios from "axios";
import { useState } from "react";
import "./newpost.css"
import {useNavigate} from "react-router-dom"
const NewPost = () => {

  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/Header');
  };

  // const url = "https://instaclone-server-santosh.herokuapp.com/api/createPost"
  const url="http://localhost:8000/api/createPost"

  const [post, setPost] = useState({
    name: "",
    location: "",
    description: "",
    PostImage: "",
    formData:new FormData()
 })

  

  const submit=data=> {
    axios.post(url, formData ).then(res => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  
  const {name,location,description,PostImage,formData}=post

  const onHandleChange=name=>event=>{
    const value=(name==="PostImage") ? event.target.files[0] : event.target.value;
    formData.set(name,value)
    console.log(value);
    setPost({...post,[name]: value})
  }

  return (
    <>
      <div className="form-container-personal-in-container">
        <form onSubmit={handleSubmit}>
          <h1>CREATE NEW POST</h1>
          <div className="form-data">
            <div className="file">
              <input type="file" onChange={onHandleChange("PostImage")} className="inputFile" required/>
            </div>
            <div className="name-location">
              <input type="text" onChange={onHandleChange("name")} placeholder="Author" required/>
              <input type="text" onChange={onHandleChange("location")} placeholder="Location" required />
            </div>
            <div className="description">
              <input type="text" onChange={onHandleChange("description")} placeholder="Description" className="inputDescription" required/>
            </div>

            <button onClick={()=>submit(formData)}>post</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPost;