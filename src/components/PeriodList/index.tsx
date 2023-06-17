import { ButtonContainer, PeriodContainer } from './styles';
import { Text } from '../Text';
import { Periods, PeriodsShort, periodsArray } from '../../constants';
import { usePeriodSelectedStore } from '../../store/useSelectedPeriod';

export function PeriodList() {
  const { selectedPeriod, setSelectedPeriod } = usePeriodSelectedStore(
    (state) => state
  );

  return (
    <PeriodContainer>
      {periodsArray.map((p) => (
        <ButtonContainer
          onPress={() => setSelectedPeriod(p)}
          key={p}
          isSelected={p === selectedPeriod}
        >
          <Text size={20} weight={600}>
            {PeriodsShort[p]}
          </Text>
        </ButtonContainer>
      ))}
    </PeriodContainer>
  );
}
