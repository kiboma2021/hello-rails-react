import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Home = () => {
  const [data, getData] = React.useState([]);
  const url = 'http://127.0.0.1:3000/random_greeting';
  React.useEffect(() => {
    async function fetchGreeting() {
      const response = await fetch(url);
      const result = await response.json();
      getData(result);
    }
    fetchGreeting();
  }, [url]);

  return (
    <div>
      <h2>{data.message}</h2>

    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(<Home />, document.getElementById('root')));

export default Home;
