import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddIcon, MenuIcon } from "../../icon/icon";
import background from '../../Image/background.png';
export default function AddTodo(){
  const option: {lable: string, value: string}[] = [
    {lable: 'High', value: 'high'},
    {lable: 'Medium', value: 'medium'},
    {lable: 'Low', value: 'low'},
  ]
  const navigate = useNavigate();
  const [nameTodo, setNameTodo] = useState('');
  const [value, setValue] = useState('');
  const getLevel = (option: any) => {
    setValue(option.value);
    console.log(value);
  }
  const getNameTodo = (e: any) => {setNameTodo(e.target.value)}
  const handleSubmit = () => {
    let data : {
      nameTodo: string,
      levelTodo: string,
    } = {
      nameTodo: nameTodo,
      levelTodo: value,
    }
    axios({
      method: 'post',
      url: 'http://127.0.0.1:3003/home/addtodo', 
      data: data,
      headers: {
        Authorization: "Bearer "+ window.sessionStorage.getItem('accessToken')
      }
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
    
   navigate('/')
  }
  useEffect(() => {
  },[])
  return (
    <Box sx={{width: '830px', height: '540px', border: '1px red solid'}}>
      <Box sx={{width: '830px', height: '44px', backgroundColor: '#427AE7', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box>
        <MenuIcon/>
        </Box>
        <Button variant="text" sx={{color: '#F5F5F5'}}>Username</Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', backgroundImage: `url(${background})`}}>
        <Box sx={{width: '400px', height: 494, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <Box>
            <TextField variant= 'outlined' sx={{width: 353, height: 67}} label = 'Name ToDo' onChange={e=>getNameTodo(e)}/>
            <Autocomplete
              id="combo-box-demo"
              options={option}
              getOptionLabel = {option => option.lable}
              onChange={(e, option) => getLevel(option)}
              sx={{ width: 354, height: 67 }}
              renderInput={(params) => <TextField {...params} label="Choose Level Todo" />}
            />
            <Box sx={{width: 354, display: "flex", justifyContent: 'center'}}>
              <Button variant= 'contained' sx={{ width : 354/2, height: 50, display: 'flex', justifyContent: 'space-around' }} onClick={()=>handleSubmit()}>
                <AddIcon/>
                <Typography variant= 'body2' sx={{fontSize: 36, fontFamily: 'Handlee'}}>Add</Typography>
              </Button>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}