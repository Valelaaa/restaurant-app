import '../content-item/content-item.scss'
import '../basic-content/basic-content.scss'
import '../contacts/contacts.scss'
import {useEffect} from "react";

export const Contacts = ({reserveMenu}) => {
    useEffect(() => {
        // Инициализация карты здесь
        L.mapquest.key = '7fVMwrkCK2acTGcibTBjuSAgzzVwnN5b'
        let map = L.mapquest.map('map', {
            center: [47.02416, 28.826634],
            layers: L.mapquest.tileLayer('light'),
            zoom: 18
        });
        const marker = L.marker([47.02416, 28.826634]).addTo(map)
        marker.bindPopup('We are Here');
        map.addControl(L.mapquest.control());
    }, []);
    return (
        <div className={"content-item contacts"}>
            <div className="title">
                <p className={"title-text"}>контакты</p>
                <span className="line"></span>
            </div>
            <div className="delivery-container">
                <div className={"delivery-time part"}>
                    <div className="time-grid">
                        <div className="row">
                            <div className="time-info">
                                <div className="time">
                                    <h2>2</h2>
                                    <p className={'minutes'}>мин</p>
                                </div>
                                <div className="region">от Центр</div>
                            </div>
                            <div className="time-info">
                                <div className="time">
                                    <h2>10</h2>
                                    <p className={'minutes'}>мин</p>
                                </div>
                                <div className="region">от Рышкановки</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="time-info">
                                <div className="time">
                                    <h2>20</h2>
                                    <p className={'minutes'}>мин</p>
                                </div>
                                <div className="region">от Чекан</div>
                            </div>
                            <div className="time-info">
                                <div className="time">
                                    <h2>30</h2>
                                    <p className={'minutes'}>мин</p>
                                </div>
                                <div className="region">от Ботаники</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-and-info part">
                    <div className="info">
                        <div className="info-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M9.99984 17.5C8.94729 16.6022 7.97167 15.6179 7.08317 14.5575C5.74984 12.965 4.1665 10.5933 4.1665 8.33333C4.16593 7.17913 4.50776 6.0507 5.14875 5.09085C5.78974 4.131 6.70106 3.38288 7.76739 2.94116C8.83373 2.49944 10.0071 2.38399 11.1391 2.60941C12.2711 2.83482 13.3107 3.39098 14.1265 4.2075C14.6696 4.74821 15.1001 5.39128 15.3931 6.09947C15.686 6.80767 15.8356 7.56694 15.8332 8.33333C15.8332 10.5933 14.2498 12.965 12.9165 14.5575C12.028 15.6179 11.0524 16.6022 9.99984 17.5ZM9.99984 5.83333C9.3368 5.83333 8.70091 6.09672 8.23207 6.56556C7.76323 7.0344 7.49984 7.67029 7.49984 8.33333C7.49984 8.99637 7.76323 9.63226 8.23207 10.1011C8.70091 10.5699 9.3368 10.8333 9.99984 10.8333C10.6629 10.8333 11.2988 10.5699 11.7676 10.1011C12.2364 9.63226 12.4998 8.99637 12.4998 8.33333C12.4998 7.67029 12.2364 7.0344 11.7676 6.56556C11.2988 6.09672 10.6629 5.83333 9.99984 5.83333Z"
                                    fill="#B59571"/>
                            </svg>
                            <p className="info-text">Кишинев, 31 Августа 1989 года, 123
                            </p>
                        </div>
                        <div className="info-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M15.831 16.6668C8.72184 16.6768 3.326 11.2168 3.3335 4.16933C3.3335 3.7085 3.70684 3.3335 4.16684 3.3335H6.36684C6.77934 3.3335 7.13017 3.63683 7.191 4.04516C7.33609 5.02437 7.62094 5.9777 8.03684 6.876L8.12267 7.061C8.18033 7.18549 8.19273 7.3262 8.15774 7.45886C8.12275 7.59152 8.04256 7.7078 7.931 7.78766C7.24934 8.27433 6.98934 9.2535 7.52017 10.0168C8.18849 10.9779 9.02262 11.8124 9.9835 12.481C10.7477 13.011 11.7268 12.751 12.2127 12.0702C12.2924 11.9583 12.4088 11.8778 12.5417 11.8426C12.6745 11.8075 12.8155 11.8199 12.9402 11.8777L13.1243 11.9627C14.0227 12.3793 14.976 12.6643 15.9552 12.8093C16.3635 12.8702 16.6668 13.221 16.6668 13.6343V15.8335C16.6668 15.943 16.6453 16.0514 16.6033 16.1526C16.5614 16.2538 16.4999 16.3457 16.4225 16.423C16.345 16.5004 16.253 16.5618 16.1518 16.6036C16.0506 16.6455 15.9422 16.6669 15.8327 16.6668H15.831Z"
                                    fill="#B59571"/>
                            </svg>
                            <p className="info-text">+373 675-474-54</p>
                        </div>
                        <div className="working-time">
                            <p>Время работы</p>
                            <div className="weekdays">
                                <p>
                                    <span className="weekday">Пн-Пт</span>
                                    <span className="worktime">с 12:00 до 23:00</span>
                                </p>
                            </div>
                            <div className="weekdays">
                                <p>
                                    <span className="weekday">Сб-Вск</span>
                                    <span className="worktime">с 12:00 до 03:00</span>
                                </p>
                            </div>
                        </div>
                        <div className="info-buttons">
                            <div className="button" onClick={reserveMenu}>Бронь столика</div>
                            <div className="button faq">Задать вопрос</div>
                        </div>
                    </div>
                    <div className="map-container">
                        <div className="map" id={"map"}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
