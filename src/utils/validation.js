export const isEmailValid = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
export const isPhoneValid = (phone) => /^\d{10}$/.test(phone);
export const isZipValid = (zip) => /^\d{5}$/.test(zip);
