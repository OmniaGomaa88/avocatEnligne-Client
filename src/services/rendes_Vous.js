import api from "./api";
const rendezVousService = {

    addRendezVous: async (client_situation, date ,avocatId) => {
        return await api.post(`/addRendezVous/${avocatId}`, {
            client_situation, date, withCredentials:true,
        });
      },
      getClientRedezVous: async () => {
        return await api.get(`/client/RendezVous`)
      },
      getAvocatRedezVous: async () => {
        return await api.get(`/RendezVous`)
      },
};
export default rendezVousService;
