import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import {ReactComponent as OfferIcon} from "../assets/svg/localOfferIcon.svg"
import {ReactComponent as ExploreIcon} from "../assets/svg/exploreIcon.svg"
import {ReactComponent as PersonOutlineIcon} from "../assets/svg/personOutlineIcon.svg"


function Navbar() {
    let navigate = useNavigate();
    let location = useLocation();

    const pathMatchRoute = (route) =>{
        if(route === location.pathname){
            return true
        }
    }


    return (
        <footer className='navbar'>
            <nav className='navbarNav'>
                <ul className='navbarListItems'>
                    <li className='navbarListItem' onClick={() => navigate('/')}>
                        <ExploreIcon fill={pathMatchRoute('/') ? '#FF5733' : '#2c2c2c'} width='36px' height='36px'/>
                        <p className={
                            pathMatchRoute('/')
                            ? 'navbarListItemNameActive'
                            : 'navbadListItemName'
                        }>Explore</p>
                    </li>
                    <li className='navbarListItem' onClick={() => navigate('/offers')}>
                        <OfferIcon fill={pathMatchRoute('/offers') ? '#FF5733' : '#2c2c2c'} width='36px' height='36px'/>
                        <p className={
                            pathMatchRoute('/offers')
                            ? 'navbarListItemNameActive'
                            : 'navbadListItemName'
                        }>Offers</p>
                    </li>
                    <li className='navbarListItem' onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#FF5733' : '#2c2c2c'} width='36px' height='36px'/>
                        <p className={
                            pathMatchRoute('/profile')
                            ? 'navbarListItemNameActive'
                            : 'navbadListItemName'
                        }>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Navbar
