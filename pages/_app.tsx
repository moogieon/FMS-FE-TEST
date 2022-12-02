import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Alert from "@components/Modal/Alert ";

interface IContext {
  userInfo: {
    name: string;
    id: string;
  };
  setUserInfo: Dispatch<SetStateAction<{ name: string; id: string }>>;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as IContext);
export default function App({ Component, pageProps }: AppProps) {
  const [userInfo, setUserInfo] = useState({ name: "", id: "" });
  const [isLogin, setIsLogin] = useState(false);
  const value = {
    userInfo,
    setUserInfo,
    isLogin,
    setIsLogin,
  };

  return (
    <GlobalContext.Provider value={value}>
      <Component {...pageProps} />
      <Alert header=" ✔ 로그인 완료 되었습니다!" />
    </GlobalContext.Provider>
  );
}
