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
};
export default avocatService;
