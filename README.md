# xelar.tech

portfolio project

## ssh to server

`ssh -i xelar.tech root@147.182.225.30`

## create react app

### local container

- `docker run -v /mnt/code/repos/:/repos --publish 3000:8000 -d -it --rm --user node --name node-app node:16`
- `docker exec -it node-app bash`
- `npx create-react-app robofriends -y`
- `cd roboriends`
- `npm start` to access development server

Install [tachyons](https://tachyons.io/install) a website style framework

- `npm install tachyons`

### Robofriends

- get images from [robohash](https://robohash.org)

### Users

- `https://jsonplaceholder.typicode.com/users`

## install

- `git clone https://github.com/ralexrivero/robofriends.git`
- `npm install`
- `npm start`
