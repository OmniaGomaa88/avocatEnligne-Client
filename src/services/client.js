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
  Login: async (email, password) => {
    return await api.post("client/Login", {
      email,
      password,
    });
  },
  getrUserData: async () => {
    return await api.get(`/client`)
  },
 annulerRendezVous: async (rendezVousId) => {
    return await api.post(`/client/Annule`,{
      rendezVousId
    })
  },
};
export default clientService;
