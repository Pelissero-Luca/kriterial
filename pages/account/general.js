import AccountLayout from '../../components/layout/accountLayout'
import style from '../../styles/accountStyle/General.module.css'

const general = () => {

    const copyAddress = (e) => {
        
    }

    return (
        <AccountLayout>
            <div className={style.windowGeneral}>
                <div className={`${style.windowItem} ${style.windowProfile}`}>
                    <div className={style.imgUser}></div>
                    <h1>Username</h1>
                    <div className={style.publicAddress}>
                        <img src='/eth.svg'></img>
                        <span onClick={(e) => copyAddress(e)}>0xf2f401927920103C3C284C4eC0f08ffBc25809EC</span>
                    </div>
                </div>
                <div className={`${style.windowItem} ${style.windowFavorited}`}>

                </div>
                <div className={`${style.windowItem} ${style.windowAct}`}>

                </div>
            </div>
        </AccountLayout>
    )
}

export default general