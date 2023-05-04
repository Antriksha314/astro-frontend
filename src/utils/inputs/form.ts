export const LoginFormInput = {
    email: {
        name: 'email',
        required: 'Email is required',
        invalid: 'The email address entered is invalid',
        label: 'Email'
    },
    password: {
        name: 'password',
        required: 'Password is required',
        label: 'Your password',
        regex: 'Password must be at least 8 characters'
    },
};
export const RegisterFormInput = {
    firstName: {
        name: 'firstName',
        required: 'First name is required',
        label: 'First Name',
        regex:"Invalid text. Use letters and - ' or spaces"
    },
    lastName: {
        name: 'lastName',
        required: 'Last Name is required',
        label: 'Last Name',
        regex:"Invalid text. Use letters and - ' or spaces"
    },
    email: {
        name: 'email',
        required: 'Email is required',
        invalid: 'The email address entered is invalid',
        label: 'Email'
    },
    password: {
        name: 'password',
        required: 'Password is required',
        label: 'Your password',
        regex: 'Password must be at least 8 characters'
    },
    confirmPassword: {
        name: 'confirmPassword',
        required: 'Confirm password is required',
        label: 'Confirm password',
        match: 'Passwords must match'
    },
};