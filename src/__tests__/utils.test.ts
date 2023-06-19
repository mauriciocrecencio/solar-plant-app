import {
  formatDay,
  formatGeneration,
  formatHour,
  formatMonth,
  formatYear
} from '../utils/dataFormatters';

const casesFormatGeneration = [
  [3090.6, '3.091'],
  [401.6, '402'],
  [24820.29, '24.820']
];

const casesFormatHour = [
  ['05:00:00', 5],
  ['13:00:00', 13],
  ['12:00:00', 12],
  ['00:00:00', 0]
];

const casesFormatMonth = [
  ['2022-01-01', 'Jan'],
  ['2022-05-01', 'Maio'],
  ['2022-09-01', 'Set'],
  ['2022-12-01', 'Dez']
];

const casesFormatDay = [
  ['2022-01-01', '1'],
  ['2022-04-21', '21'],
  ['2022-09-30', '30'],
  ['2022-12-01', '1']
];

const casesFormatYear = [
  ['2022-01-01', '2022'],
  ['2023-04-21', '2023'],
  ['2021-09-30', '2021'],
  ['2020-12-01', '2020']
];
describe('Utils Functions', () => {
  it.each(casesFormatGeneration)(
    'given a generation number, when in en-US format, it should return formatted in pt-BR',
    (given, expected) => {
      expect(formatGeneration(given)).toBe(expected);
    }
  );

  it.each(casesFormatHour)(
    'given a time, when in 00:00:00 format, it should return formatted with AM or PM',
    (given, expected) => {
      expect(formatHour(given)).toBe(expected);
    }
  );

  it.each(casesFormatMonth)(
    'given a date, when in yyyy-mm-dd format, it should return the month string',
    (given, expected) => {
      expect(formatMonth(given)).toBe(expected);
    }
  );

  it.each(casesFormatDay)(
    'given a date, when in yyyy-mm-dd format, it should return a day',
    (given, expected) => {
      expect(formatDay(given)).toBe(expected);
    }
  );

  it.each(casesFormatYear)(
    'given a date, when in yyyy-mm-dd format, it should return a year',
    (given, expected) => {
      expect(formatYear(given)).toBe(expected);
    }
  );
});

// export function formatYear(date: string) {
//   return new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date(date));
// }
