import { usePlantDataStore } from '../../store/usePlantData';
import { Text } from '../Text';
import TotalSection from './TotalSection';
import { Container } from './styles';

export default function TotalsAboutPlant() {
  const { totals } = usePlantDataStore((state) => state.plantData)!;
  return (
    <Container>
      <Text size={18} weight={700}>
        Informações do período
      </Text>
      {Object.entries(totals).map((t) => (
        <TotalSection key={t[1]} label={t[0]} total={t[1]} />
      ))}
    </Container>
  );
}
