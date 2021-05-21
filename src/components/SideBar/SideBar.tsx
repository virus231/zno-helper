import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { useSelector,useDispatch } from 'react-redux'
import { FaList, FaRegHeart, FaUserFriends } from "react-icons/fa";
import {FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiSettings} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import {BiCog, BiHomeAlt} from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.scss";
import { Link } from 'react-router-dom';
import {AiOutlineUserAdd, MdExitToApp} from "react-icons/all";
import { authSelector } from "../../store/selectors";
import {useHistory} from 'react-router' 
import { logoutUser } from "../../store/reducers/auth.reducer";
import { showAlert } from "../../store/actions/alerts.actions";


export default function SideBar():JSX.Element {
    const [menuCollapse, setMenuCollapse] = useState(false)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const history = useHistory()
    const dispatch = useDispatch()
    const {username} = useSelector(authSelector)

    const logOut = () => {
        dispatch(logoutUser())
        history.push('/login')
        dispatch(showAlert({text: 'Вихід з системи', type: 'success'}))
    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/*<p>{menuCollapse ? "Logo" : "Big Logo"}</p>*/}
                        </div>
                        <div className="profile-block text-center mt-5">
                            {menuCollapse ? (
                                <div></div>
                            ) : (
                                <>
                                    <img className="profile-block__img mt-5" src="https://source.unsplash.com/user/erondu/110x110" alt="Logo"/>
                                    <h6 className="profile-block__name mt-2">{username}</h6>
                                    <p className="profile-block__period">Пробний період</p>
                                </>
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<BiHomeAlt />}>
                                <Link to='/home'>
                                    Предмети
                                </Link>
                            </MenuItem>
                            <MenuItem icon={<FaUserFriends />}>
                                <Link to="/duel-start">
                                    Дуель
                                </Link>
                            </MenuItem>
                            <MenuItem icon={<FiSettings />}>
                                <Link to="/home">
                                    Налаштування
                                </Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    {/*<div className="closemenu" onClick={menuIconClick}>*/}
                        {/* changing menu collapse icon on click */}
                        {/*{menuCollapse ? (*/}
                        {/*    <FiArrowRightCircle/>*/}
                        {/*) : (*/}
                        {/*    <FiArrowLeftCircle/>*/}
                        {/*)}*/}
                    {/*</div>*/}
                    <p className="close-sidebar" onClick={menuIconClick}>
                        {
                            menuCollapse ? (
                                <svg className="mr-3" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.63412 14.1758C6.48472 14.1763 6.33711 14.1433 6.20213 14.0793C6.06716 14.0153 5.94824 13.9218 5.85412 13.8058L1.02412 7.80581C0.877037 7.62688 0.796631 7.40244 0.796631 7.17081C0.796631 6.93919 0.877037 6.71475 1.02412 6.53581L6.02412 0.535813C6.19386 0.331596 6.43777 0.203172 6.70219 0.178792C6.96662 0.154412 7.2299 0.236074 7.43412 0.405813C7.63834 0.575551 7.76676 0.819463 7.79114 1.08389C7.81552 1.34832 7.73386 1.6116 7.56412 1.81581L3.09412 7.17581L7.41412 12.5358C7.5364 12.6826 7.61408 12.8613 7.63796 13.0509C7.66184 13.2404 7.63092 13.4329 7.54886 13.6054C7.46681 13.7779 7.33705 13.9233 7.17494 14.0244C7.01283 14.1255 6.82515 14.178 6.63412 14.1758Z" fill="#DDDDDD"/>
                                </svg>
                            ) : (
                                <>
                                    <svg className="mr-3" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.63412 14.1758C6.48472 14.1763 6.33711 14.1433 6.20213 14.0793C6.06716 14.0153 5.94824 13.9218 5.85412 13.8058L1.02412 7.80581C0.877037 7.62688 0.796631 7.40244 0.796631 7.17081C0.796631 6.93919 0.877037 6.71475 1.02412 6.53581L6.02412 0.535813C6.19386 0.331596 6.43777 0.203172 6.70219 0.178792C6.96662 0.154412 7.2299 0.236074 7.43412 0.405813C7.63834 0.575551 7.76676 0.819463 7.79114 1.08389C7.81552 1.34832 7.73386 1.6116 7.56412 1.81581L3.09412 7.17581L7.41412 12.5358C7.5364 12.6826 7.61408 12.8613 7.63796 13.0509C7.66184 13.2404 7.63092 13.4329 7.54886 13.6054C7.46681 13.7779 7.33705 13.9233 7.17494 14.0244C7.01283 14.1255 6.82515 14.178 6.63412 14.1758Z" fill="#DDDDDD"/>
                                    </svg>
                                    Згорнути
                                </>
                            )
                        }
                    </p>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />} >
                                <p onClick={logOut}>Вийти</p>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>


    );
}
