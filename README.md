**Quick run**
1. `npm install`
2. `npm run build`
3. `npm run serve-lambda`

**Description**<br>
When you're running command `npm run build`, it runs 'vite' 
to bundle all files as a React SSR project. 
It build server and client part. 
Client part includes static parts of app (html, css, etc.) and hydration script.
Server part includes script, that allows to render application on as a part of
server side rendering.

`npm run serve-lambda` runs little express server *just to simulate* 
workflow of AWS Lambda. It runs simplified lambda function, that receives
url and returns html string, that has to be returned to browser.

`lambda-server.js` - super simplified simulation of AWS Lambda mechanism.

`labmda.js` - lambda function, that is fired by `lambda-server.js` and returns html string, ready to be shown in browser.

**More technical details**<br>
There are two routes (`/` to show static information with styles, `/dynamic` to show dynamic info to simulate workflow of receiving data from API).

Data loading mechanism now implemented as a separate global store, which is built via React.Context. Data is filled according to url, that users goes to.
Mor details you can find as a comments via application.  
Please, pay attention to the problem, that is described in `pages/dynamic/Dynamic.tsx`.
