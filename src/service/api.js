import axios from "axios";

// baseURL을 추가하여 요청 시 동적으로 URL을 설정할 수 있게 함
const send = async ({method='', path='', data={}, access_token='', baseURL=''} = {}) => {
  const url = baseURL + path;

  const headers = {
    "Access-Control-Allow-Origin": baseURL,
    "Access-Control-Allow-Credentials": true,
    "content-type": "application/json;charset=UTF-8",
    "accept": "application/json,",
    "SameSite": "None",
    "Authorization": access_token,
  };

  const options = {
    method,
    url,
    headers,
    data,
    withCredentials: true,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch(error) {
    throw error;
  }
};

// 각 API 함수에서 baseURL을 추가하여 전달
const getApi = ({path='', access_token='', baseURL=''} = {}) => {
  return send({method: 'GET', path, access_token, baseURL});
};

const patchApi = ({path='', data={}, access_token='', baseURL=''} = {}) => {
  return send({method: 'PATCH', path, data, access_token, baseURL});
};

const postApi = ({path='', data={}, access_token='', baseURL=''} = {}) => {
  return send({method: 'POST', path, data, access_token, baseURL});
};

const delApi = ({path='', data={}, access_token='', baseURL=''} = {}) => {
  return send({method: 'DELETE', path, data, access_token, baseURL});
};

export {
  getApi,
  patchApi,
  postApi,
  delApi,
};
