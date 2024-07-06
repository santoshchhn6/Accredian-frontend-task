export const relationship_validation = {
  type: "text",
  placeholder: "Relationship e.g. colleague, friend, family",
  validation: {
    required: "Enter Relationship with referee",
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};
export const name_validation = {
  type: "text",
  placeholder: "Full Name",
  validation: {
    required: "Enter your full name",
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const email_validation = {
  type: "email",
  placeholder: "Email",
  validation: {
    required: "Please enter email address",
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const username_validation = {
  name: "username",
  type: "text",
  placeholder: "Username",
  validation: {
    required: "Please enter username",
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const password_validation = {
  id: "password",
  type: "password",
  placeholder: "Password",
  validation: {
    required: "Please enter password",
    minLength: {
      value: 8,
      message: "minimum 8 characters",
    },
  },
};

export const phone_validation = {
  type: "tel",
  placeholder: "Phone Number",
  validation: {
    required: "Please enter your phone number",
    minLength: {
      value: 10,
      message: "Must be at least 10 digits long",
    },
    maxLength: {
      value: 10,
      message: "Must be at most 10 digits long",
    },
  },
};
