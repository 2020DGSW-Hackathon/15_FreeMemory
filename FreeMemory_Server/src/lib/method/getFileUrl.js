module.exports = (req, fileName) => {
  const {host} = req.headers;
  return `${host}/static/${fileName}`;
};