import React from 'react';
import { useCart } from '../../pages/Shopping Cart/CartContext';
import './Menu.css';

import Americano from '../../assets/img/americano.png'; 
import CappuccinoAmericano from '../../assets/img/cappuccino-americano.png'; 
import Cappuccino from '../../assets/img/cappuccino.png';
import CaramelMacchiato from '../../assets/img/caramel-macchiato.png';
import EspressoDoble from '../../assets/img/espresso-doble.png';
import EspressoSencillo from '../../assets/img/espresso-sencillo.png';
import Chocolate from '../../assets/img/chocolate.png';
import ChocolateBlanco from '../../assets/img/chocolate-blanco.jpg';
import LatteMacchiato from '../../assets/img/latte-macchiato.png';
import Latte from '../../assets/img/latte.png';
import Macchiato from '../../assets/img/macchiato.png';
import MacchiatoEspresso from '../../assets/img/macchiato-espresso.png';
import Milo from '../../assets/img/milo.png';
import Mocha from '../../assets/img/mocha.png';

import FrappéMocca from '../../assets/img/frappé-mocca.png';
import FrappéOreo from '../../assets/img/frappé-oreo.png';
import IcedCappuccino from '../../assets/img/iced-cappuccino.png';
import IcedCaramelLatte from '../../assets/img/iced-caramel-latte.png';
import IcedCaramelMacchiato from '../../assets/img/iced-caramel-macchiato.png';
import IcedMacchiato from '../../assets/img/iced-macchiato.png';
import IcedVainillaLatte from '../../assets/img/iced-vainilla-latte.png';
import IcedAmericano from '../../assets/img/iced-americano.png';
import IcedMocha from '../../assets/img/iced-mocha.png';
import IcedLatte from '../../assets/img/iced-latte.png';
import MilkshakeChocolate from '../../assets/img/milkshake-chocolate.png';
import MilkshakeFresa from '../../assets/img/milkshake-fresa.png';
import MilkshakeOreo from '../../assets/img/milkshake-oreo.png';
import MilkshakeVainilla from '../../assets/img/milkshake-vainilla.png';

import CheesecakeFresa from '../../assets/img/cheesecake-de-fresa.png';
import CroissantAlmendras from '../../assets/img/croissant-de-almendras.png';
import CroissantChocolate from '../../assets/img/croissant-de-chocolate.png';
import CroissantJamónQueso from '../../assets/img/croissant-de-jamón-y-queso.png';
import CroissantMantequilla from '../../assets/img/croissant-de-mantequilla.png';
import DonaChocolateBlanco from '../../assets/img/dona-chocolate-blanco.png';
import DonaChocolate from '../../assets/img/dona-chocolate.png';
import DonaFresa from '../../assets/img/dona-fresa.png';
import GalletaChipsChocolate from '../../assets/img/galleta-chips-chocolate.png';
import GalletaAvena from '../../assets/img/galleta-avena.png';
import GalletaChocolate from '../../assets/img/galleta-chocolate.png';
import GalletaMantequilla from '../../assets/img/galleta-mantequilla.png';
import MuffinChipsBanana from '../../assets/img/muffin-chips-banana.png';
import MuffinChipsChocolate from '../../assets/img/muffin-chips-chocolate.png';
import MuffinArándanos from '../../assets/img/muffin-arandanos.png';
import MuffinChocolate from '../../assets/img/muffin-chocolate.png';
import MuffinFresa from '../../assets/img/muffin-fresa.png';
import MuffinOreo from '../../assets/img/muffin-oreo.png';
import MuffinRedVelvet from '../../assets/img/muffin-red-velvet.png';
import PastelChocolate from '../../assets/img/pastel-chocolate.png';
import PastelLimón from '../../assets/img/pastel-limon.png';
import PastelRedVelvet from '../../assets/img/pastel-red-velvet.jpg';
import PastelZanahoria from '../../assets/img/pastel zanahoria.png';
import Tiramisú from '../../assets/img/tiramisu.png';

