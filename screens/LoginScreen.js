import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../utils/Auth';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // 
  const authContext = useContext(AuthContext)
   async function loginHandler({email, password}){

    setIsAuthenticating(true);
    try{
     const token = await login(email, password);
     authContext.authenticate(token);
    }catch(error){
      Alert.alert('Authentication',
        'Could not log you in. Please check your credentials or try again later!');
        setIsAuthenticating(false);
      }
    
   } 

   if(isAuthenticating){
    return <LoadingOverlay message = "Loggin you in..."/>
   }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
