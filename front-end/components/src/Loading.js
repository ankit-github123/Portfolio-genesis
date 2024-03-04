import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
      return (
            <div style={{background:"#1f2233",height:"100vh"}}>
             <div className="centered">
            <Loader
        type="Puff"
        color="#e24840"
        height={100}
        width={100}
        timeout={500} //3 secs
      />
      </div>
      </div>
      )
}

export default Loading;