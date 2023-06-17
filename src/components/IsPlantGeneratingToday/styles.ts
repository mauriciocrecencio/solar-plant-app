import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const GeneratingLabel = styled.View`
  display: flex;
  background: ${({ isGeneratingToday }) =>
    isGeneratingToday ? Colors.goodEnergyGenerated : Colors.lowEnergyGenerated};
  border-radius: 8px;
  align-items: center;
  padding: 2px 8px;
  margin: 0 4px;
`;

export const LabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
