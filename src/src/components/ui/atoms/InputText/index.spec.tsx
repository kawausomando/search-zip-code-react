import React from 'react';
import {
  render,
  screen,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import InputText from './index';

describe('InputText', () => {
  let renderResult: RenderResult;

  const props: InputTextProps = {
    value: 'dummyValue',
    name: 'dummyName',
    onChange: () => {},
  };

  it('設定値が反映されること', () => {
    renderResult = render(
      <InputText
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />,
    );

    const inputTextElement = screen
      .getAllByTestId('inputText')
      .at(0) as HTMLInputElement;
    const value = inputTextElement.innerHTML;
    expect(value === 'dummyValue');
    renderResult.unmount();
  });

  it('変更した値が反映されていること', () => {
    renderResult = render(
      <InputText value="" name={props.name} onChange={props.onChange} />,
    );

    const inputTextElement = screen
      .getAllByTestId('inputText')
      .at(0) as HTMLInputElement;
    const inputTag = inputTextElement
      .getElementsByTagName('input')
      .namedItem('dummyName') as HTMLInputElement;
    fireEvent.change(inputTag, {target: {value: 'dummyChangedValue'}});
    const changedValue = inputTextElement.innerHTML;
    expect(changedValue === 'dummyChangedValue');

    renderResult.unmount();
  });
});
