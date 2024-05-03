import Facebook from './component/Facebook/Facebook';
import FbBtn from './component/FbBtn/FbBtn';
import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostFromAPI();
  }, []);

  function getPostFromAPI() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.products);
      });
  }
  return (
    <div className="main-container">
      {posts.map((item, index) => (
        <div key={index} className="card">
 
          <a href='https://web.facebook.com/profile.php?id=100080084178650'><img className='Profile-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvKlOlPCrFaX2-OiR7O2Vy-05sGaxlv4eFQ&usqp=CAU'/></a>
          <h3><a target='_blank' style={{color: 'black'}} className='Name' href='https://web.facebook.com/profile.php?id=100080084178650'>Aneeqa Aamir</a></h3>
          <h6><a target='_blank'style={{color: 'gray'}} className='Date' href='https://web.facebook.com/profile.php?id=100080084178650'>December 15, 2023 at 8:30 PM</a></h6>
          <br/><br/><br/>

          {/* Display "description" key-value pair */}
          <p>
            Description: {item.description}
          </p>

          {/* Use FBReactions component and pass images from the API */}
          <Facebook images={item.images}/>
          
          <h1>{item.title}</h1>
          {/* Display other key-value pairs dynamically, excluding "thumbnail" and "description" */}
          {Object.entries(item).map(([key, value]) => (
            key !== "images" && key !== "thumbnail" && key !== "description" && (
              <p key={key}>
                {key}: {value}
                
              </p>
              
             
            )
          ))}
          <hr/>

          <FbBtn/>
          <div className="comment-icon">
  <FontAwesomeIcon icon={faComment} /> Comment {/* Comment Icon */}

</div>
<div className="share-icon">
  <FontAwesomeIcon icon={faShare} />Share {/* Comment Icon */}

</div>
        </div>
      ))}
    </div>
  );
}

export default App;