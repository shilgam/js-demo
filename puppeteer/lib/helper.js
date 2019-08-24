export const sayHello = name => `Hello, ${name}!`;

export function delay(time) {
  return new Promise(((resolve) => {
    setTimeout(resolve, time);
  }));
}
