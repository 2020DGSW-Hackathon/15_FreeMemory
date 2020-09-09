const models = require('../../../models');

module.exports = async (req, res) => {

  try {
    let schedules = await models.Schedule.findAll({
      raw: true,
    });

    return res.status(200).json({
      status: 200,
      message: '일정 조회 성공',
      data: {
        schedules,
      },
    });
  } catch (err) {
    console.log('일정 조회 오류', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류',
    });
  }
}