import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

const divStyle = {
  marginBottom: 30
}

const containerStyle = {
  marginTop: 100,
  marginRight: -550
}

const footerStyle = {
  fontSize: 14
}

const Register = ({ id, setId, pw, setPw, name, setName, email, setEmail, grade, setGrade, classroom, setClassroom, studentNumber, setStudentNumber, requestSignup }) => {
  return (
    <div style={containerStyle}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-5">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong style={{ fontSize: 25 }}>SIGN UP</strong>
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
                <div style={divStyle}>
                  <select className="browser-default custom-select" value={grade} onChange={e => setGrade(e.target.value)}>
                    <option>학년</option>
                    <option value="1">1학년</option>
                    <option value="2">2학년</option>
                    <option value="3">3학년</option>
                  </select>
                </div>
                <div style={divStyle}>
                  <select className="browser-default custom-select" value={classroom} onChange={e => setClassroom(e.target.value)}>
                    <option>학반</option>
                    <option value="1">1반</option>
                    <option value="2">2반</option>
                    <option value="3">3반</option>
                  </select>
                </div>
                <MDBInput
                  hint="번호"
                  group
                  validate
                  error="wrong"
                  success="right"
                  value={studentNumber}
                  onChange={e => setStudentNumber(e.target.value)}
                />
                <MDBInput
                  hint="이름"
                  group
                  validate
                  error="wrong"
                  success="right"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <MDBInput
                  hint="이메일"
                  group
                  validate
                  error="wrong"
                  success="right"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={requestSignup}
                  >
                    Sign up
                </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1" style={footerStyle}>
                <p className="font-small grey-text d-flex justify-content-end">
                  계정이 있으신가요?
                <a href="/signin" className="blue-text ml-1">
                    로그인하기
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

export default Register;