import React from 'react'
import { GoogleLogin } from 'react-google-login';
import {useNavigate} from 'react-router-dom'


export default function SigninWithGoogleBtn() {

    const navigate = useNavigate()

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
    
        try {
        //   dispatch({ type: AUTH, data: { result, token } });
       
      //  navigate('/');
     
        console.log("success", res)
        } catch (error) {
          console.log("error",error);
        }
      }

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
  
    return (
    <div>
         <GoogleLogin
            clientId="557313923916-5dnlfi76p0sm8dcfbdie9jee72ddqteo.apps.googleusercontent.com"
            render={(renderProps) => (
              <button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained">
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
        
          />

    </div>
  )
}
