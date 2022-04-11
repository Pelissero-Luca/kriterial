import Link from 'next/link'
import style from '../../styles/accountStyle/Account.module.css'


const account = ({ children }) => {

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

    return (
        <>
            <div className={style.main}>
                <div className={style.leftSection}>
                    <div className={style.indexBar}>
                        <ul className={style.menuLinks}>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/30/ffffff/dog-house.png" />
                                <Link href='/account/general'><a>General</a></Link>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/ffffff/external-like-instagram-flatart-icons-outline-flatarticons.png" />
                                <Link href='/account/favorited'><a>Favorited</a></Link>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios/30/ffffff/collectibles.png" />
                                <a>Collected</a>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/windows/30/ffffff/tags.png" />
                                <a>Offers</a>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/pastel-glyph/30/ffffff/list.png" />
                                <a>Listing</a>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/external-android-line-2px-amoghdesign/30/ffffff/external-activity-multimedia-line-24px-android-line-2px-amoghdesign.png" />
                                <a>Activity</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.rightSection}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default account