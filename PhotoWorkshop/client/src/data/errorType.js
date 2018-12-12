import { regPhoneNumber, regEmail } from '../constants';

export default {
    isNotEmpty: {
        validate: value => {
            return value !== '' && value !== null && value !== undefined;
        },
        instructions: 'The value cannot be empty'
    },
    isPhoneNumber: {
        validate: value => {
            return value.search(regPhoneNumber) !== -1;
        },
        instructions: 'The value can only be a valid phone number'
    },
    isEmail: {
        validate: value => {
            return regEmail.test(value);
        },
        instructions: 'Invalid Email. Please try again (ex. email2090@mail.ru)'
    }
};
