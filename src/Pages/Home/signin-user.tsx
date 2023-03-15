import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
export default function Username(prop: any) {
  const navigate = useNavigate();
  const handleSignin = () => navigate("/signin");
  const handleSignup = () => navigate("/signup");
  console.log(prop.props.infor);
  
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', width: 200}}>
      {
        prop.props.isOnline? 
        <Typography sx={{color: '#F5F5F5'}} >{prop.props.infor.userName}</Typography>
        :
        <Box sx={{display: 'flex'}}>
          <Button variant= 'text' sx={{color: '#F5F5F5'}} onClick = {()=>{handleSignin()}}>SignIn</Button>
          <Button variant= 'text' sx={{color: '#F5F5F5'}} onClick = {()=>handleSignup()}>SignUp</Button>
        </Box>
      }
    </Box>
  )
}