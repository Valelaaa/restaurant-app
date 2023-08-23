import './reserve.scss'
import logo from '../../../public/images/logo.png'
import close from '../../../public/images/close.png'
export const Reserve = ({menuStatus,updateMenu}) => {
    return (
        <div className={menuStatus}>
            <div className="reserve-container">
                <div className="reserve-container-center">
                    <div className="close" onClick={updateMenu}>
                        <img src={close} alt="close-reservation" className={"close-icon"}/>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="home page" className={"logo-icon"}/>
                    </div>
                    <h1>Забронировать столик</h1>
                    <form className="inputs">
                        <input className={"input"} type="text" id={"name"} placeholder={"Имя"}/>
                        <input className={"input"} type="tel" id={"number"} placeholder={"Номер телефона"}/>
                        <div className="input-row">
                            <input className={"input"} type="text" id={"count"} placeholder={"Гостей"}/>
                            <input className={"input"} type="text" id={"time"} placeholder={"Время"}/>
                        </div>
                        <div className="button-container">
                            <div className="button">
                                Забронировать
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