import BagelJamónQueso from '../../assets/img/bagel-de-jamón-y-queso.png';
import BagelQuesoCrema from '../../assets/img/bagel-de-queso-crema.png';
import BagelSalmónAhumado from '../../assets/img/bagel-de-salmón-ahumado.png';
import Benedictinos from '../../assets/img/benedictinos.png';
import BowlAçai from '../../assets/img/bowl-de-açai.png';
import BowlYogurt from '../../assets/img/bowl-de-yogurt.png';
import BowlQuinuaVegetales from '../../assets/img/bowl-de-quinua-y-vegetales.png';
import OmeletteQuesoEspinacas from '../../assets/img/omelette-de-queso-y-espinacas.png';
import Pancakes from '../../assets/img/pancakes.png';
import PancakesChocolate from '../../assets/img/pancakes-de-chocolate.png';
import SándwichCarneQueso from '../../assets/img/sándwich-de-carne-y-queso.png';
import SándwichJamónQueso from '../../assets/img/sándwich-de-jamón-y-queso.png';
import SándwichPavoAguacate from '../../assets/img/sándwich-de-pavo-y-aguacate.png';
import TortillaJamónQueso from '../../assets/img/tortilla-de-jamón-y-queso.png';
import TostadaAguacate from '../../assets/img/tostada-de-aguacate.png';
import TostadasFrancesas from '../../assets/img/tostadas-francesas.png';
import TostadaJamónQueso from '../../assets/img/tostada-de-jamón-y-queso.png';
import Waffles from '../../assets/img/waffles.png';
import WrapCarnesMozzarella from '../../assets/img/wrap-carnes-y-mozzarella.png';
import WrapCostillitas from '../../assets/img/wrap-costillitas.png';
import WrapHawaiano from '../../assets/img/wrap-hawaiano.png';
import WrapJamónMozzarella from '../../assets/img/wrap-de-jamón-y-mozzarella.png';
import WrapPollo from '../../assets/img/wrap-pollo.png';
import WrapRoastBeef from '../../assets/img/wrap-roast-beef.png';
import WrapTradicionalRes from '../../assets/img/wrap-tradicional-de-res.png';

import MenuHeader from '../../components/Menu Header/MenuHeader';
import MenuItem from '../../components/Menu Item/MenuItem';
import Navbar from '../../components/Navbar/Navbar';

