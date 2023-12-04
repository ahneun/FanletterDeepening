import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { login } from "redux/modules/authSlice";
// import { useDispatch } from "react-redux";

const Login = () => {
  // const dispatch = useDispatch();

  const [loginId, setLoginId] = useState("");
  const [passWord, setPassWord] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const [signupId, setSignupId] = useState("");
  const [signupPassWord, setSignupPassWord] = useState("");
  const [nickName, setNickName] = useState("");
  // const [signupInfo, setSignupInfo] = useState([{
  //   'id' : 'ahneun',
  //   'pw' : '1234',
  //   'nickname' : '호얍'
  // }])

  // const navigate = useNavigate();

  const toggleHandler = () => {
    setIsLogin(false);
  };

  const toggleInHandler = () => {
    setIsLogin(true);
  };

  // navigate("/");

  return (
    <Container>
      {isLogin ? (
        <DetailWrapper>
          <InputWrapper>
            <Title>로그인</Title>
            <input
              onChange={(event) => setLoginId(event.target.value)}
              value={loginId}
              placeholder="아이디 (4~10글자)"
              maxLength={10}
            />
          </InputWrapper>
          <InputWrapper>
            <textarea
              onChange={(event) => setPassWord(event.target.value)}
              value={passWord}
              placeholder="비밀번호 (4~15글자)"
              maxLength={15}
            />

            <Button>로그인</Button>
            <Button onClick={() => toggleHandler()}>회원가입</Button>
          </InputWrapper>
        </DetailWrapper>
      ) : (
        <DetailWrapper>
          <InputWrapper>
          <>
            <h1>회원가입</h1>
          </>
            <input
              onChange={(event) => setSignupId(event.target.value)}
              value={signupId}
              placeholder="아이디 (4~10글자)"
              maxLength={10}
            />
          </InputWrapper>
          <InputWrapper>
            <textarea
              onChange={(event) => setSignupPassWord(event.target.value)}
              value={signupPassWord}
              placeholder="비밀번호 (4~15글자)"
              maxLength={15}
            />
          </InputWrapper>
          <InputWrapper>
            <textarea
              onChange={(event) => setNickName(event.target.value)}
              value={nickName}
              placeholder="닉네임 (1~10글자)"
              maxLength={10}
            />
            <Button type="submit">회원가입</Button>
            <Button onClick={() => toggleInHandler()}>로그인</Button>
          </InputWrapper>
        </DetailWrapper>
      )};
    </Container>
  );
};

const Container = styled.form`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DetailWrapper = styled.div`
  background-color: gray;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`

const InputWrapper = styled.div`

`;

const Button = styled.button`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  padding: 6px 12px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 30px;
  display: flex;
  
`

export default Login;
