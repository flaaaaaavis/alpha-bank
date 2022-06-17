import { StyledDiv, StyledTable, StyledTitle }from "./styles.js";
import Saldo from "../saldo/Saldo.jsx";
 
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
            <td>R$ -95,00</td>
          </tr>
          <tr>
            <td>Débito</td>
            <td>R$ -75,00</td>
          </tr>
          <tr>
            <td>Depósito online   </td>
            <td>R$ +100,00</td>
          </tr>
        </tbody>
      </thead>
        </StyledTable>
    </StyledDiv>
  );
}

export default InfoAccountArea;