import React from 'react';
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

test('render contact form without errors', () => {
    render(<ContactForm />)
})



test('user can fill out and submit form', () => {

    render(<ContactForm />)

    //match for input fields
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

})

//Test first name field exists and can enter text
//Test last name field exists and can enter text
//Test email field exists and can enter text
//Test message field exists and can enter text

//Test that cannot submit if value first name, last name, email not filled

//Test can submit if message blank and remaining fields are full

//Test cannot submit if enter in an incorreclty formatted email
