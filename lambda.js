import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dataLoader from './src/data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/*
* DESCRIPTION
* simulation of AWS lambda function (just a little simplified with arguments and return value)
* receives url and passes this to built server part of SSR React application.
* built part is build by vite.
* */

export default function lambda(url) {
    return import('./dist/server/entry-server.js').then(({ render }) => {
        return dataLoader(url).then((store) => {
            const appHtml = render(url, store);
    
            const indexHtml = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
    
            return indexHtml.replace(`<!--app-html-->`, appHtml);
        });
    });
}
