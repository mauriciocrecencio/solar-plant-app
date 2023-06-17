import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const SafeAreaView = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;
  background: #fafafa;
`;

export const WelcomeContainer = styled.View`
  /* flex: 1; */
  padding: 8px 8px 0 14px;
`;

export const ContentContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const FooterContainer = styled.SafeAreaView``;
