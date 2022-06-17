import { StyledDiv, StyledTable, StyledTitle, StyledTd }from "./styles.js";
import Saldo from "../saldo/Saldo";
 
function InfoAccountArea() {
  return (
    <StyledDiv>
        <Saldo />
        <StyledTitle text-align="center">Últimas Transações</StyledTitle>
        <StyledTable>
        <thead>
        <tbody>
          <tr>
            <td>Pix Enviado</td>
            <StyledTd>R$ -95,00</StyledTd>
          </tr>
          <tr>
            <td>Débito</td>
            <StyledTd>R$ -75,00</StyledTd>
          </tr>
          <tr>
            <td>Depósito online   </td>
            <StyledTd>R$ +100,00</StyledTd>
          </tr>
        </tbody>
      </thead>
        </StyledTable>
    </StyledDiv>
  );
}

export default InfoAccountArea;