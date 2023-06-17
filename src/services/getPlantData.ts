import { QueryFunctionContext, useQuery } from 'react-query';
import { Periods } from '../constants';
import { api } from '../lib/axiosInstance';
import { usePlantDataStore } from '../store/usePlantData';

export const getPlantData = async (ctx: QueryFunctionContext) => {
  const [_, period] = ctx.queryKey;
  const { data } = await api.get(
    `/plant/generation/test-2023?dataType=${period}`
  );

  return data.data;
};

export default function useFetchPlantData(period: Periods) {
  const setPlantData = usePlantDataStore((state) => state.setPlantData);
  return useQuery(['plantData', period], getPlantData, {
    onSuccess: setPlantData
  });
}
