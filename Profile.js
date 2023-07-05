import React, { useEffect, useState } from "react";
 import PostDetail from "./PostDetail";
import "./Profile.css";
 import ProfilePic from "./ProfilePic";

export default function Profie() {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false)
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("")
  const [changePic, setChangePic] = useState(false)


  const toggleDetails = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setPosts(posts);
    }
  };

  const changeprofile = () => {
    if (changePic) {
      setChangePic(false)
    } else {
      setChangePic(true)
    }
  }


  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result)
  //       setPic(result.post);
  //       setUser(result.user)
  //       console.log(pic);
  //     });
  // }, []);

  return (
    <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img
            onClick={changeprofile}
           // src={user.Photo ? user.Photo : picLink}
           src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80
           "
            alt=""
          />
        </div>
        {/* profile-data */}
        <div className="pofile-data">
          <h1>peter son</h1>
          <br></br>          
          {/* <p>peterrr</p>
          <br></br>  */}
          {/* <h1>{JSON.parse(localStorage.getItem("user")).name}</h1> */}
          <div className="profile-info" style={{ display: "flex" }}>
            <p>{pic ? pic.length : "6"} posts</p>
            <p>{user.followers ? user.followers.length : "270"} followers</p>
            <p>{user.following ? user.following.length : "340"} following</p>
           
          </div>
          <br></br>
           

            <p>Priortize yourself first</p>
        </div>
        
      </div>
      <hr
        style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      {/* Gallery */}
      <div className="gallery">
        {/* {pic.map((pics) => {
          return <img key={pics._id} src={pics.photo}
            onClick={() => {
              toggleDetails(pics)
            }}
            className="item"></img>;
        })} */}
        <img src="https://images.ctfassets.net/az3stxsro5h5/24L2UM6hV3m4csMvBzkHbj/9d4583541bdb29ae0c6a9ff2b60f1313/After.jpeg?w=2389&h=2986&fl=progressive&q=50&fm=jpg

        "></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Xt6PuDdbh2ugjs9EyZuz2QpnWB99AJsCYmznELv4HrELoUg9rCTOK7saKEnws4KtR18&usqp=CAU
        "></img>
        
        <img src="https://favim.com/pd/p/orig/2018/11/27/instagram-grunge-aesthetic-Favim.com-6584604.png
        "></img>
        <img src="data:image/jpeg;base64,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
        "></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxch3oTfMwxsWuDM9aG3bm8edzfDNaLwiOg&usqp=CAU"></img>
        <img src="data:image/jpeg;base64,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

        "></img>
      </div>
      {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails} />
      }
      {
        changePic &&
        <ProfilePic changeprofile={changeprofile} />
      }
    </div>
  );
}