const isAuthenticated = () => {
    const item = JSON.parse(localStorage.getItem('@user')) || "";
    const { token } = item;
    if (!token){
        return false;
    } else {
        return true;
    }    
}

export default isAuthenticated;