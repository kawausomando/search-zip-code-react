import React from 'react';
import {render, screen, RenderResult} from '@testing-library/react';
import TextLabel from './index';

describe('TextLabel', () => {
  let renderResult: RenderResult;

  it('テキストが表示されること', () => {
    renderResult = render(<TextLabel text="dummy"></TextLabel>);

    const labelValue = screen.getAllByTestId('textLabel').at(0)?.innerHTML;
    expect(labelValue === 'dummy');

    renderResult.unmount();
  });
});
