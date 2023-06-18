import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { formatGeneration, formatMonth } from '../../utils/dataFormatters';
import { usePlantDataStore } from '../../store/usePlantData';

export function MonthlyChart() {
  const plantData = usePlantDataStore((state) => state.plantData);

  const { x_labels, generation, expected } = plantData;
  const data = {
    labels: x_labels,
    datasets: [
      {
        data: generation,
        colors: generation.map(
          (g, i) => () => g < expected[i] ? '#f88b8b' : '#83fb8f'
        )
      }
    ]
  };

  return (
    <BarChart
      fromZero
      data={data}
      width={Dimensions.get('window').width}
      height={320}
      yAxisLabel=""
      yAxisSuffix=" kWh"
      segments={4}
      verticalLabelRotation={270}
      yLabelsOffset={4}
      xLabelsOffset={8}
      withInnerLines={false}
      chartConfig={{
        barPercentage: 0.1,
        backgroundColor: '#fafafa',
        backgroundGradientFrom: '#fafafa',
        backgroundGradientTo: '#fafafa',
        decimalPlaces: 0,
        color: (opacity = 1, index) => '#fafafa',
        labelColor: (opacity = 1) => '#4d4d4d',
        style: {
          borderRadius: 16
        },
        formatYLabel: (generation) => formatGeneration(generation),
        formatXLabel: (month) => formatMonth(month)
      }}
      flatColor
      withCustomBarColorFromData
      style={{
        paddingTop: 24,
        paddingRight: 70,
        borderRadius: 16
      }}
    />
  );
}
