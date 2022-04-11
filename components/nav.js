import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'

const nav = () => {
    const active = (e = null) => {
        let elementActive = document.getElementsByClassName(navStyle.active);
        elementActive[0].classList.remove(navStyle.active)
        if (e == "project") {
            let projectNav = document.getElementById("project")
            projectNav.classList.add(navStyle.active)
        }
        else {
            e.target.classList.add(navStyle.active)
        }
    };

    const dropdownFunction = () => {
        let dorpdownContent = document.getElementsByClassName(navStyle.dorpdown_content);
        dorpdownContent[0].classList.toggle(navStyle.dropdown_toggle);
    }

    return (
        <>
            <nav className={navStyle.global}>
                <div className={navStyle.logo}>
                    <img src='/token.png' />
                    <Link href='/'><h2>Kriterial</h2></Link>
                </div>
                <div className={navStyle.navbar}>
                    <ul className={navStyle.nav_links}>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/35/000000/discord--v1.png" />
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-filled/35/000000/telegram-app.png" />
                        </li>
                        <li>
                            <img src="https://img.icons8.com/ios-glyphs/35/000000/twitter--v1.png" />
                        </li>
                        <li>
                            <img src="https://img.icons8.com/material-outlined/35/000000/instagram-new--v1.png" />
                        </li>
                    </ul>
                </div>
                <div className={navStyle.nav_right}>
                    <img src="https://img.icons8.com/small/35/000000/user-male-circle.png" onClick={dropdownFunction} onMouseOver={dropdownFunction} />
                    <div className={navStyle.dorpdown_content} onMouseLeave={dropdownFunction}>
                        <ul className={navStyle.links}>
                            <li><img src="https://img.icons8.com/ios-glyphs/20/000000/user--v1.png" /><Link href='/account/general'><a>Profile</a></Link></li>
                            <div className={navStyle.divider}></div>
                            <li><img src="https://img.icons8.com/fluency-systems-regular/20/000000/requires-interpreter.png" /><a>Lenguage</a></li>
                            <div className={navStyle.divider}></div>
                            <li><img src="https://img.icons8.com/ios-glyphs/20/000000/like--v1.png" /><a>Favorites</a></li>
                            <div className={navStyle.divider}></div>
                            <li><img src="https://img.icons8.com/material-outlined/20/000000/eyes-cartoon.png" /><a>Watch List</a></li>
                            <div className={navStyle.divider}></div>
                            <li><img src="https://img.icons8.com/ios-filled/20/000000/partly-cloudy-night--v1.png" /><a>Dark mode</a></li>
                        </ul>
                    </div>

                    <img src="https://img.icons8.com/ios-glyphs/35/000000/coin-wallet.png" alt='Connect wallet' />
                </div>
            </nav>
        </>
    )
}

export default nav