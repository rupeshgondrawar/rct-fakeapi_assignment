import React from "react";

function Postcard(props) {
  return <div className="post-card">
     <p>{props.title}</p>
     <h3>{props.body}</h3>
  </div>;
}

export default Postcard;
