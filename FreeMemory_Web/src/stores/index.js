import AuthStore from './AuthStore';
import ScheduleStore from './ScheduleStore';

const stores = {
  AuthStore: new AuthStore(),
  ScheduleStore: new ScheduleStore(),
};

export default stores;
