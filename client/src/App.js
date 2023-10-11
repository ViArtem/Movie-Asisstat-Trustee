import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import axios from "axios";

function App() {
  const googleResponse = async (credentialResponse) => {
    try {
      console.log(credentialResponse);
      // const { credential } = credentialResponse;

      // const serverResponce = await axios.post(
      //   `${process.env.REACT_APP_SERVER_URL}calendar/create-tokens`,
      //   { credential }
      // );

      // console.log(serverResponce);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      <h1>Movie planner</h1>
      <div>
        <GoogleOAuthProvider
          clientId=""
          cookiePolicy="single_host_origin"
          scope="openid email profile https://www.googleapis.com/auth/calendar"
          uxMode="popup"
          state_cookie_domain="http://localhost:3000/"
          responseType="code"
          accessType="offline"
        >
          <GoogleLogin
            onSuccess={googleResponse}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default App;
