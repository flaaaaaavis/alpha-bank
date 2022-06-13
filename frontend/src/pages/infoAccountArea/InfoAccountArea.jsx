import { StyledDiv }from "./styles.js";
import Saldo from "../../components/saldo/Saldo.jsx";
 
function InfoAccountArea() {
  return (
    <StyledDiv>
        <Saldo />
        <h1 text-align="center">Últimas Transações</h1>
        <table>
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
            <td>Depósito online</td>
            <td>R$ +100,00</td>
          </tr>
        </tbody>
      </thead>
        </table>
    </StyledDiv>
  );
}

export default InfoAccountArea;