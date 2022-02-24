const { expect } = require("@jest/globals")
const { test } = require("picomatch")

describe ('Does my form work', () => {
    
    test('The greeting must be a string', () => {
        expect(greeting).toBeInstanceOf(String)
    })

    test('Type of event can be selected', () => {
        expect(typeOfEvent).toEqual("Birthday")
    })

    test('The submit button works', () => {
        expect(submitButton).toBeTruthy()
    })

    test('Message contains a text input', () => {
        expect(message).toBeInstanceOf(String)
    })
    
})
