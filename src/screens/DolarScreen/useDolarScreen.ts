import {useEffect, useState} from 'react';
import api from '../../api/api';
import {ApiResponse} from 'apisauce';

export const useDolarScreen = () => {
  const [dolarData, setDolarData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentYear = new Date();
    setLoading(true);
    api
      .get(`/dolar/${currentYear.getFullYear()}`)
      .then((response: ApiResponse<any>) => {
        setDolarData(response.data.Dolares.slice(0, 30));
      })
      .catch((error: any) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    dolarData,
    loading,
  };
};
