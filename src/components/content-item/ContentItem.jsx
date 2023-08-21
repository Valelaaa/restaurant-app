import './content-item.scss'

export const ContentItem = ({title, bigText, description, children}) => {
    return (
        <div className={"content-item"}>
            <div className="title">
                <p className={"title-text"}>{title}</p>
                <span className="line"></span>
            </div>
            <div className="container">
                <div className="base">
                    <div className="horizontal">
                        <div className={"big-text"}>{bigText}</div>
                        <div className={'description'}>{description}</div>
                    </div>
                    <div className="content-container">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}
