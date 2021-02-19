# Technology

1. Typescript
2. React
4. Parcel with HMR

# Development

- Install dependency by `yarn`
- Now you can run:

  - `yarn start` to start development server

## App config

- The file `app.config.js` should defined in root directory - normally it should be added to gitignore and managed separately 

## Share server by LAN

By default dev server is visible on LAN, so you can:

1. check your IP (On Ubuntu `ip route get 8.8.8.8 | awk '{print $NF; exit}'`
   `),
1. run `yarn start`
1. send someone in your LAN, url to `YOUR_IP:3000`


## Styles
Because i have used React material-ui styling is scarse and inline. Further development would render this solution obsolete and would require configuring parcel for CSS/SCSS (for example css modules)

