import { writable, get, derived } from "svelte/store";
import { getApi, patchApi, postApi, delApi } from "../service/api";
import { router } from "tinro";

function setAuth() {
  let initValues = {
    id: '',
    email: '',
    accessToken: '', 
  }
  const { subscribe, set } = writable({ ...initValues });

  const refresh = async () => {
    try {
      const authenticateUser = await postApi({ path: '/auth/token/refresh' });
      set(authenticateUser);
      isRefresh.set(true);
    } catch (error) {
      auth.resetUserInfo();
      isRefresh.set(false);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const authenticateUser = await postApi({ path: '/auth/token/access' });
      updateUserInfo(authenticateUser);
    } catch (error) {
      auth.resetUserInfo();
    }
  }
  const updateUserInfo = (newData) => {
    set({ ...get(auth), ...newData });
  };

  const fetchUserInfo = async () => {
    try {
      const options = {
        path: '/auth/me',
        access_token: `Bearer ${get(auth).accessToken}`, 
      }
      const userInfo = await getApi(options);
      updateUserInfo(userInfo);
    } catch (error) {
      auth.resetUserInfo();
    }
  }

  const resetUserInfo = async () => set({ ...initValues });

  const login = async (email, password) => {
    try {
      const encodedCredentials = btoa(`${email}:${password}`);
      const options = {
        path: '/auth/login/email',
        access_token: `Basic ${encodedCredentials}`, 
      }
      await postApi(options);
      alert('로그인 되었습니다.');
      isRefresh.set(true);
      router.goto('/home');
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };

  const logout = async () => {
    try {
      const options = {
        path: '/auth/logout',
      }
      await postApi(options);
      set({ ...initValues });
      alert('로그아웃 되었습니다.');
      isRefresh.set(false);
      router.goto('/home');
    } catch (error) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const register = async (email, password, name) => {
    try {
      const options = {
        path: '/auth/register/email',
        data: {
          email,
          password,
          name,
        },
      }
      await postApi(options);
      alert('회원가입 되었습니다.');
      router.goto('/home');
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  };


  return {
    subscribe,
    refresh,
    refreshAccessToken,
    fetchUserInfo,
    resetUserInfo,
    login,
    logout,
    register,
    updateUserInfo,
  }
}

function setIsLogin() {
  const checkIsLogin = derived(auth, $auth => $auth.accessToken ? true : false);
  return checkIsLogin;
}


function persist(key, value) {
  const storedValue = localStorage.getItem(key);
  const initialValue = storedValue ? JSON.parse(storedValue) : value;
  const store = writable(initialValue);

  store.subscribe(($value) => {
    localStorage.setItem(key, JSON.stringify($value));
  });

  return store;
}



export const auth = setAuth();
export const isLogin = setIsLogin();
export const isRefresh = writable(false);
export const date = persist('date', new Date().toISOString().slice(0, 10));
export const theme = persist('theme', '0');