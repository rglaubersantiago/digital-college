import DigitalStoreLogo from "../../assets/DigitalStoreLogo.png"
import ShoppingCart from "../../assets/ShoppingCart.png"
import "./Header.css"

function Header() {

    return (
        <>
            <section id="header">
                <div id="header-img">
                    <img src={DigitalStoreLogo} alt="" />
                </div>
                <div id="header-input">
                    <input type="text" name="" id="" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="header-redirect">
                    <div id="header-buttons">
                        <a href="">Cadastre-se</a>
                        <button>Entrar</button>
                    </div>
                    <div>
                        <img src={ShoppingCart} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
