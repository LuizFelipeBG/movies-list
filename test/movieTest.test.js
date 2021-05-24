import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterMovie from '../src/container/filterMovie';

describe("Filter Movie tests", () => {
  const { getByTestId } = render(<FilterMovie />)
  const famousProgrammerInHistory = 'Ada Lovelace'

  test('Verify if exists input', async () => {
    const inputName = getByTestId('InputFilterName')
    fireEvent.changeText(inputName, famousProgrammerInHistory)
    const inputYear = getByTestId('InputFilterYear')
    fireEvent.changeText(inputYear, famousProgrammerInHistory)    
  })
  
})