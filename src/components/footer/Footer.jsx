import './footer.scss'
import logo from '../../../public/images/logo.png'

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
                <a href="https://www.instagram.com/valela.02/" target={"_blank"}>
                    <div className="footer-text">Дизайн Valela02</div>
                </a>
            </div>
        </div>
    )
}
