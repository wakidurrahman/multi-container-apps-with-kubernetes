import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MainContainer } from '../../components/template/main-container';
import './index.scss';

interface FibonacciProps {
  pageId?: string | undefined;
}

const Fibonacci: React.FC<FibonacciProps> = ({ pageId }) => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState<any>({});
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  // On submit form value
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await axios.post('/api/values', {
        index: inputValue,
      });

      setInputValue('');
      setError('');
    } catch (error) {
      setError('404 (Not Found)');
    }
  };

  const renderSeenIndexes = () =>
    seenIndexes.map(({ number }) => number).join(', ');

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }

    return entries;
  };

  useEffect(() => {
    // Fetch Index from redis
    const fetchIndexes = async () => {
      try {
        const values = await axios.get('/api/values/current');
        if (values) {
          setValues(values.data);
        }
      } catch (error) {
        setError('404 (Not Found)');
      }
    };

    // Fetch Values from postgres
    const fetchValues = async () => {
      try {
        const seenIndexes = await axios.get('/api/values/all');
        if (seenIndexes) {
          setSeenIndexes(seenIndexes.data);
        }
      } catch (error) {
        setError('404 (Not Found)');
      }
    };

    fetchIndexes();
    fetchValues();
  }, [inputValue]);

  return (
    <MainContainer>
      <div className="p-fibonacci" id={pageId}>
        <h2 className="text-base font-semibold leading-7 text-gray-900 text-4xl mt-10">
          Fib Calculator
        </h2>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          The is Fib calculated
        </p>
        <h2 className="p-fibonacci__error mt-10 text-base font-semibold leading-7 text-gray-900">
          {error && error}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="p-fibonacci__label text-sm font-medium leading-6 text-gray-900">
            Enter your index:
          </label>
          <input
            className="ml-4 p-fibonacci__input rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            placeholder='Enter number'
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            type="submit"
            className="ml-4 p-fibonacci__submit rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </form>

        <h3 className="p-fibonacci__indexes mt-10 text-xl">
          Indexes I have seen: 
        </h3>
        <p className='text-base'> {renderSeenIndexes()} </p>

        <h3 className="p-fibonacci__values mt-4 text-xl">
          Calculated Values: 
        </h3>
        <p className='text-base'> {renderValues()} </p>
      </div>
    </MainContainer>
  );
};

export default Fibonacci;
