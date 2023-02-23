Auto search filter:
const [userProfiles, setProfiles] = React.useState([]);
  const [filterDatas, setFilterDats] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => {
        setProfiles(json), setFilterDats(json);
      });
  }, []);

  const handleChange = (e) => {
    const state = userProfiles.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterDats(state);
  };
  
  // use filterDatas to the UI layer

//usecallback

import React, { memo, useCallback } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = useCallback(() => {
    setCount(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div>
      count is {count}
      <br />
      <Increment increment={increment} />
    </div>
  );
}

const Increment = memo(({ increment }) => {
  console.log('increment is getting called');
  return <button onClick={increment}>Increment</button>;
});

