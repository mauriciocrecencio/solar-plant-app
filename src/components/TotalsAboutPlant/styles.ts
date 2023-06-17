import styled from 'styled-components/native';
import { Colors } from '../../constants';

export const Container = styled.View`
  border-radius: 4px;
  margin: 24px 16px 0 16px;
  background: ${Colors.chartBackground};
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  padding-top: 8px;
`;
