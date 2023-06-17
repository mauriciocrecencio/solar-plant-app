import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { formatGeneration } from '../../utils';
import { usePlantDataStore } from '../../store/usePlantData';
import { propsForChartsByPeriod } from './propsForChartsByPeriod';

export function LineChartComponent() {
  const plantData = usePlantDataStore((state) => state.plantData)!;
  const { x_labels, generation, expected, totals, data_type } = plantData;
  const propsByPeriod = propsForChartsByPeriod[data_type];

  const data = {
    labels: x_labels,
    datasets: [
      {
        data: generation
      }
    ]
  };

  return (
    <LineChart
      {...propsByPeriod}
      formatYLabel={(generation) => formatGeneration(generation)}
      data={data}
      width={Dimensions.get('window').width}
      height={320}
      yAxisSuffix=" kWh"
      getDotColor={(value, index) => {
        if (!expected[index]) {
          return value < expected[0] ? 'red' : 'green';
        }
        return value < expected[index] ? 'red' : 'green';
      }}
    />
  );
}
