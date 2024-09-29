import React, { useRef, useState } from 'react';
import { fibonacci } from './utils';
import Spinner from './Spinner';

const ExpensiveFibonacci = () => {
  const [num, setNum] = useState(40);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const numRef = useRef<number | null>(null);

  const calculateFibonacci = () => {
    setLoading(true);

    setTimeout(() => {
      const res = fibonacci(num);
      numRef.current = num;
      setResult(res);
      setLoading(false);
    }, 100);
  };

  return (
    <div>
      <h1>Expensive Fibonacci Calculator</h1>
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

export default ExpensiveFibonacci;
