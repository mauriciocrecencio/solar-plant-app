import { PlantDataTotals } from '../../interfaces';
import { Text } from '../Text';
import { TotalContainer, TotalsPlantContainer } from './styles';
import { TotalsFormatted } from '../../constants';

enum Totals {
  co2 = 'co2',
  kwh = 'kwh',
  trees = 'trees',
  percentage = 'percentage'
}

export default function TotalSection({
  label,
  total
}: {
  label: string;
  total: number;
}) {
  function FormatTotal(total) {
    switch (label) {
      case Totals.percentage:
        return `${parseInt(total)} %`;
      case Totals.kwh:
        return `${total.toLocaleString('pt-BR')} kWh`;
      default:
        return total;
    }
  }
  return (
    <TotalContainer>
      <Text>{TotalsFormatted[label]}</Text>
      <Text weight={600}>{FormatTotal(total)}</Text>
    </TotalContainer>
  );
}
