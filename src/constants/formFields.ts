interface fieldType {
  label: string,
  errorMessage?: string,
  type?: string,
}

let fieldTypeDefaults = {} as fieldType;
fieldTypeDefaults.type = 'text';

export const loginFormDetails = {
  name: 'loginForm',
  fields: {
    'username': {
      ...fieldTypeDefaults,
      label: 'Username',
      errorMessage: 'Username is required'
    }, 
    'password' : {
      ...fieldTypeDefaults,
      label: 'Password',
      type: 'password',
      errorMessage: 'Password is required'
    }
  }
} 

export const registrationFormDetails = {
  name: 'registrationForm',
  fields: {
    'username': {
      ...fieldTypeDefaults,
      label: 'Username',
      errorMessage: 'Username is required'
    },
    'password': {
      ...fieldTypeDefaults,
      label: 'Password',
      type: 'password',
      errorMessage: 'Password is required'
    }, 
    'firstName': {
      ...fieldTypeDefaults,
      label: 'First Name',
      errorMessage: 'First Name is required'
    },
    'lastName': {
      ...fieldTypeDefaults,
      label: 'Last Name',
      errorMessage: 'Last Name is required'
    },
    'email': {
      ...fieldTypeDefaults,
      label: 'Email',
      type: 'email',
      errorMessage: 'Email is required'
    }
  }
} 