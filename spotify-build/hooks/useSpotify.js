import { useEffect } from "react";
import {signIn, useSession} from "next-auth/react";
import spotifyApi from "../lib/spotify";

export const useSpotify = () => {
  const {data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // if refresh token fails direct user to log in
        if (session.error === "RefreshAccessTokenError") {
          signIn();
        }

        spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session]);
  
  return spotifyApi;
}