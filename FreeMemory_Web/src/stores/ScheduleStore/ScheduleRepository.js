import { SERVER } from "config/config.json";
import axios from "axios";

class ScheduleRepository {

  handleScheduleByDate = async (startDate) => {
    try {
      const { data } = await axios.get(`${SERVER}/schedule/date?date=${startDate}`);
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ScheduleRepository();