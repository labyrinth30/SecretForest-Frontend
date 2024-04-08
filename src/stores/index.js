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

  const resetUserInfo = async () => set({ ...initValues });

  const login = async (email, password) => {
    try {
      // 이메일과 비밀번호를 ":"로 결합하고 Base64로 인코딩
      const encodedCredentials = btoa(`${email}:${password}`);
      const options = {
        path: '/auth/login/email',
        access_token: `Basic ${encodedCredentials}`, // 이제 access_token을 사용하여 인증 정보를 전달
      }
      const result = await postApi(options);
      set(result);
      isRefresh.set(true);
      router.goto('/home');
    } catch (error) {
      router.goto('/home');
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const logout = async () => {
    try {
      const options = {
        path: '/auth/logout',
      }
      // await delApi(options);
      set({ ...initValues });
      isRefresh.set(false);
      router.goto('/home');
    } catch (error) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const register = async (email, password, name, contact) => {
    try {
      const options = {
        path: '/auth/register',
        data: {
          email,
          password,
          name,
          contact,
        },
      }
      await postApi(options);
      alert('회원가입이 완료되었습니다.');
      router.goto('/home');
    } catch (error) {
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return {
    subscribe,
    refresh,
    resetUserInfo,
    login,
    logout,
    register,
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