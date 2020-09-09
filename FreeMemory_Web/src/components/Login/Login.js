import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

const containerStyle = {
  marginTop: 200,
  marginRight: -550
}

const footerStyle = {
  fontSize: 14
}

const Login = ({ id, setId, pw, setPw, requestSignin }) => {
  return (
    <div style={containerStyle}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-5">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong style={{ fontSize: 25 }}>SIGN IN</strong>
                  </h3>
                </div>
                <MDBInput
                  hint="아이디"
                  group
                  validate
                  error="wrong"
                  success="right"
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
                <MDBInput
                  hint="비밀번호"
                  group
                  type="password"
                  validate
                  value={pw}
                  onChange={e => setPw(e.target.value)}
                />
                <div className="text-center mb-3" onClick={requestSignin}>
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={requestSignin}
                  >
                    Sign in
                </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1" style={footerStyle}>
                <p className="font-small grey-text d-flex justify-content-end">
                  계정이 없으신가요?
                <a href="/signup" className="blue-text ml-1">
                    회원가입하기
                </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;