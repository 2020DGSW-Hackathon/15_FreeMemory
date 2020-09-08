const models = require('../../../models');

module.exports = async (req, res) => {
  const { type } = req.params;

  try {
    let schedules = await models.Schedule.getScheduleByType(type);

    return res.status(200).json({
      status: 200,
      message: '타입별 일정 조회 성공',
      data: {
        schedules,
      },
    });
  } catch (err) {
    console.log('타입별 일정 조회 오류', err);
    return res.status(500).json({
      stauts: 500,
      message: '서버 오류',
    })
  }
}