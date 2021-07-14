import api from "./api";
const villeService={
getAll:async()=>{
return await api.get("/vills")
}
}
export default villeService;