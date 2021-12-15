import DecentralizedProtocol from './DecentralizedProtocol';
import { Link as RouterLink, useHistory } from "react-router-dom";
export default function Footer() {
  const history = useHistory()
  return (
<div>
{history.location.pathname!== "/" ? (<DecentralizedProtocol/>):("")}

    <footer>
      <div className="container-fluid">
        <div className="footer-content">
          <div>
            <strong>Powered by:</strong>
            <img src="images/footer-logo-2.png" alt="" />
          </div>
          <div className='footer-bottom-right'>
            {/* <strong>Supporting:</strong> */}
            <img src="images/ETH-logo.png" alt="" /> 
            <img src="images/footer-logo.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
</div>
  );
}
