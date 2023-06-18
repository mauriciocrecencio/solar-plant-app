import { Periods } from '../../constants';
import useFetchPlantData from '../../services/getPlantData';
import { usePlantDataStore } from '../../store/usePlantData';
import { Text } from '../Text';
import { Container, GeneratingLabel, LabelContainer } from './styles';

export default function IsPlantGeneratingToday() {
  const totalKwhDaily = usePlantDataStore((state) => state.totalKwhDaily);
  const isGeneratingToday = totalKwhDaily > 0;

  return (
    <Container>
      <LabelContainer>
        <Text weight={600} size={24}>
          Sua usina gerou
        </Text>
        <GeneratingLabel isGeneratingToday={isGeneratingToday}>
          <Text size={24} weight={600}>
            {isGeneratingToday ? `${totalKwhDaily} kWh` : '0 kWh'}
          </Text>
        </GeneratingLabel>
        <Text weight={600} size={24}>
          hoje! {isGeneratingToday ? '⚡️' : '😥'}
        </Text>
      </LabelContainer>
    </Container>
  );
}
