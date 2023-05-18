import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import lambda from './lambda.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/*
* DESCRIPTION:
* usual express server that simulates AWS lambda.
* passes the URL to 'lambda' function and returns the response from 'lambda'
* to browser
* */

export async function createServer() {
  const resolve = (p) => path.resolve(__dirname, p);

  const app = express();

  app.use((await import('compression')).default());
  app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
          index: false,
      }),
  );

  app.use('*', async (req, res) => {
    try {
      const response = await lambda(req.originalUrl);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(response);
    } catch (e) {
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return app;
}

createServer().then((app) =>
    app.listen(5173, () => {
        console.log('http://localhost:5173');
    }),
);
