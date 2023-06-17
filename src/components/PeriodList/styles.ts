import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const PeriodContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? Colors.highlightOpacity : 'transparent'};
  border: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? Colors.highlight : 'transparent'};
  border-radius: 6px;
  padding: 4px 8px;
`;
