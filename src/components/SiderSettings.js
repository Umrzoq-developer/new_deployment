import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Layout} from "antd";
import './SidebarSettings.scss'
import Menu from "antd/es/menu";

const {Sider} = Layout;

const SiderSettings = () => {

    const links = [
        {title: 'Общие настройки', path: '/parent'},
        {title: 'Филиалы', path: '/settings/branches'},
        {title: 'Операторы', path: '/settings/operators'},
        {title: 'Дополнительные услуги', path: '/settings/extraServices'},
        {title: 'Статусы', path: '/parent'},
    ]

    return (
        <Sider className='sidebarLinks'>
            <Menu>
                {
                    links.map((link, index) => {
                        return(
                            <Menu.Item key={index}>
                                <NavLink to={link.path} activeClassName="activeLink">
                                    <div>
                                        <span>
                                            {link.title}
                                        </span>
                                    </div>
                                </NavLink>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
};

export default SiderSettings;