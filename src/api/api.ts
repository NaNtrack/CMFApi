import {create} from 'apisauce';
import {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

const api = create({
  baseURL: 'https://api.sbif.cl/api-sbifv3/recursos_api',
  headers: {
    Accept: 'application/json',
  },
});

api.addRequestTransform((request: AxiosRequestConfig<any>) => {
  request.params['apikey'] = Config.API_KEY;
  request.params['formato'] = 'json';

  return request;
});

export default api;
