import React from "react";
import './home.scss'
import {TopContent} from "../../components/topContent/TopContent.jsx";
import {SideBar} from "../../components/sidebar/Sidebar.jsx";
import {BasicContent} from "../../components/basic-content/BasicContent.jsx"
import {Footer} from "../../components/footer/Footer.jsx"
export const Home = () => {

    return (
        <div className={'section'}>
                <div className="horizontal-section">
                    <SideBar/>
                    <TopContent/>
                </div>
                <BasicContent/>
            <Footer/>
        </div>
    )
}
