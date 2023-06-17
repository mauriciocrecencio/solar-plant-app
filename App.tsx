import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/lib/queryClient';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf')
  });

  if (!isFontsLoaded) {
    return;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
