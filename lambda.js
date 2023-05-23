import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import loadData from "./src/pages/terms/loadData.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function lambda(url) {
    return import('./dist/server/entry-server.js').then(({ render }) => {
        // for simplification data here loads everytime, but should be loaded due to URL
        return loadData().then((data) => {
            const appHtml = render(url, data);

            const indexHtml = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');

            return indexHtml.replace(`<!--app-html-->`, appHtml);
        })
    });
}
