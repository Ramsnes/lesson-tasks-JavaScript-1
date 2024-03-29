const reusableFn = (className, innervalue) => {
  return `<div class="${className}">Inner value: ${innervalue}</div>`;
};
reusableFn("reusableClass", "reusableValue");
