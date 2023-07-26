import {useEffect, useState} from 'react';
import api from '../api/api';
import {ApiResponse} from 'apisauce';
import type {UseIndicatorsResult} from './useIndicators.types';

export const useIndicadors = (
  path: string,
  root: string,
): UseIndicatorsResult => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(path)
      .then((response: ApiResponse<any>) => {
        setData(response.data[root] ? response.data[root].reverse() : []);
      })
      .catch((error: any) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [path, root]);

  return {
    data,
    loading,
  };
};
