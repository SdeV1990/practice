import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
                <img className="logo-image" src="/img/logo.png" alt="logo"/>
                <div className="logo-name">Chuck Norris</div>
            </div>
        </header>
    );
}

export default Header