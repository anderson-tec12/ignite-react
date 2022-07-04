import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModalOpen?: () => void;
}

export function Header({
  onOpenNewTransactionModalOpen = () => console.log(""),
}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="DT Money" />
        <button type="button" onClick={onOpenNewTransactionModalOpen}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
