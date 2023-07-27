import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import type {APIValue} from '../hooks/useIndicators.types';
import {LineChart} from 'react-native-chart-kit';

interface GraphProps {
  data: Array<APIValue>;
  dataCount: number;
}

export const Graph = (props: GraphProps) => {
  const {data, dataCount} = props;

  if (!data || data.length === 0) {
    return <ActivityIndicator />;
  }

  const graphData = data.slice(0, dataCount);

  return (
    <LineChart
      data={{
        labels: graphData.map((value: APIValue) => value.Fecha),
        datasets: [
          {
            data: graphData.map((value: APIValue) => parseFloat(value.Valor)),
          },
        ],
      }}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel="$"
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
      }}
      bezier
    />
  );
};
