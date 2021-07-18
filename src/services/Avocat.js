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
  getAll: async (ville, Specialite) => {
    return await api.get(`avocats/${ville}/${Specialite}`,);
  },
  getById: async (id) => {
    return await api.get(`/avocat/${id}`,);
  },
};
export default avocatService;
