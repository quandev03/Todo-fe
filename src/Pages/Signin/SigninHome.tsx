import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { MenuIcon } from "../../icon/icon";
import './../../css/file.css';
import axios from "axios";
import { dataSignIn } from "./signin.dto";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const handleSignup = ()=> navigate("/signup");
  const handleForgotPassword = ()=> navigate("/informationreset");
  const getUsername = (e: any) => {
    setUsername(e.target.value);
    console.log(username);
    
  }
  const getPassword = (e: any) => {
    setPassword(e.target.value);
    console.log(password);
  }
  const handleSubmit = () => {
    var data : dataSignIn = {
      username: username,
      password: password
    }
    console.log(data);
    
    axios({
      method: "post",
      url: 'http://127.0.0.1:3003/signin',
      data: data
    })
    .then((response) => {
      window.sessionStorage.setItem("accessToken", response.data.accessToken);    
      navigate("/")
    })
    .catch((error) => {console.log(error)})
  }
  return (
    <Box sx={{width: '830px', height: '540px', border: '1px red solid'}}>
      <Box sx={{width: '830px', height: '44px', backgroundColor: '#427AE7', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <MenuIcon/>
        <Button variant="text" sx={{color: '#F5F5F5'}} onClick = {()=> handleSignup()}>Signup</Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
        <Box></Box>
        <Box sx={{width: '238px', height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <Box sx={{ display: 'flex', width: 238}}>
            <Typography variant="h2"  sx={{alignItems: 'center', width: 226, marginLeft: 4, color: '#427AE7', fontFamily: 'Handlee'}}>Sign In</Typography>
          </Box>
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e)=>{getUsername(e)}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={e =>{getPassword(e)}} />
          <Box sx={{ display: 'flex',justifyContent: 'flex-end'}}>
            <Button onClick = {()=>handleForgotPassword()} sx= {{width: 150}}>
            <Typography variant="caption" sx={{width: 150, color: '#427AE7'}} >Forgot password</Typography>
            </Button>
          </Box>
          <Button variant="contained" onClick={()=>{handleSubmit()}}>SignIn</Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}