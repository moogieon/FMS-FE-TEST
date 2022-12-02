import { GlobalContext } from "pages/_app";
import React, { useContext, useEffect, useState } from "react";

const Alert = ({ header }: { header: string }) => {
  const { userInfo, isLogin, setIsLogin } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isLogin) {
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
      setTimeout(() => setIsLogin(open), 2000);
    }
  }, [isLogin]);
  if (!open) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-5 right-0 left-0 m-auto w-[40%] max-h-10px py-8 px-5 rounded-lg shadow-xl shadow-dark-200 bg-green-600 text-white <md:w-[70%] ${
        isLogin ? "animate-fadeIn" : "animate-fadeOut transition-all invisible"
      }`}
    >
      {header}
      <div>{userInfo.name}님 환영합니다.</div>
    </div>
  );
};

export default Alert;
