"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProcessingController_1 = __importDefault(require("../controllers/imageProcessingController"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.send('Home Route');
});
router.use('/image-processing', imageProcessingController_1.default);
exports.default = router;
