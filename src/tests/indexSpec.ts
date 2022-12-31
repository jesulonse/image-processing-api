import supertest from 'supertest';
import app from '../index';
import resizeImage from '../utility/imageProcessingFunc';

const request = supertest(app);
describe('Test suite for images processing', () => {
  it('It should resolve if the correct filename, width and height was provided', async () => {
    await expectAsync(resizeImage('fjord', 500, 500)).toBeResolved();
  });
  it('It should reject if the filename is not correct', async () => {
    await expectAsync(resizeImage('nofilename', 500, 500)).toBeRejected();
  });
});

describe('Test suite for images processing API', () => {
  it('It should return a status code: 200 for success in image processing', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('It should return a status code: 200 for successful image resizing', async () => {
    const response = await request.get('/api/image-processing?filename=palmtunnel&width=350&height=500');
    expect(response.status).toBe(200);
  });
  it('It should return a status code: 400 for any missing string in the query of the url', async () => {
    const response = await request.get('/api/image-processing?filename=fjord&height=500');
    expect(response.status).toBe(404);
  });
  it('It should return a status code: 400 for image not found', async () => {
    const response = await request.get('/api/image-processing?filename=invalidName&width420&height=500');
    expect(response.status).toBe(404);
  });
});
