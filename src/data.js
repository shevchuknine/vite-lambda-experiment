import dynamicDataLoader from './pages/dynamic/data.js';

/*
* DESCRIPTION
* loader of data, that combines routes loaders into one that allows to track current URL that user goes into
* and download data on the server side in lambda function
* */
export default (url) => {
  switch (url) {
    case '/dynamic': {
      return dynamicDataLoader();
    }
    default: {
      return Promise.resolve({});
    }
  }
};
