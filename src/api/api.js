import axios from "axios";




const instance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "c41f8ab0-ce0f-434c-98ce-6c7922a87f66",
   }
});


export const UserApi = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => { return response.data });
   },
   follow(userId) {
      return instance.post(`${userId}`)
   },
   unFollow(userId) {
      return instance.delete(`${userId}`)
   },
   getProfile(userId) {
      return instance.get(`profile/` + userId)
   }
}

export const AuthAPI = {
   me() {
      return instance.get(`auth/me`)
   },
} 