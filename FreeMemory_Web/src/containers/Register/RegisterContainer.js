import React, { useState } from "react";
import sha512 from "js-sha512";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';
import Swal from 'sweetalert2'

import Register from "components/Register";

const RegisterContainer = ({ store, history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [grade, setGrade] = useState("");
  const [classroom, setClassroom] = useState("");
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [email, setEmail] = useState("");
  const { handleSignup } = store.AuthStore;
  const requestSignup = e => {
    e.preventDefault();
    const data = {
      id,
      pw,
      name,
      grade,
      classroom,
      studentNumber,
      email
    };
    handleSignup(data)
      .then(response => {
        if (response.status === 200) {
          Swal.fire("성공", "회원가입 성공", "success").then(() => {
            history.push('/signin');
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Register id={id} setId={setId} pw={pw} setPw={setPw} name={name} setName={setName} grade={grade} setGrade={setGrade} classroom={classroom} setClassroom={setClassroom} studentNumber={studentNumber} setStudentNumber={setStudentNumber} email={email} setEmail={setEmail} requestSignup={requestSignup} />
    </>
  );
};
export default inject("store")(observer(RegisterContainer));
