import { Text } from '../Text';
import {
  Button,
  Container,
  ErrorMessageContainer,
  SvgContainer
} from './styles';
import RainingSvg from './RainingSvg';

export default function UnavailableData({ refetch }) {
  return (
    <Container>
      <ErrorMessageContainer>
        <Text size={20} weight={500}>
          Ocorreu um erro 😪
        </Text>
        <Text size={20} weight={500}>
          ao tentar buscar os dados
        </Text>
      </ErrorMessageContainer>
      <SvgContainer>
        <RainingSvg height="100%" width="100%" viewBox="0 0 1080 824" />
      </SvgContainer>

      <Button onPress={() => refetch()}>
        <Text size={24} weight={500}>
          Recarregar
        </Text>
      </Button>
    </Container>
  );
}
