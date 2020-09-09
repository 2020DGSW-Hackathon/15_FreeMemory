const multer = require('multer');

module.exports = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.filename}-${Date.now()}-${file.originalname}`);
    },
  });
  return multer({storage});
}