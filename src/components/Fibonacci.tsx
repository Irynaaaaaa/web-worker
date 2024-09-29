import React, { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';

const Fibonacci = () => {
  const [num, setNum] = useState(40);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [worker, setWorker] = useState<Worker | null>(null);

  const numRef = useRef<number | null>(null);

  const calculateFibonacci = () => {
    setLoading(true);
    if (worker) {
      worker.postMessage(num);
    }
  };

  useEffect(() => {
    const workerInstance = new Worker(new URL('./worker.ts', import.meta.url), {
      type: 'module',
    });

    workerInstance.onmessage = function (event) {
      setResult(event.data);
      numRef.current = num;
      setLoading(false);
    };
    setWorker(workerInstance);

    return () => {
      workerInstance.terminate();
    };
  }, []);

  return (
    <div>
      <h1>Fibonacci Calculator</h1>
      <div className="flex-row">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <button onClick={calculateFibonacci} disabled={loading}>
          Calculate
        </button>
        {loading && <Spinner />}
      </div>
      {numRef.current !== null && (
        <p>
          Fibonacci of {numRef.current}: {result}
        </p>
      )}
    </div>
  );
};

export default Fibonacci;
