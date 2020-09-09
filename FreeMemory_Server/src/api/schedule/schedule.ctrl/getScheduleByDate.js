const models = require('../../../models');

module.exports = async (req, res) => {
  const { date } = req.query;
  console.log(date);
  try {
    let schedules = await models.Schedule.getScheduleByDate(date);
    console.log(schedules);

    return res.status(200).json({
      status: 200,
      message: '요일별 일정 조회 성공',
      data: {
        schedules,
      },
    });
  } catch (err) {
    console.log('요일별 일정 조회 오류', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류',
    })
  }
}