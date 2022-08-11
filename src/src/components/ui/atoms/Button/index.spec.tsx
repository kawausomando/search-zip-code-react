import React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  let renderResult: RenderResult;
  let handleClick: jest.Mock;

  it('ボタンの表示/クリック時動作テスト', () => {
    handleClick = jest.fn();
    renderResult = render(
      <Button text="dummyButton" onClick={handleClick}></Button>,
    );

    const labelElement = screen
      .getAllByTestId('button')
      .at(0) as HTMLLabelElement;
    const labelValue = labelElement.innerText;
    fireEvent.click(labelElement);
    expect(labelValue === 'dummyButton');
    expect(handleClick).toHaveBeenCalledTimes(1);

    renderResult.unmount();
  });
});
