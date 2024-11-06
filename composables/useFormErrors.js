// useFormErrors.js
import { reactive } from 'vue';

export function useFormErrors() {
  const errors = reactive({
    email: '',
    password: '',
  });

  const setError = (field, message) => {
    errors[field] = message;
  };

  const clearError = (field) => {
    errors[field] = '';
  };

  const validateEmail = (email) => {
    if (!email) {
      setError('email', 'Please fill out this field.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('email', `Please enter a valid email. '${email}' is missing an '@'.`);
    } else {
      clearError('email');
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setError('password', 'Please fill out this field.');
    } else if (password.length < 6) {
      setError('password', 'Password must be at least 6 characters.');
    } else {
      clearError('password');
    }
  };

  return {
    errors,
    validateEmail,
    validatePassword,
  };
}
