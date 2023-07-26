import subDays from 'date-fns/subDays';

const _30DaysAgo = subDays(new Date(), 30);

const getPath30DaysAgo = () => {
  return `${_30DaysAgo.getFullYear()}/${
    _30DaysAgo.getMonth() + 1
  }/dias/${_30DaysAgo.getDay()}`;
};

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const indicators = [
  {
    key: 'Dólar',
    value: 'Dólar Observado',
    path: `dolar/posteriores/${getPath30DaysAgo()}`,
    root: 'Dolares',
    unit: 'Pesos',
    dataCount: 10,
  },
  {
    key: 'Euro',
    value: 'Euro',
    path: `euro/posteriores/${getPath30DaysAgo()}`,
    root: 'Euros',
    unit: 'Pesos',
    dataCount: 10,
  },
  {
    key: 'IPC',
    value: 'Indice de Precios al Consumidor',
    path: `ipc/${getCurrentYear()}`,
    root: 'IPCs',
    unit: 'Porcentaje',
    dataCount: 12,
  },
  {
    key: 'UF',
    value: 'Unidad de Fomento',
    path: `uf/posteriores/${getPath30DaysAgo()}`,
    root: 'UFs',
    unit: 'Pesos',
    dataCount: 10,
  },
  {
    key: 'UTM',
    value: 'Unidad Tributaria Mensual',
    path: `utm/${getCurrentYear()}`,
    root: 'UTMs',
    unit: 'Pesos',
    dataCount: 12,
  },
];
