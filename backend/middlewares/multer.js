import multer from "multer";
const storage = multer.diskStorage({
  filename: (req, file, cob) => {
    cob(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
export default upload;
