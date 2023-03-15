import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { userData } from "../../fake-data/data-user";
import { MenuIcon } from "../../icon/icon";
import './../../css/file.css';
import { dataSignupDto } from "./signup-data-dto";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { usernameInput } from "./login/getdata";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const handleSignin = () => navigate('signin')
  const getUsername = (e: any) => {
    setUsername(e.target.value);    
  }
  const getPassword = (e: any) => {
    setPassword(e.target.value);
  }
  const getConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  }
  const getEmail = (e: any) => {
    setEmail(e.target.value);
  }
  var passwordSubmit: string
  const handleSubmit = () => {
  var data : dataSignupDto
    if(password === confirmPassword){
      passwordSubmit = password
      data = {
        username: username,
        password: password,
        mail: email,
      }
      console.log(data);
      
      axios({
        method: 'post',
        url: 'http://localhost:3003/signup',
        data: data,
      })
      .then((response) => {
        alert(response.data.Notification)
        navigate('/verifyaccount')
      })
      .catch((error) => {console.log(error)});
    }
    
    
  }
  return (
    <Box sx={{width: '830px', height: '540px', border: '1px red solid'}}>
      <Box sx={{width: '830px', height: '44px', backgroundColor: '#427AE7', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <MenuIcon/>
        <Button variant="text" sx={{color: '#F5F5F5'}} onClick={()=>handleSignin()}>Sign In</Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
        <Box></Box>
        <Box sx={{width: '238px', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <Box sx={{ display: 'flex', width: 238}}>
            <Typography variant="h2"  sx={{alignItems: 'center', width: 226, marginLeft: 4, color: '#427AE7', fontFamily: 'Handlee'}}>Sign Up</Typography>
          </Box>
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e)=>{getUsername(e)}} sx = {{height: 79}}/>
          <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{getEmail(e)}} sx = {{height: 79}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={e =>{getPassword(e)}}  sx = {{height: 79}}/>
          <TextField id="outlined-basic" label="Confirm password" variant="outlined" type='password' onChange={e =>{getConfirmPassword(e)}}  sx = {{height: 79}}/>
          <Button variant="contained" onClick={()=>{handleSubmit()}}>Sign Up</Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}