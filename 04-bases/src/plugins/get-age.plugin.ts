
const getAge = (birthdate: string) => {
  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}


export {
  getAge,
}
