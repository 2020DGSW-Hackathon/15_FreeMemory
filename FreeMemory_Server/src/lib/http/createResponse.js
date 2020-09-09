module.exports = (res, status, message, data)=>{
  if(data===null){
    res.status(status).json({
      status,
      message,
    });
  } else{
    res.status(status).json({
      status,
      message,
      data,
    });
  }
};