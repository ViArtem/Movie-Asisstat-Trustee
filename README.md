## Movie Planner

A service that can automatically collect data in Google Calendar to analyze free slots (not scheduled time by other tasks).
Having free time data, it offers options for when you can attend a particular movie.

---

### Stacks

The application server uses `Node.js` in combination with the `Nest.js` framework.

`googleapis` used for OAuth authorization and requests to Google Calendar

`mysql2` is used for managing SQL queries to the MySQL database.

`feth` is used for requests to the api

`react` used for customer interaction

---

### Quick start

###### Add all environment variables

Open the `google-calendar` folder in the terminal and enter the following command:

```JS
npm install
```

```JS
npm run start
```

Or

```JS
npm run start:dev
```

Open the `client` folder in the terminal and enter the following command:

```JS
npm install
```

```JS
npm run start
```
