import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

interface IContext {
  accessToken?: string;
  setAccessToken: Dispatch<SetStateAction<undefined>>;
  userInfo: {
    name: string;
    id: string;
  };
  setUserInfo: Dispatch<SetStateAction<{ name: string; id: string }>>;
}

export const GlobalContext = createContext({} as IContext);
export default function App({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState({ name: "", id: "" });
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };
  return (
    <GlobalContext.Provider value={value}>
      <Component {...pageProps} />;
    </GlobalContext.Provider>
  );
}
