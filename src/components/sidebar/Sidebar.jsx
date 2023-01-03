import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';
import { WindowSidebar } from "react-bootstrap-icons";
import { Calendar2Week } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { BoxArrowLeft } from "react-bootstrap-icons";
import Logo from '../../assets/logo1.png'
 
const sidebarNavItems = [
    {
        display: 'Área de trabalho',
        icon: <WindowSidebar size={20}/>,
        to: '/',
        section: ''
    },
    {
        display: 'Agendamento',
        icon: <Calendar2Week size={20}/>,
        to: '/Agendamento',
        section: 'Agendamento'
    },
    {
        display: 'Consultas',
        icon: <Search size={20}/>,
        to: '/Consultas',
        section: 'Consultas'
    },
    
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    /*useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);*/

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={Logo} className="sidebar__logo_ico" alt="" />
            _medApp
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
            <a className="logout" href=""><BoxArrowLeft className="ico-logout" />Sair</a>
        </div>
        
    </div>;
};

export default Sidebar;
