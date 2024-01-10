import React from 'react';

function Logo() {
    return (
        <figure class="banner-logo bg-logo-banner">
            <a href="App.js"><img src="../images/new_logo.svg" alt="" /></a>
        </figure>
    );
}

function Text() {
    return (
        <div class="banner-text">
            <p class="bg-cta">(215) 744-5225</p>
            <p class="bg-cta">6539 Roosevelt Blvd Philadelphia PA 19149</p>
            <p id="chownow-link" class="bg-cta">
                <a class="mobile-text chownow-order-online" target="_blank">Click here to <br />Order Online</a>
            </p>
        </div>
    );
}

function Banner() {
    return <div id="banner">
        <Logo />
        <Text />
    </div>;
}

export default Banner;