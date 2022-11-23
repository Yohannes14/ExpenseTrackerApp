import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../utils/Auth';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // context api
  const authContext = useContext(AuthContext)
  // 
   async function signupHandler({email, password}){
 
   setIsAuthenticating(true);
   try{
   const token = await createUser(email, password);
    authContext.authenticate(token);

   }catch(error){
     Alert.alert('Authentication failed ',
       'Could not create user. Please check your credentials or try again later!');
   }
   setIsAuthenticating(false);
  } 

   if(isAuthenticating){
    return <LoadingOverlay message = "Creating user..."/>
   }

  return <AuthContent onAuthenticate = {signupHandler} />;
}

export default SignupScreen;
