"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var app = (0, express_1.default)();
var port = 3000;
var limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests from this API, try again after 15 minutes',
});
// Apply the rate limiting middleware to all requests
app.use(limiter);
app.use((0, morgan_1.default)('dev'));
//define a route handler for the default home page
app.get('/api', function (req, res) {
    res.send('server working');
});
//starting the express server
app.listen(port, function () {
    console.log("server has started at http://localhost:".concat(port));
});
exports.default = app;
