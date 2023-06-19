export function formatGeneration(generation: string | number) {
  return new Intl.NumberFormat('pt-BR').format(Math.round(Number(generation)));
}

export function formatHour(hour: string) {
  return parseInt(hour.split(':')[0]);
}

export function formatMonth(date: string) {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ];
  return months[parseInt(date.split('-')[1]) - 1];
}

export function formatDay(date: string) {
  return String(parseInt(date.split('-')[2]));
}

export function formatYear(date: string) {
  return date.split('-')[0];
}
