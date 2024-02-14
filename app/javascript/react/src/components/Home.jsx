import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingSuccess } from '../redux/actions';
import store from '../redux/store';

const Home = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.home.data);

  useEffect(() => {
    const url = 'http://127.0.0.1:3000/random_greeting';
    async function fetchGreeting() {
      const response = await fetch(url);
      const result = await response.json();
      dispatch(fetchGreetingSuccess(result));
    }
    fetchGreeting();
  }, [dispatch]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => ReactDOM.render( 
  <Provider store={store}>
    <Home />
  </Provider>, document.getElementById('root')));

export default Home;
