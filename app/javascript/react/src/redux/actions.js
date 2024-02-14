export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = (message) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: { message },
});
