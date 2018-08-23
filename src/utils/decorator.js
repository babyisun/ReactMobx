export const readonly = (target, name, descriptor) => {
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
};

export const log = (target, name, descriptor) => {
  const oldValue = descriptor.value;
  descriptor.value = () => {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
};

export const loading = (target, name, descriptor) => {
  if (!target.loading) target.loading = [];
  target.loading.push(name);
  return descriptor;
};
