"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Router = require("router");
var router = Router();
const ipfs = require("../../ipfs/index");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage(),
});
router.post("/uploadfile", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { base64 } = req.body;
    try {
        const data = yield ipfs(base64);
        console.log(data);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Tài khoản đã tồn tại");
    }
}));
module.exports = router;
