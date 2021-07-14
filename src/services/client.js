import api from "./api";
const clientService = {
  addNewClient: async (
    prenom,
    nom,
    Email,
    Password,
    Telephone,
    Adress,
  ) => {
    return await api.post("client/signup", {
      prenom,
      nom,
      Email,
      Password,
      Telephone,
      Adress,
      
    });
  },
};
export default clientService;
