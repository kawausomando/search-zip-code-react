import React from 'react';
import {render, screen, RenderResult} from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  let renderResult: RenderResult;

  it('テキストが表示されること', () => {
    renderResult = render(<Header text="dummy"></Header>);

    const labelValue = screen.getAllByTestId('header').at(0)?.innerText;
    expect(labelValue === 'dummy');

    renderResult.unmount();
  });
});
