import './basic-content.scss';
import {ContentItem} from "../content-item/ContentItem.jsx";
import {Contacts} from "../contacts/Contacts.jsx";

export const BasicContent = ({reserveMenu}) => {
    let aboutText = <div className={'description-outer'}><p>Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh.
        In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida
        dignissim leo pulvinar sit volutpat nulla vestibulum.</p><p className={"space-between"}>'Morbi pellentesque enim
        massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis
        pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in
        viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa
        dictum. Cras at quis in eu, faucibus feugiat vel. At.</p></div>
    let menuText = <div className={'description-outer'}><p>At faucibus nullam mauris vitae ut non. Augue libero non nibh
        nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus,
        interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae
        quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.</p><p
        className={"space-between"}>Nunc cras cras aliquet blandit faucibus massa sagittis semper.</p></div>
    let deliveryText = <div className={'description-outer'}><p>Phasellus diam, ultrices lobortis integer et. Diam, purus
        vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut
        lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id
        et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et
        suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa.
        Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod
        sapien.</p></div>
    return (
        <div className="container">
            <ul className={'content-list'}>
                <li className="content-item">
                    <ContentItem title={"о ресторане"} bigText={'Food Exxe Relo'} description={aboutText}>
                    </ContentItem>
                </li>
                <li className="content-item">
                    <ContentItem title={"меню"} bigText={"Меню"} description={menuText}>
                        <div className={'menu-container'}>
                            <div className="menu-item">
                                <div className="image-container">
                                    <div className="rectangle">
                                        <img src="../../../public/images/main-image-2.png" alt=""
                                             className="menu-image"/>
                                    </div>
                                </div>
                                <div className={'title'}>
                                    <p className="title-text">основное меню</p>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="image-container">
                                    <div className="rectangle">
                                        <img src="../../../public/images/main-image-1.png" alt=""
                                             className="menu-image"/>
                                    </div>
                                </div>
                                <div className={'title'}>
                                    <p className="title-text">барная карта</p>

                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                    </ContentItem>
                </li>
                <li className="content-item">
                    <ContentItem title={"доставка"} bigText={"Служба доставки"} description={deliveryText}>
                        <div className="buttons">
                                <div className="button content-button">Подробнее</div>
                                <div className="secondary-button content-button">Условия доставки</div>
                        </div>
                    </ContentItem>
                </li>
                <li className="content-item">
                    <Contacts reserveMenu={reserveMenu}/>
                </li>

            </ul>
        </div>
    )
}
