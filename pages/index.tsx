import React, { useContext } from "react";
import { ScreenWrap, Container, Input, Button } from "components";
import { useRouter } from "next/router";
import { GlobalContext } from "./_app";
import useForm from "@components/CustomHooks/UseFrom";
import Loginvalidate, { IUserData } from "./validation/Login.validation";
//TODO: Q1-1 로그인 상태 관리
// 상태관리 라이브러리 (context, redux, recoil 등) 을 활용해서 로그인 상태를 관리하는 기능을 개발 해주세요
// 라이브러리 사용은 자율입니다.
// 로그인이 완료되면 /home 라우터로 이동해야합니다.
const Login = () => {
  const { setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: { id: "", name: "" },
    onSubmit: (values: IUserData) => {
      try {
        setUserInfo({ id: values.id as string, name: values.name as string });
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ id: values.id, name: values.name })
        );
        router.push("/home");
      } catch (error) {
        alert("로그인 오류");
      }
    },
    validate: Loginvalidate,
  });

  return (
    <Container>
      <ScreenWrap>
        <div className="w-[90%] flex flex-col gap-2">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
            <div className="mb-5">
              <Input
                type="text"
                placeholder="아이디를 입력하세요"
                value={values.id}
                name="id"
                onChange={handleChange}
              />
              <span className="text-xs text-red-500">{errors?.id}</span>
            </div>
            <div className="mb-5">
              <Input
                type="text"
                placeholder="이름을 입력하세요"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              {errors?.name && (
                <span className="text-xs text-red-500">{errors?.name}</span>
              )}
            </div>

            <Button>로그인</Button>
          </form>
        </div>
      </ScreenWrap>
    </Container>
  );
};

export default Login;
