import React from 'react';
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

// test('render contact form without errors', () => {
//     render(<ContactForm />)
// })



test('user can fill out and submit form', () => {
        
    act(() => { render(<ContactForm />)
    //match for input fields
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const button = screen.getByText(/submit/i)

    //fill out form
    userEvent.type(firstNameInput, 'Pete')
    userEvent.type(lastNameInput, 'VS')
    userEvent.type(emailInput, 'test@email.com')
    userEvent.type(messageInput, 'this is an message')


    //click the button
    
    userEvent.click(button) 

    })

    //Asset new pre is on page

    expect(screen.findByRole('pre'))
})

test('form submits if message empty but the rest is filled', () => {
        
    act(() => { render(<ContactForm />)
    //match for input fields
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const button = screen.getByText(/submit/i)

    //fill out form
    userEvent.type(firstNameInput, 'Pete')
    userEvent.type(lastNameInput, 'VS')
    userEvent.type(emailInput, 'test@email.com')


    //click the button
    
    userEvent.click(button) 

    })

    //Asset new pre is on page

    expect(screen.findByText(/pete/i))
})


test('form does not submit if not complete', () => {
        
    act(() => { render(<ContactForm />)
    //match for input fields
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const button = screen.getByText(/submit/i)

    //fill out form
    userEvent.type(lastNameInput, 'VS')
    userEvent.type(emailInput, 'test@email.com')
    userEvent.type(messageInput, 'this is an message')


    //click the button
    
    userEvent.click(button) 

    })

    //Asset new pre is on page

    expect(screen.queryByRole('pre')).not.toBeInTheDocument()
})


test('error message if first name is less than three', () => {
        
    act(() => { render(<ContactForm />)
    //match for input fields
    const firstNameInput = screen.getByLabelText(/first name/i)

    //fill out form
    userEvent.type(firstNameInput, 'pet')

    //click the button
    
    // userEvent.click(button) 

    })

    //Asset new pre is on page

    expect(screen.queryAllByText(/error/i))
})



//Test first name field exists and can enter text
//Test last name field exists and can enter text
//Test email field exists and can enter text
//Test message field exists and can enter text

//Test that cannot submit if value first name, last name, email not filled

//Test can submit if message blank and remaining fields are full

//Test cannot submit if enter in an incorreclty formatted email
