import { Colors } from '../../constants';
import { formatDay, formatHour, formatYear } from '../../utils/dataFormatters';

const backgroundProps = {
  backgroundColor: Colors.chartBackground,
  backgroundGradientFrom: Colors.chartBackground,
  backgroundGradientTo: Colors.chartBackground
};

const colors = {
  color: () => Colors.chartBackground2,
  labelColor: () => Colors.chartLabel
};

export const propsForChartsByPeriod = {
  hourly: {
    segments: 8,
    xLabelsOffset: 16,
    verticalLabelRotation: 270,
    withInnerLines: false,
    withOuterLines: false,
    chartConfig: {
      ...backgroundProps,
      ...colors,
      strokeWidth: 1,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: '3'
      }
    },
    formatXLabel: (month: string) => formatHour(month),
    style: {
      paddingTop: 32,
      borderRadius: 16
    }
  },
  daily: {
    segments: 3,
    xLabelsOffset: 3,
    yLabelsOffset: 12,
    verticalLabelRotation: 270,
    horizontalLabelRotation: 270,
    withInnerLines: true,
    withOuterLines: true,
    formatXLabel: (month: string) => formatDay(month),
    bezier: false,
    style: {
      paddingRight: 32,
      paddingTop: 32,
      borderRadius: 16
    },
    chartConfig: {
      ...backgroundProps,
      ...colors,
      strokeWidth: 1,
      propsForBackgroundLines: {
        strokeDasharray: '',
        strokeOpacity: 0.2
      },
      propsForDots: {
        r: '3'
      }
    }
  },
  yearly: {
    segments: 4,
    withInnerLines: false,
    formatXLabel: (year: string) => formatYear(year),
    bezier: true,
    fromZero: true,
    style: {
      paddingTop: 32,
      paddingRight: 100,
      borderRadius: 16
    },
    chartConfig: {
      ...backgroundProps,
      ...colors,
      strokeWidth: 1,
      propsForBackgroundLines: {
        strokeDasharray: '',
        strokeOpacity: 0.2
      },
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: '5'
      }
    }
  }
};
