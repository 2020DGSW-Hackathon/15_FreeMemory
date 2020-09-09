const models = require('../../../models');

module.exports = async (req, res) => {
  const { body } = req;
  console.log(body);

  try {
    await models.Schedule.create({
      name: body.name,
      startDate: body.startDate,
      endDate: body.endDate,
      target: body.target,
      type: body.type
    });

    return res.status(200).json({
      status: 200,
      message: '일정 생성 성공',
    });
  } catch (err) {
    console.log('일정 생성 오류', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류',
    });
  }
}