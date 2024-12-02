import {create} from 'zustand';

export const useDataUserStore = create((set) => ({
  userName: "",
  userId: null,
  userToken: null, 
  userEmail: null,
  userRole: null,
  userBirthDay: null,
  userPhone: null,
  userSex: null,
  userdisability: false,

  setUserName:(name) => {
    set((state) => ({userName: name}))
  },
  setUserEmail:(email) => {
    set((state) => ({userEmail: email}))
  },
  setUserRole:(role) => {
    set((state) => ({userRole: role}))
  },
  setUserId:(id) => {
    set((state) => ({userId: id}))
  },
  setUserToken:(token) => {
    set((state) => ({userToken: token}))
  },
  setUserBirthDay:(birthDay) => {
    set((state) => ({userBirthDay: birthDay}))
  },
  setUserPhone:(phone) => {
    set((state) => ({userPhone: phone}))
  },
  setUserSex: (sex) => {
    set((state) => ({userSex:sex}))
  },
  setUserDisability: (disability) => {
    set((state) => ({userdisability:disability}))
  },
  resetUser:() => {
    set((state) => ({userName: "", userId: null, userToken: null, userEmail: null, userPassword: null, userRole: null}))
  }
}));