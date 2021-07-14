import api from "./api";
const specialitService={
getAll:async()=>{
return await api.get("/specialits")
}
}
export default specialitService;