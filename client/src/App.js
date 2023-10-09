import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import axios from "axios";

function App() {
  const googleResponse = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      const serverResponce = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}calendar/create-tokens`,
        { credential }
      );

      console.log(serverResponce);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      <h1>Movie planner</h1>
      <div>
        <GoogleOAuthProvider
          clientId="748075046792-vdsep5l56s8hl8uff9jqdedql7m7hrc6.apps.googleusercontent.com"
          cookiePolicy="single_host_origin"
          responseType="code"
          accessType="offline"
          scope="openid email profile https://www.googleapis.com/auth/calendar"
          uxMode="popup"
          state_cookie_domain="http://localhost:5000/"
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
