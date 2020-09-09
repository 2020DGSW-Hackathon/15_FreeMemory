import { observable, action } from "mobx";
import { autobind } from "core-decorators";

import AuthRepository from './AuthRepository';

@autobind
class AuthStore {
  @action
  handleSignup(data) {
    try {
      const response = AuthRepository.handleSignup(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.log(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  @action
  handleSignin(data) {
    try {
      const response = AuthRepository.handleSignin(data);
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.log(error);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default AuthStore;