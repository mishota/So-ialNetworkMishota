export const required = (value) => (value ? undefined : "Field is required");

// export const minValue = (min) => (value) =>
//    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const maxValue = (max) => (value) =>
   value <= max ? undefined : `Should be smaller than ${max}`;

export const composeValidators = (...validators) => (value) =>
   validators.reduce((error, validator) => error || validator(value), undefined);