console.log("hello world webpack!!!");

export const print = () => {
  return new Promise((resolve) => {
    resolve(1);
  });
};

export const Vue = () => {
  console.log("Vue...");
  print().then((res) => {
    console.log(res, "print");
  });
};

export default {
  Vue,
};
