import styles from './header.module.css'
import logo from '../../images/gymLogo.png'
import { GoListUnordered } from "react-icons/go";
import { Fragment, useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';


export default function Header({isButtonVisible = true}) {

    const [isShowingMenu, setIsShowingMenu] = useState(false)
    const nevbarOptions = [
        { name: 'About', path: '/aboutPage' ,isPage : true },
        { name: 'Program', path: '#programsection' , isPage : false},
        { name: 'Training', path: '#trainingSection',isPage : false },
        { name: 'Pricing', path: '#pricingSection' , isPage : false},
    ]

    const nevigate = useNavigate()

    function handleClickJoinUsBtn () {
        nevigate('/register')
    }

    function GetMobileNavOptions () {
        return(
            <div className={styles.menuOption}>

            <div className={styles.closeBtnWrapper}>
                <AiFillCloseCircle 
                    fontSize='25' 
                    onClick={() => setIsShowingMenu(!isShowingMenu)}
                />
            </div>

            <ul className={styles.list}>
                {
                   nevbarOptions.map((option, index) => (
                    <li key={index} className={styles.listItem}>
                       {option.isPage ?  <Link to={option.path} className={styles.link}>
                            {option.name}
                        </Link> :
                        <a href={option.path}>
                            {option.name}
                        </a>}
                    </li>
                ))}
            </ul>
        </div>
        )
    }

    return (
        <Fragment>
            <header className={styles.headerWrapper}>

                <Link to='/'>
                    <picture className={styles.logoWrapper} >
                        <img
                            src={logo}
                            className={styles.logo}
                        >
                        </img>
                    </picture>
                </Link>

                <nav className={styles.navBar}>
                    {nevbarOptions.map((option, index) => (
                        <p key={index} className={styles.navOptions}>
                            <Link to={option.path} className={styles.link}>
                                {option.name}
                            </Link>
                        </p>
                    ))}
                </nav>
               {isButtonVisible && <Button 
                    buttonStyle = {styles.buttonStyle}
                    buttonText = 'Join Us'
                    handleClickButton={handleClickJoinUsBtn}
                />}

                <GoListUnordered
                    className={styles.menu}
                    onClick={() => setIsShowingMenu(!isShowingMenu)}
                />

            </header>

            {/* { isShowingMenu && <GetMobileNavOptions/>  } */}

        </Fragment>

    )
}