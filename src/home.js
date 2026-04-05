import menuItems from "./menuItems.js";

export default function renderHome() {
    const container = document.createElement("div");
    container.innerHTML = `<div class="main-banner">
                <div class="container">
                    <div class="left-header">
                    <div class="banner-card">EST. LONDON, 1987</div>
                    <h1>Crafted with <span>fire & love</span></h1>
                    <h2>Stone-fired Neapolitan pizza, made from scratch every morning with hand-stretched dough and San
                        Marzano tomatoes.</h2>
                        </div> 
                        <div class="right-header">
                            <div class="header-img-container">&#127829;</div>
                        </div>
                </div>
            </div>
            <dl class="stats">
                <div class="container">
                    <div class="stats__item">
                        <dt class="stats__label">Years open</dt>
                        <dd class="stats__value">37+</dd>
                    </div>
                    <div class="stats__item">
                        <dt class="stats__label">Pizzas on menu</dt>
                        <dd class="stats__value">24</dd>
                    </div>
                    <div class="stats__item">
                        <dt class="stats__label">Oven temperature</dt>
                        <dd class="stats__value">900°</dd>
                    </div>
                    <div class="stats__item">
                        <dt class="stats__label">Average rating</dt>
                        <dd class="stats__value">4.9★</dd>
                    </div>
                </div>
            </dl>
            <div class="chef-specials-section">
                <div class="container">
                    <div class="header">
                        <div class="header-group">
                            <span>This week</span>
                            <h3>Chef's Specials</h3>
                        </div>
                        <button class="view-menu-btn" data-page="menu">View full menu →</button>
                    </div>
                    <div class="card-section">
                        <div class="menu_card__item">
                            <div class="card_header">${menuItems[0].symbol}</div>
                            <div class="card_info">
                                <h4>${menuItems[0].name}</h4>
                                <p>${menuItems[0].description}</p>
                                <span class="price">£${menuItems[0].price}</span>
                            </div>
                        </div>
                        <div class="menu_card__item">
                            <div class="card_header">${menuItems[1].symbol}</div>
                            <div class="card_info">
                                <h4>${menuItems[1].name}</h4>
                                <p>${menuItems[1].description}</p>
                                <span class="price">£${menuItems[1].price}</span>
                            </div>
                        </div>
                        <div class="menu_card__item">
                            <div class="card_header">${menuItems[2].symbol}</div>
                            <div class="card_info">
                                <h4>${menuItems[2].name}</h4>
                                <p>${menuItems[2].description}</p>
                                <span class="price">£${menuItems[2].price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="three-column-layout">
                <div class="container">
                    <div class="header">
                        <span>Why we're different</span>
                        <h3>The Palace Way</h3>
                    </div>
                    <div class="card-section">
                        <div class="card__item">
                            <div class="icon">&#128293;</div>
                            <h4>Wood-fired Ovens</h4>
                            <p>Our hand-built Neapolitan ovens reach 900°F, charring the crust in 90 seconds for that
                                impossible leopard-spot finish.</p>
                        </div>
                        <div class="card__item">
                            <div class="icon">&#127806;</div>
                            <h4>48-hour cold dough</h4>
                            <p>Slow fermentation in the cold means a lighter, more digestible base with real flavour —
                                not
                                just texture.</p>
                        </div>
                        <div class="card__item">
                            <div class="icon">&#128668;</div>
                            <h4>Sourced locally</h4>
                            <p>All produce comes from farms within 50 miles of London. Our mozzarella is made fresh each
                                morning in Bermondsey.</p>
                        </div>
                    </div>
                </div>
            </div>`

    return container

}