const models = require('../../models');

module.exports = async (req, res)=>{
  const {id} = req.params;

  try{
    const member = await models.Member.findOne({
      attributes: ['id', 'name', 'email'],
      where: {
        id,
      },
    });

    if(!member){
      console.group('회원 없음.');
      return res.status(404).json({
        status: 404,
        message: '회원이 존재하지 않습니다.',
      });
    }

    return res.status(200).json({
      status: 200,
      message: '조회에 성공하셨습니다.',
      data: {
        member,
      },
    });
  } catch(err){
    console.log('서버 오류.', err);
    return res.status(500).json({
      status: '서버 오류.',
    });
  }
}