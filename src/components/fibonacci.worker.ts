import { fibonacci } from './utils';

self.onmessage = function (event) {
  const result = fibonacci(event.data);

  self.postMessage(result);
};
