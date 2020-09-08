const schedule = require('express').Router();
const scheduleCtrl = require('./schedule.ctrl');
const authMiddleware = require('../../middleware/auth');

schedule.get('/', scheduleCtrl.getSchedule);
schedule.post('/', scheduleCtrl.createSchedule);
schedule.put('/:idx', scheduleCtrl.modifySchedule);
schedule.delete('/:idx', scheduleCtrl.deleteSchedule);
schedule.get('/target/:target', scheduleCtrl.getScheduleByTarget);

module.exports = schedule;