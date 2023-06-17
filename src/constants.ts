export enum Periods {
  hourly = 'hourly',
  daily = 'daily',
  monthly = 'monthly',
  yearly = 'yearly'
}

export enum PeriodsShort {
  hourly = '1H',
  daily = '1D',
  monthly = '1M',
  yearly = '1Y'
}

export const Colors = {
  chartBackground: '#f3f3f3',
  chartBackground2: '#a1a1a1',
  chartLabel: '#4d4d4d',
  lowEnergyGenerated: '#f88b8b',
  goodEnergyGenerated: '#83fb8f',
  highlight: '#7F5AF0',
  highlightOpacity: '#DDDDFF'
};

export enum TotalsFormatted {
  co2 = 'CO2 evitado',
  kwh = 'Energia gerada',
  percentage = 'Total gerado',
  trees = 'Árvores salvas'
}

export const periodsArray = Object.values(Periods).filter((v) => isNaN(Number(v)));
