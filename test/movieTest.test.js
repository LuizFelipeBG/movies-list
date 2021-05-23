import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import FilterMovie from '../src/container/filterMovie';

describe("Filter Movie tests", () => {
  const { getByPlaceholderText, getByText } = render(<FilterMovie/>);
  const onEventMock = jest.fn();

  test('Verify placeholder itens', () => {
    fireEvent(getByPlaceholderText('Filtrar filme por nome'));
    fireEvent(getByPlaceholderText('Filtrar por ano'));
  })

  test('Verify button exist', () => {
    fireEvent(getByText("Filtrar"))
  })

  test('Change name input text for filter', () => {
    fireEvent(getByPlaceholderText('Filtrar filme por nome'), 'onChangeText', 'word war z');
    expect(onEventMock).toHaveBeenCalledWith('word war z');
  })

  test('Change year input text for filter', () => {
    fireEvent(getByPlaceholderText('Filtrar filme por ano'), 'onChangeText', '2019');
    expect(onEventMock).toHaveBeenCalledWith('2019');
  })

  test('Press Button for filter', () => {
    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalled(); 
  })
})