import multer from "multer";

// multer sends pdf as buffer

const storage = multer.memoryStorage();
const upload = multer({storage});

export {upload};

