## Introduction

 The app is developed using React 18 and TypeScript, with the help of libraries such as Deck.GL, Mapbox, Turf.Js, and Mui 5. The goal of the app is to upload a plot in the form of a geojson file, display it on the map, and draw a building in the center of the plot. The properties of the building, such as floor area, number of floors, and height per floor, can be changed using sliders, and the statistics of the building will be displayed on the right side of the app. The design of the app is flexible, with the use of Mui 5 and CSS.


## Map and Plot Upload:
The Web app includes a map, powered by Mapbox, that allows users to upload plots in the form of geojson files. The process of uploading a plot involves selecting a file from the local file system and clicking a button to upload the file to the app. Once the plot is uploaded, it will be displayed on the map, allowing users to visualize the location and shape of the plot. The process of uploading the plot should be straightforward and intuitive, allowing users to quickly and easily add new plots to the map. The geojson file format provides a standardized way of representing geographic data, ensuring that the data is compatible with the map and other tools used in the app.


## Folder structure 

```typescript

├── public
│   └── index.html
├── src
│   ├── components
│   ├── containers
│   ├── context
│   ├── images
│   ├── pages
│   ├── types
│   └── utils
├── .env
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json

```

- public: contains the index.html file, which is the main HTML file that gets served to the browser.
- src: contains all the source code.
- components: contains presentational components that don't manage state.
- containers: contains stateful components that manage state.
- context: contains any context providers and consumers.
- pages: contains components that represent a complete page.
- types: contains custom TypeScript types.
- utils: contains any utility functions used in the app.
- .env: contains environment variables.

## Installation

Set the REACT_APP_MAPBOX_TOKEN environment variable.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Reference

1- [Deck Gl documentation](https://deck.gl/docs).

2- [Turf JS documentation](https://turfjs.org/).

2- [MUI 5 documentation](https://mui.com/material-ui/).
