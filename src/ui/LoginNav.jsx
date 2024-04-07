import LoginForm from '../Features/authentication/LoginForm';
import UserNav from '../Features/user dashboard/UserNav';


const LoginNav = () => {

 return (
  <div className=' grid px-3'>
   <div className=' flex items-center gap-3'>

    <LoginForm />

    <div className=" text-blue-500">
     <UserNav />
    </div>

   </div>

  </div>
 );
};

export default LoginNav;