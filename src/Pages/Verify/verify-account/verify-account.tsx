import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";
export default function VerifyAccount() {
  const [username, setUsername] = useState('')
  const [codeVerify, setCodeVerify] = useState('')
  const getUsername = async (e: any) => {
    setUsername(e.target.value)
  }
  const getCodeVerify = async (e: any) => {
    setCodeVerify(e.target.value)
  }
  const handleSubmit = async () => {
    var data: {
      username: string,
      codeVerifyBody: string,
    } = {
      username: username,
      codeVerifyBody: codeVerify
    }
    if(data.codeVerifyBody!==undefined){
      axios({
        method: 'post',
        url: 'http://127.0.0.1:3003/signup/verify',
        data: data,
      })
      .then((response) => {alert(response.data.Notification) })
      .catch((error) => {console.log(error) })
    }
    
    
  }
  return (
    <Box sx={{width: 830, height: 540}}>
    <Box sx={{width: 830, height: 91, backgroundColor: '#427AE7', display: 'flex', justifyContent: 'center', fontFamily: 'inter', alignItems: 'center'}}>
      <Typography variant="h2" sx={{color: '#F5F5F5'}}>Verify Account</Typography>
    </Box>
    <Box sx={{width: 830, height: 449, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    
      <Box sx={{width: 354, height: 300, display: "flex", flexDirection: 'column', justifyContent: 'space-around'}}> 
        <TextField label= 'Username' sx={{width: 354, height: 67}} onChange = {e =>getUsername(e)} /> 
        <TextField label= 'Verify code' sx={{width: 354, height: 67}} onChange = { e =>getCodeVerify(e)} />
        <Button variant= 'contained' sx={{backgroundColor: '#427AE7', height: 50 }} onClick = {()=> handleSubmit()}>Submit</Button>
      </Box>
    </Box>
    </Box>
  )
}