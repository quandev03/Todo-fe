import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AddTodo from './Pages/Home/add-todo';
import Home from "./Pages/Home/home";
import InforResetPassword from "./Pages/Reset-password/information-resetpassword";
import ResetPassword from "./Pages/Reset-password/reset-password";
import Signin from "./Pages/Signin/SigninHome";
import Signup from "./Pages/Signup/SignupHome";
import VerifyAccount from "./Pages/Verify/verify-account/verify-account";
import Verify from "./Pages/Verify/verify/verify";
export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/informationreset" element={<InforResetPassword/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/verifyaccount" element={<VerifyAccount/>}/>
        <Route path="/addtodo" element={<AddTodo/>}/>
      </Routes>
    </BrowserRouter>
  )
}