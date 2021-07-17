import api from "./api";
const avocatService = {
  addNewAvocat: async (
    prenom,
    nom,
    Email,
    Password,
    Telephone,
    Adress,
    Ville,
    Presentation,
    Specialite,
    Honorare,
    image
  ) => {
    return await api.post("signup", {
      prenom,
      nom,
      Email,
      Password,
      Telephone,
      Adress,
      Ville,
      Presentation,
      Specialite,
      Honorare,
      image,
    });
  },
  Login: async (email, password) => {
    return await api.post("sigin", {
      email,
      password,
    });
  },
};
export default avocatService;
