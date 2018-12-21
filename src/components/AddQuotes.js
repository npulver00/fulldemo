import React from "react";

function AddQuote(props){
    
    const{user}= props;

    return(
    <div>
     {user
      ? <div> You could add a quote here </div>
      : <div> Your need to log in </div>
    }
    </div>
    )
    
}