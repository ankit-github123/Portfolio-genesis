import React, { useState, useEffect } from "react";
import Main from "./Main";
// import Loader from "./Loading";

import "./app.css"

 const App = () => {
       const [loader,setloader] = useState(true);

       useEffect(()=> {
            setTimeout(()=>{
                  setloader(false)
            },700)
       },[])
  return <div>
        <Main/>
        {console.log(loader)
        }
  </div>
 }

 export default App;