import { create } from 'zustand';
import { Periods } from './constants';
import { PlantData } from './interfaces';

interface PeriodSelectedStore {
  selectedPeriod: Periods;
  setSelectedPeriod: (p: Periods) => void;
}

export const usePeriodSelectedStore = create<PeriodSelectedStore>((set) => ({
  selectedPeriod: Periods.daily,
  setSelectedPeriod: (period) => set(() => ({ selectedPeriod: period }))
}));
