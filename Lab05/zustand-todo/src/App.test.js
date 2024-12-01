import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useTodoStore } from './store/useTodoStore';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={useTodoStore}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
