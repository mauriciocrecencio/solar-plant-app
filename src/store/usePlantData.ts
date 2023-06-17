import { create } from 'zustand';
import { PlantData } from '../interfaces';
import { Periods } from '../constants';

interface PlantDataStore {
  plantData: PlantData | null;
  setPlantData: (data: PlantData) => void;
  totalKwhDaily: number;
}

export const usePlantDataStore = create<PlantDataStore>((set) => ({
  plantData: null,
  totalKwhDaily: 0,
  setPlantData: (data) =>
    set((state) => ({
      plantData: data,
      totalKwhDaily:
        data.data_type === Periods.hourly
          ? data.totals.kwh
          : state.totalKwhDaily
    }))
}));
