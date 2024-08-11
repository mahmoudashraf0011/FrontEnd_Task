import axios from "axios";

const baseURL=axios.create({baseURL:"https://dev.backend-api.goldady.com/user-api"});

export default baseURL ;