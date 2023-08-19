import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    id: null,
    user_email: null,
    user_name: null,
    // password: null,
    access_token: null,
    refresh_token: null,
  },
});