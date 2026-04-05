import menuItems from "./menuItems.js";



export default function renderHome() {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="hero">
            <div class="container">
                <div class="hero__content">
                    <div class="banner-card">EST. LONDON, 1987</div>
                    <h1>Crafted with <span>fire & love</span></h1>
                    <h2>Stone-fired Neapolitan pizza, made from scratch every morning with hand-stretched dough and San
                        Marzano tomatoes.</h2>
                </div>
                <div class="hero__image">
                    <div class="hero__image-placeholder">&#127829;</div>
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
                    <dd class="stats__value">5</dd>
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
        <div class="specials">
            <div class="container">
                <div class="header">
                    <div class="section-header__group">
                        <span>This week</span>
                        <h3>Chef's Specials</h3>
                    </div>
                    <button class="view-menu-btn" data-page="menu">View full menu →</button>
                </div>
                <div class="card-grid">
                    <div class="menu-card">
                        <div class="menu-card__header">${menuItems[0].symbol}</div>
                        <div class="menu-card__body">
                            <h4>${menuItems[0].name}</h4>
                            <p>${menuItems[0].description}</p>
                            <span class="menu-card__price">£${menuItems[0].price}</span>
                        </div>
                    </div>
                    <div class="menu-card">
                        <div class="menu-card__header">${menuItems[1].symbol}</div>
                        <div class="menu-card__body">
                            <h4>${menuItems[1].name}</h4>
                            <p>${menuItems[1].description}</p>
                            <span class="menu-card__price">£${menuItems[1].price}</span>
                        </div>
                    </div>
                    <div class="menu-card">
                        <div class="menu-card__header">${menuItems[2].symbol}</div>
                        <div class="menu-card__body">
                            <h4>${menuItems[2].name}</h4>
                            <p>${menuItems[2].description}</p>
                            <span class="menu-card__price">£${menuItems[2].price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="features">
            <div class="container">
                <div class="header">
                    <span>Why we're different</span>
                    <h3>The Palace Way</h3>
                </div>
                <div class="card-grid">
                    <div class="feature-card">
                        <div class="feature-card__icon">&#128293;</div>
                        <h4>Wood-fired Ovens</h4>
                        <p>Our hand-built Neapolitan ovens reach 900°F, charring the crust in 90 seconds for that
                            impossible leopard-spot finish.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-card__icon">&#127806;</div>
                        <h4>48-hour cold dough</h4>
                        <p>Slow fermentation in the cold means a lighter, more digestible base with real flavour —
                            not just texture.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-card__icon">&#128668;</div>
                        <h4>Sourced locally</h4>
                        <p>All produce comes from farms within 50 miles of London. Our mozzarella is made fresh each
                            morning in Bermondsey.</p>
                    </div>
                </div>
            </div>
        </div>`;

    return container;
}