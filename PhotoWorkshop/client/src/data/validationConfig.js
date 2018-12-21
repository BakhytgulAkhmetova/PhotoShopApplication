export const regFormCustomer = {
    firstName: ['isNotEmpty'],
    lastName: ['isNotEmpty'],
    address:['isNotEmpty'],
    phone: ['isNotEmpty', 'isPhoneNumber'],
    login: ['isNotEmpty', 'isEmail'],
    password: ['isNotEmpty'],
    isDisabled: []
};

export const authForm = {
    login: ['isNotEmpty', 'isEmail'],
    password: ['isNotEmpty'],
    isDisabled: []
};
