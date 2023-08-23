import './footer.scss'
import logo from '../../../public/images/logo.png'
import visa from '../../../public/images/visa.png'
import mastercard from '../../../public/images/mastercard.png'
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="logo">
                    <a href="/home">
                        <img src={logo} alt="" className="logo-img"/>
                    </a>
                </div>
                <a href="/politics">
                    <div className="footer-text">Политика конфиденциальности</div>
                </a>
                <div className="payment-systems">
                    <a href="">
                        <div className="payment">
                            <img className={'payment-icon'} src={visa} alt=""/>
                        </div>
                    </a>
                    <a href="">
                        <div className="payment">
                            <img className={'payment-icon'} src={mastercard} alt=""/>
                        </div>
                    </a>
                </div>
                <a href="https://www.instagram.com/valela.02/" target={"_blank"}>
                    <div className="footer-text">Дизайн Valela02</div>
                </a>
            </div>
        </div>
    )
}