const Menu = () => {
    const { addToCart } = useCart(); // Usa useCart para obtener addToCart

    return (
        <>
            <Navbar />
            <MenuHeader title="Bebidas Calientes" />
            <div className="drinks-section">
                <MenuItem className="drink" title="AMERICANO"
                    imageSrc={Americano} imageAlt="Americano"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="CAPPUCCINO AMERICANO"
                    imageSrc={CappuccinoAmericano} imageAlt="Cappuccino Americano"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="CAPPUCCINO"
                    imageSrc={Cappuccino} imageAlt="Cappuccino"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="CARAMEL MACCHIATO"
                    imageSrc={CaramelMacchiato} imageAlt="Caramel Macchiato"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ESPRESSO DOBLE"
                    imageSrc={EspressoDoble} imageAlt="Espresso Doble"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ESPRESSO SENCILLO"
                    imageSrc={EspressoSencillo} imageAlt="Espresso Sencillo"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="CHOCOLATE"
                    imageSrc={Chocolate} imageAlt="Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="CHOCOLATE BLANCO"
                    imageSrc={ChocolateBlanco} imageAlt="Chocolate Blanco"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="LATTE MACCHIATO"
                    imageSrc={LatteMacchiato} imageAlt="Latte Macchiato"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="LATTE"
                    imageSrc={Latte} imageAlt="Latte"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MACCHIATO"
                    imageSrc={Macchiato} imageAlt="Macchiato"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MACCHIATO ESPRESSO"
                    imageSrc={MacchiatoEspresso} imageAlt="Macchiato Espresso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MILO"
                    imageSrc={Milo} imageAlt="Milo"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MOCHA"
                    imageSrc={Mocha} imageAlt="Mocha"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
            </div>
            <MenuHeader title="Bebidas Frías" />
            <div class="drinks-section">
                <MenuItem className="drink" title="FRAPPÉ MOCCA"
                    imageSrc={FrappéMocca} imageAlt="Frappé Mocca"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="FRAPPÉ OREO"
                    imageSrc={FrappéOreo} imageAlt="Frappé Oreo"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED CAPPUCCINO"
                    imageSrc={IcedCappuccino} imageAlt="Iced Cappuccino"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED CARAMEL LATTE"
                    imageSrc={IcedCaramelLatte} imageAlt="Iced Caramel Latte"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED CARAMEL MACCHIATO"
                    imageSrc={IcedCaramelMacchiato} imageAlt="Iced Caramel Macchiato"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED MACCHIATO"
                    imageSrc={IcedMacchiato} imageAlt="Iced Macchiato"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED VAINILLA LATTE"
                    imageSrc={IcedVainillaLatte} imageAlt="Iced Vainilla Latte"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED AMERICANO"
                    imageSrc={IcedAmericano} imageAlt="Iced Americano"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED MOCHA"
                    imageSrc={IcedMocha} imageAlt="Iced Mocha"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="ICED LATTE"
                    imageSrc={IcedLatte} imageAlt="Iced Latte"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MILKSHAKE CHOCOLATE"
                    imageSrc={MilkshakeChocolate} imageAlt="Milkshake Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MILKSHAKE FRESA"
                    imageSrc={MilkshakeFresa} imageAlt="Milkshake Fresa"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MILKSHAKE OREO"
                    imageSrc={MilkshakeOreo} imageAlt="Milkshake Oreo"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="drink" title="MILKSHAKE VAINILLA"
                    imageSrc={MilkshakeVainilla} imageAlt="Milkshake Vainilla"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
            </div>
            <MenuHeader title="Panadería y Pastelería" />
            <div class="food-section">
                <MenuItem className="food" title="CHEESECAKE DE FRESA"
                    imageSrc={CheesecakeFresa} imageAlt="Cheesecake de Fresa"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="CROISSANT DE ALMENDRAS"
                    imageSrc={CroissantAlmendras} imageAlt="Croissant de Almendras"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="CROISSANT DE CHOCOLATE"
                    imageSrc={CroissantChocolate} imageAlt="Croissant de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="CROISSANT DE JAMÓN Y QUESO"
                    imageSrc={CroissantJamónQueso} imageAlt="Croissant de Jamón y Queso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="CROISSANT DE MANTEQUILLA"
                    imageSrc={CroissantMantequilla} imageAlt="Croissant de Mantequilla"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="DONA DE CHOCOLATE BLANCO"
                    imageSrc={DonaChocolateBlanco} imageAlt="Dona de Chocolate Blanco"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="DONA DE CHOCOLATE"
                    imageSrc={DonaChocolate} imageAlt="Dona de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="DONA DE FRESA"
                    imageSrc={DonaFresa} imageAlt="Dona de Fresa"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="GALLETA CHIPS DE CHOCOLATE"
                    imageSrc={GalletaChipsChocolate} imageAlt="Galleta Chips de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="GALLETA DE AVENA"
                    imageSrc={GalletaAvena} imageAlt="Galleta de Avena"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="GALLETA DE CHOCOLATE"
                    imageSrc={GalletaChocolate} imageAlt="Galleta de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="GALLETA DE MANTEQUILLA"
                    imageSrc={GalletaMantequilla} imageAlt="Galleta de Mantequilla"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN CHIPS DE BANANA"
                    imageSrc={MuffinChipsBanana} imageAlt="Muffin Chips de Banana"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN CHIPS DE CHOCOLATE"
                    imageSrc={MuffinChipsChocolate} imageAlt="Muffin Chips de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN DE ARÁNDANOS"
                    imageSrc={MuffinArándanos} imageAlt="Muffin de Arándanos"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN DE CHOCOLATE"
                    imageSrc={MuffinChocolate} imageAlt="Muffin de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN DE FRESA"
                    imageSrc={MuffinFresa} imageAlt="Muffin de Fresa"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN DE OREO"
                    imageSrc={MuffinOreo} imageAlt="Muffin de Oreo"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="MUFFIN DE RED VELVET"
                    imageSrc={MuffinRedVelvet} imageAlt="Muffin de Red Velvet"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="PASTEL DE CHOCOLATE"
                    imageSrc={PastelChocolate} imageAlt="Pastel de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })}  
                />
                <MenuItem className="food" title="PASTEL DE LIMÓN"
                    imageSrc={PastelLimón} imageAlt="Pastel de Limón"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="PASTEL DE RED VELVET"
                    imageSrc={PastelRedVelvet} imageAlt="Pastel de Red Velvet"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="PASTEL DE ZANAHORIA"
                    imageSrc={PastelZanahoria} imageAlt="Pastel de Zanahoria"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="TIRAMISÚ"
                    imageSrc={Tiramisú} imageAlt="Tiramisú"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
            </div>
            <MenuHeader title="Desayunos y Brunch" />
            <div class="food-section">
                <MenuItem className="food" title="BAGEL DE JAMÓN Y QUESO"
                    imageSrc={BagelJamónQueso} imageAlt="Bagel de Jamón y Queso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="BAGEL DE QUESO CREMA"
                    imageSrc={BagelQuesoCrema} imageAlt="Bagel de Queso Crema"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="BAGEL DE SALMÓN AHUMADO"
                    imageSrc={BagelSalmónAhumado} imageAlt="Bagel de Salmón Ahumado"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="BENEDICTINOS"
                    imageSrc={Benedictinos} imageAlt="Benedictinos"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="BOWL DE AÇAI"
                    imageSrc={BowlAçai} imageAlt="Bowl de Açai"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="BOWL DE YOGURT"
                    imageSrc={BowlYogurt} imageAlt="Bowl de Yogurt"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="BOWL DE QUINUA Y VEGETALES"
                    imageSrc={BowlQuinuaVegetales} imageAlt="Bowl de Quinua y Vegetales"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="OMELETTE DE QUESO Y ESPINACAS"
                    imageSrc={OmeletteQuesoEspinacas} imageAlt="Omelette de Queso y Espinacas"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="PANCAKES"
                    imageSrc={Pancakes} imageAlt="Pancakes"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="PANCAKES DE CHOCOLATE"
                    imageSrc={PancakesChocolate} imageAlt="Pancakes de Chocolate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="SÁNDWICH DE CARNE Y QUESO"
                    imageSrc={SándwichCarneQueso} imageAlt="Sándwich de Carne y Queso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="SÁNDWICH DE JAMÓN Y QUESO"
                    imageSrc={SándwichJamónQueso} imageAlt="Sándwich de Jamón y Queso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="SÁNDWICH DE PAVO Y AGUACATE"
                    imageSrc={SándwichPavoAguacate} imageAlt="Sándwich de Pavo y Aguacate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="TORTILLA DE JAMÓN Y QUESO"
                    imageSrc={TortillaJamónQueso} imageAlt="Tortilla de Jamón y Queso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="TOSTADA DE AGUACATE"
                    imageSrc={TostadaAguacate} imageAlt="Tostada de Aguacate"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="TOSTADAS FRANCESAS"
                    imageSrc={TostadasFrancesas} imageAlt="Tostadas Francesas"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="TOSTADA DE JAMÓN Y QUESO"
                    imageSrc={TostadaJamónQueso} imageAlt="Tostada de Jamón y Queso"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WAFFLES"
                    imageSrc={Waffles} imageAlt="Waffles"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP CARNES Y MOZZARELLA"
                    imageSrc={WrapCarnesMozzarella} imageAlt="Wrap Carnes y Mozzarella"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP COSTILLITAS"
                    imageSrc={WrapCostillitas} imageAlt="Wrap Costillitas"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP HAWAIANO"
                    imageSrc={WrapHawaiano} imageAlt="Wrap Hawaiano"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP DE JAMÓN Y MOZZARELLA"
                    imageSrc={WrapJamónMozzarella} imageAlt="Wrap de Jamón y Mozzarella"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP DE POLLO"
                    imageSrc={WrapPollo} imageAlt="Wrap de Pollo"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP ROAST BEEF"
                    imageSrc={WrapRoastBeef} imageAlt="Wrap Roast Beef"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
                <MenuItem className="food" title="WRAP TRADICIONAL DE RES"
                    imageSrc={WrapTradicionalRes} imageAlt="Wrap Tradicional de Res"
                    // Link de detalles
                    detailsLink="/"
                    price={4.99}
                    onAddToCart={() => addToCart({ title: "AMERICANO", price: 4.99, image: Americano })} 
                />
            </div>
        </>
    );
};

export default Menu;