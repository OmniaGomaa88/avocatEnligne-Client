import api from "./api";
const rendezVousService = {

    addRendezVous: async (client_situation, date, heure ,avocatId) => {
        return await api.post(`/addRendezVous/${avocatId}`, {
            client_situation, date, heure, withCredentials:true,
        });
      },
};
export default rendezVousService;
