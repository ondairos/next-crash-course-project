import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span>News
            </h1>
            <p className={headerStyles.description}>Keeping up to date with all the latest dev news!</p>
        </div>
    )
}

export default Header