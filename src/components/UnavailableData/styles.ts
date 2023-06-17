import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessageContainer = styled.View`
  margin-bottom: 32px;
  align-items: center;
`;

export const SvgContainer = styled.View`
  height: 270px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lowEnergyGenerated};
  margin-top: 80px;
  padding: 10px 16px;
  border-radius: 8px;
`;
