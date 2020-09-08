const models = require('../../models');

module.exports = async (req, res) => {
  const { body } = req;

  try {
    // 이미 존재하는 회원인지 확인
    const member = await models.Member.findOne({
      where: {
        id: body.id,
      },
    });
    console.log(body);
    if (member) {
      console.log('이미 존재하는 회원');
      return res.status(409).json({
        status: 409,
        message: '이미 존재하는 회원입니다.',
      });
    }

    // 회원 생성
    await models.Member.create({
      id: body.id,
      pw: body.pw,
      name: body.name,
      grade: body.grade,
      classroom: body.classroom,
      studentNumber: body.studentNumber,
      email: body.email,
    });

    return res.status(200).json({
      status: 200,
      message: '회원가입에 성공하셨습니다.',
    });
  } catch (err) {
    console.log('서버 오류.', err);
    return res.status(500).json({
      status: 500,
      message: '서버 오류.',
    });
  }
};