import { SafeAreaView, LoadingContainer } from './styles';
import { Chart } from '../Charts';
import { PeriodList } from '../PeriodList';
import useFetchPlantData from '../../services/getPlantData';
import { usePeriodSelectedStore } from '../../store/useSelectedPeriod';
import TotalsAboutPlant from '../TotalsAboutPlant';
import IsPlantGeneratingToday from '../IsPlantGeneratingToday';
import { ActivityIndicator } from 'react-native';
import UnavailableData from '../UnavailableData';

export function Main() {
  const selectedPeriod = usePeriodSelectedStore(
    (state) => state.selectedPeriod
  );
  const { data, isFetching, isError, refetch } =
    useFetchPlantData(selectedPeriod);

  if (isError) {
    return (
      <SafeAreaView>
        <UnavailableData refetch={refetch} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      {isFetching ? (
        <LoadingContainer>
          <ActivityIndicator size={'large'} />
        </LoadingContainer>
      ) : (
        <>
          <IsPlantGeneratingToday />
          <Chart dataType={data?.data_type} />
          <PeriodList />
          <TotalsAboutPlant />
        </>
      )}
    </SafeAreaView>
  );
}
