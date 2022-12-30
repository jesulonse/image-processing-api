import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import routes from './routes/index';

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Too many requests from this API, try again after 15 minutes',
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.use(morgan('dev'));

//define a route handler for the default home page
app.get('/api', (req, res) => {
  res.send('server working');
});

//starting the express server
app.listen(port, () => {
  console.log(`server has started at http://localhost:${port}`);
});

export default app;
