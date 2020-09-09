import { observable, action } from "mobx";
import { autobind } from "core-decorators";

import ScheduleRepository from './ScheduleRepository';

@autobind
class ScheduleStore {

  @action
  handleScheduleByDate(startDate) {
    try {
      const response = ScheduleRepository.handleScheduleByDate(startDate);
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

export default ScheduleStore;