import { Periods } from '../../constants';
import { LineChartComponent } from './LineChartComponent';
import { MonthlyChart } from './MonthlyChart';

const chartByPeriod = {
  hourly: <LineChartComponent />,
  daily: <LineChartComponent />,
  monthly: <MonthlyChart />,
  yearly: <LineChartComponent />
};

export function Chart({ dataType }: { dataType: Periods }) {
  return chartByPeriod[dataType];
}
