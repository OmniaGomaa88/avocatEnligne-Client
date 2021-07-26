export function hasAuthenticated(){
    if (localStorage.getItem('token'))

    {  
        console.log("token true")
        return true;
        

     } 
     return false
}