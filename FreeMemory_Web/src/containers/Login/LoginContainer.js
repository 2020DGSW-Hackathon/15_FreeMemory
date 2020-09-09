import React, { useState } from "react";
import sha512 from "js-sha512";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';

import Login from "components/Login";

const LoginContainer = ({ store, history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { handleSignin } = store.AuthStore;
  const requestSignin = e => {
    e.preventDefault();
    const data = {
      id,
      pw
    };
    handleSignin(data)
      .then(response => {
        if (response.status === 200) {
          Swal.fire("성공", "로그인 성공", 'success').then(() => {
            history.push('/');
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Login id={id} setId={setId} pw={pw} setPw={setPw} requestSignin={requestSignin} />
    </>
  );
};
export default inject("store")(observer(LoginContainer));
