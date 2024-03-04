import React, { useState,useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import TextField from '@material-ui/core/TextField';
import { createStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Spinner from "../../Spinner/LoadingSpinner";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./ContactCard";
import { text } from "./Text";
import "./contact.css";
const Contact = () => {
    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    var currentOffset,ISTOffset,ISTTime,hoursIST,minutesIST,date,d,dayName;
    const timeset = () => {
       d = new Date();
     date = d.getDate();
    dayName = days[d.getDay()];
     currentOffset = d.getTimezoneOffset();
     ISTOffset = 330; 
     ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset)*60000);
     hoursIST = ISTTime.getHours();
     minutesIST = ISTTime.getMinutes();
    }
    const [form,setform] =useState({name:'',email:'',subject:'',message:''})
    const [state,setstate]=useState(false);
    const [isLoading,setIsLoading] = useState(false);
      useEffect(()=>{
          setform({...form,name:'',email:'',subject:'',message:''})
          // eslint-disable-next-line
      },[state])
    const handleClickTodo =async (e) => {
        e.preventDefault();
        
      if(true) {
        timeset();
      try {
        setIsLoading(true);
    
    
      const response = await fetch("https://ankit-kumar-portfolio.herokuapp.com/subscriber",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    
      },
      body : JSON.stringify({
        name:form.name,
        email:form.email,
        subject:form.subject,
        message:form.message,
        time:monthNames[d.getMonth()]+" "+date+" "+dayName+" "+hoursIST+":"+minutesIST+" IST"
      })
      });
      
      const responseData = await response.json();
      console.log(responseData,"Sssssssssssssssssssssssss");
      if(!response.ok) {
      
      window.alert(responseData.message);
      throw new Error(responseData.message);
      }
      // UserManageHandle(responseData);
      // setresponse(responseData);
      
      
      
    //   setIsLoading(false);
      }catch(err) {
      console.log(err,"sssssssssssscccccccccccccccccccccccccccc");
      
      setIsLoading(false);
      } 
      }
      setstate(true)
      }  
    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                color: green[900],
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        border: "1.5px white solid" // default
                    },
                    "&:hover fieldset": {
                        borderColor: "white"
                    },
                    "&.Mui-focused fieldset": {
                        border: "1.5px solid #e24840" // customized
                    }
                }
            }
        })
    );
    const card = text.map((item)=> {
        return <ScrollAnimation
                        animateIn="slideInUp"
                        duration={2}
                        animateOnce={true}
                        delay={item.delay}
                  > <Card content={item} icon={item.icon} />
                  </ScrollAnimation>
    })
    const classes = useStyles();
    return (
        <div id="contact" className="contact_main_div common_pad_left common_pad_right">
            
            <div className="contact_title">
            <ScrollAnimation
                        animateIn="fadeIn"
                        duration={2}
                        animateOnce={true}
                        delay={100}
                  >
                <h6 className={"color"} > Contact Me </h6> <h1> Get In Touch </h1> <div className="border_botton_red" > </div></ScrollAnimation> </div> <div className="row contact_input_section">
                
                <div className="col-lg-7 padd_none">
                <ScrollAnimation
                        animateIn="fadeIn"
                        duration={2}
                        animateOnce={true}
                        delay={250}
                  >
                    <div className="input_class_contact" >                   
                   
                        <div className="input_container" >
                        {isLoading && <Spinner asOverlay/>}
                            {/* <input onChange={(e)=>{setname(e.target.value)}}/> */}
                            <TextField
                                onChange={(e) => {
                                    setform({...form,name:e.target.value})
                                }}
                                classes={{
                                    root: classes.root
                                }}
                                id="outlined-basic"
                                label="Name"
                                value={form.name}
                                variant="outlined"
                            /></div> <div className="input_container" >
                            <TextField
                                onChange={(e) => {
                                    setform({...form,email:e.target.value})
                                }}
                                classes={{
                                    root: classes.root
                                }}
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={form.email}
                            /> </div>
                        <div className="input_container" >
                            <TextField
                                onChange={(e) => {
                                    setform({...form,subject:e.target.value})
                                }}
                                classes={{
                                    root: classes.root
                                }}
                                id="outlined-basic"
                                label="Outlined"
                                value={form.subject}
                                variant="outlined"
                            /> </div>
                        <div className="input_container" >
                            <TextField
                                multiline
                                onChange={(e) => {
                                    setform({...form,message:e.target.value})
                                }}
                                classes={{
                                    root: classes.root
                                }}
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                value={form.message}
                            /> </div>
                        <div className="input_container" >
                            <button onClick={(e)=>{handleClickTodo(e)}} className="submit_button">SEND MESSAGE</button>
                        </div>
                    </div></ScrollAnimation> </div> <div className="col-lg-5" >
                    <div className="contact_card_container" >
                        {card}
                    </div> </div> </div> </div>
    )
}

export default Contact;