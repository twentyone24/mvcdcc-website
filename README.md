
# MVCDC - School Project frontend

This project was initially created with `ReactJs` but for static build and simple routing it was migrated to `NextJs`

Therefore this project uses mostly plain reactjs and uses plain css for styling

`pages` folder include all the pages and `components` folder include all the components of pages.

## Basic Commands for NextJs

```bash
npm install	# Install all dependencies

npm run dev	# Start Development server

npm run export	# Export static build

npm run start	# Run build on server port 3000
```

## Pages

`pages` folder includes all the pages and thier child components are in `components` folder

`_app.js` file includes the template for all the pages (i.e Navbar <Page> Footer ).

else other files in `pages` folder are pages routes files.

Currently `styles/globals.css` includes all css

## Data

`data/weeklyreports.js` includes data of Weekly-Reports for News and Events page

`data/menus.js` includes data related to navigation links

## Config

`config` folder include `urls` for pages, menus, links and buttons in `config/urls.config.js` file.

## Components

`components` folder include all the components of pages.

few components received/passes nested child components props.

Mostly re-useable code is converted into small components and if there should components with some more changes then it is converted into more components. 

for example: 
`components/Sections/ColorSection.jsx` file include the Section With Colored Background with default padding, border, and small container which is mainly used for **Home Page** only.

so `components/Sections/LargeContainerNoFlexColorSection.jsx` is create on top of `ColorSection` with large container and without default flex property. It also passes all the props to `ColorSection` so that if one section is changed then every container/section should change.


# NextJs Basics

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
