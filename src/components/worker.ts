import { fibonacci } from './utils';

onmessage = function (event) {
  const result = fibonacci(event.data);

  postMessage(result);
};
