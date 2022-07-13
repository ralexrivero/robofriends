# Robofriends

## create react app

### Run Docker container

- `docker run -v /mnt/code/repos/:/repos --publish 3000:8000 -d -it --rm --user node --name node-app node:16`
- `docker exec -it node-app bash`
- `npx create-react-app robofriends -y`
- `cd roboriends`
- `npm start` to access development server

Install [tachyons](https://tachyons.io/install) a website style framework

- `npm install tachyons`

### update

- `docker exec -it --user root node-app bash`
- `npm install -g npm`
- `npm audit`
- `npm audit fix --force`

### Images

- get images from [robohash](https://robohash.org)

### Users

- `https://jsonplaceholder.typicode.com/users`

## install

- `git clone https://github.com/ralexrivero/robofriends.git`
- `npm install`
- `npm start`

## Build

- `npm run build`
- add `"homepage": "https://ralex.me/robofriends"` to `package.json`
- `npm install --save gh-pages`
- add the folowing to `package.json`

```json
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
```

> using user node

- `npm run deploy`
- Set up _`GitHub Pages`_ to _`gh-pages`_ branch

## Redux

- `npm install redux`
- `npm install react-redux`

## Middleware

- `npm install redux-logger`

## Async

- `npm install redux-thunk`
