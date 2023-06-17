import { Periods } from './constants';

export interface PlantDataTotals {
  kwh: number;
  percentage: number;
  trees: number;
  co2: number;
}

export interface PlantData {
  data_type: Periods;
  x_labels: string[];
  generation: number[];
  expected: number[];
  totals: PlantDataTotals;
}
