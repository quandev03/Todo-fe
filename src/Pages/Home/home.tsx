import { Button, Checkbox, List, ListItem, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { MenuIcon } from "../../icon/icon"
import background from "../../../src/Image/background.png"
import Username from "./signin-user"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Home(){
  const [data, setData] = useState([])
  const [isOnline, setIsOnline] = useState(false)
  const [infor, setInfor] = useState({})
  const navigate = useNavigate()
  function handleAddTodo() {
    navigate("/addtodo")
  }
  
  console.log(data);
  useEffect(()=>{
    axios({
      method: "get",
      url: "http://127.0.0.1:3003/home/gettodofromuserid",
      headers: {Authorization: "Bearer "+ window.sessionStorage.getItem("accessToken")}
    })
    .then((response) => {
      setData(response.data.data);
      setInfor(response.data.infor)
      setIsOnline(true);
    })
    .catch((error) => {console.log(error)})
  }, [])
  var dataProp = {
    isOnline: isOnline,
    infor: infor
  }
  console.log(isOnline);
  const isCompletedUpdate = (todoId: any) => {
    console.log(todoId);
    
    axios({
      method: "post",
      url: "http://127.0.0.1:3003/home/updatetodo",
      headers: {Authorization: "Bearer "+ window.sessionStorage.getItem("accessToken")},
      data: {todoId: todoId}
    })
    .then((response) => {console.log(response.data);})
    .catch((error) => {console.log(error)});
  }
  return (
    <Box sx={{width: '830px', height: '540px', border: '1px red solid'}}>
      <Box sx={{width: '830px', height: '44px', backgroundColor: '#427AE7', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box>
        <MenuIcon/>
        
        </Box>
        <Username props= {dataProp}  />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', backgroundImage: `url(${background})`}}>
        <Box sx={{width: '400px', height: 494, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <Box sx={{display: 'flex' ,justifyContent: 'center'}}>
            <Typography variant="h3" sx={{color:'#427AE7'}}>Todo List</Typography>
          </Box>
          <Box>
            {
              isOnline ?
              <List sx={{height: 300, position: 'relative', overflow: 'auto'}}>
              {
                data.map((item:{
                  userID: string,
                  idTodo: string,
                  nameTodo: string,
                  levelTodo: string,
                  isCompleted: boolean
                })=>{
                  return (
                    <ListItem sx={{display: 'flex', justifyContent: 'space-around', color: '#427AE7'}}>
                      <Checkbox
                        checked={item.isCompleted}
                        onChange={()=>{
                          isCompletedUpdate(item.idTodo)
                        }}
                      />
                      <Typography variant="body2">{item.nameTodo}</Typography>
                      <Typography variant="body2">{item.idTodo}</Typography>
                      <Typography variant="body2">{item.levelTodo}</Typography>
                    </ListItem>
                  )
                }
                )
              }
            </List>:
            <Box>
              <Typography>You must signin</Typography>
            </Box>
            }
          </Box>
          <Box sx={{display: "flex", justifyContent: 'center'}}>
            <Button variant= 'contained' sx={{color: '#F5F5F5', backgroundColor: '#427AE7'}} onClick={()=>handleAddTodo()}>Add Todo</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}