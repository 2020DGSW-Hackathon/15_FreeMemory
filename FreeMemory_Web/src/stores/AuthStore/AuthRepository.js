import { SERVER } from "config/config.json";
import axios from "axios";

class AuthRepository {
  async handleSignup(request) {
    try {
      const { data } = await axios.post(`${SERVER}/auth/register`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handleSignin(request) {
    try {
      const { data } = await axios.post(`${SERVER}/auth/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthRepository();