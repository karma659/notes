import React , {useState,useEffect} from 'react'

const iframeparent = () => {

    const[receivedmessage,setreceivedmessage]=useState("");
    
    useEffect(() => {
        window.addEventListener("message",function(e) {
            
         
         setreceivedmessage(""+e.data);
      console.log(receivedmessage);
        });
    }, []);


    return (
        <div align="center"    style={{
            border:" 5px solid green",
            width: "99vw",
            height: "99vh"
           }}>
      
            <iframe 
            src="/Country" 
            width="450" 
            height="548" 
            style={{
                margin:"20px 0px 0px 0px",
                border:" solid red"
               }} >
            
            </iframe>
      
       <p>{receivedmessage}</p>
        </div>
    )
}

export default iframeparent;
