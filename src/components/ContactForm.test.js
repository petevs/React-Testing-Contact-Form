import React from 'react';
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

test('render contact form without errors', () => {
    render(<ContactForm />)
})