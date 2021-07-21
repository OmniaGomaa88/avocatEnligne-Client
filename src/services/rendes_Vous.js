import api from "./api";
const rendezVousService = {
    addRendezVous: async (client_situation, date, heure ,clientId,avocatId) => {
        return await api.post(`/addRendezVous/${avocatId}`, {
            client_situation, date, heure,clientId
        });
      },
};
export default rendezVousService;
