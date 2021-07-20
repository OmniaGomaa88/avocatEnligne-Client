import api from "./api";
const rendezVousService = {
    addRendezVous: async (client_situation, date, heure ,avocatId,clientId) => {
        return await api.post("addRendezVous", {
            client_situation, date, heure ,avocatId,clientId
        });
      },
};
export default rendezVousService;
