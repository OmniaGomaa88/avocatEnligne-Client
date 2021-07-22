import api from "./api";
const rendezVousService = {

    addRendezVous: async (client_situation, date, heure ,avocatId,clientId) => {
        return await api.post(`/addRendezVous/${avocatId}`, {
            client_situation, date, heure,clientId, withCredentials:true,
        });
      },
};
export default rendezVousService;