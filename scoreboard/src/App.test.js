import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
  console.log(wrapper.debug());
  const element = wrapper.queryByText(/hello/i);
  expect(element).toBeTruthy(); // jest matcher
  expect(element).toBeInTheDocument(); // jest-dom matcher
  expect(element).toBeVisible(); // jest-dom matcher
});
