const models = require('../../../models');

module.exports = async (req, res) => {
  const { idx } = req.params;

  try {
    const schedule = await models.Schedule.getSchedule(idx);
    if (!schedule) {
      console.log('일정 존재하지 않음');

      res.status(404).json({
        status: 404,
        messgae: '일정이 존재하지 않습니다'
      })
    }
    await models.Schedule.deleteSchedule(idx);
    res.status(200).json({
      status: 200,
      messgae: '일정 삭제 성공'
    })
  } catch (err) {
    console.log(err);
  }
}