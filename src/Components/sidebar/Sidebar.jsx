import "./sidebar.scss"
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
        
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Admin</span>
            </Link>
        </div>
        
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li id="main">
                    <Link to="/" style={{textDecoration:"none"}}>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                    </Link>
                </li>

                <p className="title">Lists</p>

                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PersonIcon className="icon" />
                    <span id='user'>Users</span>
                </li>
                </Link>
                 
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <Inventory2Icon className="icon" />
                    <span>Products</span>
                </li>
                </Link>

                <li>
                    <PaymentIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>

                <p className="title">Useful</p>
                <li>
                    <QueryStatsIcon className="icon" />
                    <span>Stats</span>
                </li>

                
                <li>
                     <NotificationsActiveIcon className="icon" />
                    <span>Notifications</span>
                </li>

                <p className="title">Service</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                     <SettingsSuggestOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>

                <p className="title">User</p>
                <li>
                     <PermIdentityOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                     <LogoutIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar