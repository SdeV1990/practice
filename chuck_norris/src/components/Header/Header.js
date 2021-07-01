import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <img className="logo-image" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="logo"/>
                <div className="logo-name">Chuck Norris</div>
            </div>
        </header>
    );
}

export default Header