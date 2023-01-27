export const validateDate = (birthDate) => {
  if (!birthDate) return;
  const [day, month, year] = birthDate?.split("-");

  if (day && month && year) {
    if (parseInt(day) < 1 || parseInt(day) > 31) {
      return false;
    }
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      return false;
    }
    if (parseInt(year) < 1900 || parseInt(year) > 2999) {
      return false;
    }

    return true;
  }
};
