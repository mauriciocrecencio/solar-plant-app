export function formatGeneration(generation: string) {
  return new Intl.NumberFormat('pt-BR').format(Math.round(Number(generation)));
}

export function formatHour(hour: string) {
  const parsedHour = parseInt(hour);
  return parsedHour <= 12 ? `${parsedHour}AM` : `${parsedHour}PM`;
}

export function formatMonth(date: string) {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  return months[parseInt(date.split('-')[1]) - 1];
}

export function formatDay(date: string) {
  return String(parseInt(date.split('-')[2]));
}

export function formatYear(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date(date));
}
