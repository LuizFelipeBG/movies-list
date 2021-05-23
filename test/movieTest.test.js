import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterMovie from '../src/container/filterMovie';

describe("Filter Movie tests", () => {

  test('examples of some things', async () => {
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<FilterMovie />)
    const famousProgrammerInHistory = 'Ada Lovelace'
  
    const inputName = getByTestId('InputFilterName')
    fireEvent.changeText(inputName, famousProgrammerInHistory)

    const inputYear = getByTestId('InputFilterYear')
    fireEvent.changeText(inputYear, famousProgrammerInHistory)    
  
    const button = getByText('filterSubmit')
    fireEvent.press(button)
  })
})