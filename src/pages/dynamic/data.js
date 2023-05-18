/*
* DESCRIPTION
* this is a part of receiving data mechanism.
* the logic here, it that every page has loader of data (there could be multiple requests).
*
* respectively, component has to know how to work with requested by him data
* */
export default () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ randomValue: Math.random() });
    }, 250);
  })
};
