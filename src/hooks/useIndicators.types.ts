export interface APIValue {
  Fecha: string;
  Valor: string;
}

export interface UseIndicatorsResult {
  data: APIValue[];
  loading: boolean;
}
