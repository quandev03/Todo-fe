import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../../icon/icon";

function ResetPassword(){
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const getPassword = (e: any) => setPassword(e.target.value)
  const getConfimPassword = (e: any) => setConfirmPassword(e.target.value)
  const handleSubmit = () => {
    if(password=== confirmPassword){
      var passwordSubmit = password;
      navigate('/')
    }else return alert('Password and Confirm Password must be same')
    
  }
  return (
    <Box sx={{width: '830px', height: '540px', border: '1px red solid'}}>
      <Box sx={{width: '830px', height: '44px', backgroundColor: '#427AE7', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <MenuIcon/>
        <Button variant="text" sx={{color: '#F5F5F5'}}>SignIn</Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
        <Box></Box>
        <Box sx={{width: '426px', height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <Box sx={{ display: 'flex', width: 426, justifyContent: 'center'}}>
            <Typography variant="h2"  sx={{alignItems: 'center', width: 380, color: '#427AE7', fontFamily: 'Handlee'}}>Reset Password</Typography>
          </Box>
          <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{getPassword(e)}}/>
          <TextField id="outlined-basic" label="Confirm password" variant="outlined" onChange={(e)=>{getConfimPassword(e)}}/>
          <Button variant="contained" onClick={()=>handleSubmit()}>Sent to Email</Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  )
}


export default ResetPassword