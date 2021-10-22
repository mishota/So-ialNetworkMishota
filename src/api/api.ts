import { ProfileType } from './../types/types';
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
   follow(userId: number) {
      return instance.post(`${userId}`)
   },
   unFollow(userId: number) {
      return instance.delete(`${userId}`)
   },
   getProfile(userId: number) {
      // return instance.get(`profile/` + userId)
      console.warn('please use profileAPI')
      return profileAPI.getProfile(userId);
   }
}

export const profileAPI = {
   getProfile(userId: number) {
      return instance.get(`profile/` + userId)
   },
   getStatus(userId: number) {
      return instance.get(`profile/status/` + userId)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status/`, { status: status })//отправляем объект со свойством статус
   },
   savePhoto(photoFile:any) {
      const formData = new FormData();
      formData.append("image", photoFile)
      return instance.put(`profile/photo/`, formData, {
         headers: {
            'Content-Type': "multipart/form-data"
         }
      })
   },
   saveProfile(profile: ProfileType) {
      return instance.put(`profile`, profile);
   }
}

export enum ResultCodeEnum {
   Success = 0,
   Error = 1,
   CaptchaIsRequired = 10,
}
type MeResponseType={
   data: {id: number, email: string, login: string}
   resultCode: ResultCodeEnum
   messages: Array<string>
}
type LoginResponseType={
   data: {userId: number}
   resultCode: ResultCodeEnum
   messages: Array<string>
}
export const AuthAPI = {
   me() {
      return instance.get<MeResponseType>(`auth/me`)
      // .then(res => res.data)
   },
   loginMe(email: string, password: string, rememberMe:boolean = false, captcha: null|string = null ) {
      return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha });
   },
   logout() {
      return instance.delete(`auth/login`); // delete запрос на endpoint auth/login 
   },
}


export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`);
   }
}