import { create } from 'zustand';
import { Periods } from '../constants';

interface PeriodSelectedStore {
  selectedPeriod: Periods;
  setSelectedPeriod: (p: Periods) => void;
}

export const usePeriodSelectedStore = create<PeriodSelectedStore>((set) => ({
  selectedPeriod: Periods.hourly,
  setSelectedPeriod: (period) => set(() => ({ selectedPeriod: period }))
}));
