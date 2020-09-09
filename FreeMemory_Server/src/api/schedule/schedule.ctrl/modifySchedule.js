const models = require('../../../models');

module.exports = async (req, res) => {
  const { idx } = req.params;
  const { body } = req;

  try {
    const schedule = await models.Schedule.getSchedule(idx);
    if (!schedule) {
      console.log('일정 존재하지 않음');

      res.status(404).json({
        stauts: 404,
        message: '일정이 존재하지 않습니다',
      })
    }
    await models.Schedule.update({
      name: body.name,
      startDate: body.startDate,
      endDate: body.endDate,
      targetGrade: body.targetGrade,
    }, {
      where: {
        idx,
      }
    })
    return res.status(200).json({
      status: 200,
      message: '일정 수정 성공'
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류',
    })
  }
}