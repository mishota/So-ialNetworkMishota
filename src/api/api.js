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
      // return instance.get(`profile/` + userId)
      console.warn('please use profileAPI')
      return profileAPI.getProfile(userId);
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId)
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status: status })//отправляем объект со свойством статус
   }
}

export const AuthAPI = {
   me() {
      return instance.get(`auth/me`)
   },
} 