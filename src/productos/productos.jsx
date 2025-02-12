import React from 'react';
import LattafaMaahirPack from "../assets/Perfumes/LattafaMaahirPack.jpg"
import LattafaPerfumedSpray from "../assets/Perfumes/LattafaPerfumedSpray.jpg"
import SteveMadenCarteraRosa from "../assets/Accesorios/SteveMadenCarteraRosa.jpg"
import SteveMadenCarteraCrema from "../assets/Accesorios/SteveMadenCarteraCrema.jpg"
import USPoloZapatillaNegra from "../assets/Calzado/USPoloZapatillaNegra.jpg"
import TommyHilfigerMorralBlanca from "../assets/Accesorios/TommyHilfigerMorralBlanca.jpg"
import SteveMaidenLoncheraNegra from "../assets/Accesorios/SteveMaidenLoncheraNegra.jpg"
import QuiksilverSandaliaNegra from "../assets/Calzado/QuiksilverSandaliaNegra.jpg"
import LattafaSublime from "../assets/Perfumes/LattafaSublime.jpg"
import LattafaOudForGlory from "../assets/Perfumes/LattafaOudForGlory.jpg"
import LattafaYaraBlanco from "../assets/Perfumes/LattafaYaraBlanco.jpg"
import LattafaYaraRosa from "../assets/Perfumes/LattafaYaraRosa.jpg"
import LattafaKhamrah from "../assets/Perfumes/LattafaKhamrah.jpg"
import ClubDeNuit from "../assets/Perfumes/ClubDeNuit.jpg"
import SandaliaTommyAzulCuadros from "../assets/Calzado/SandaliaTommyAzulCuadros.jpg"
import SandaliaTommyAzulRayas from "../assets/Calzado/SandaliaTommyAzulRayas.jpg"
import SandaliaTommyCeleste from "../assets/Calzado/SandaliaTommyCeleste.jpg"
import SandaliaTommyRoja from "../assets/Calzado/SandaliaTommyRoja.jpg"
import SandaliaGuessRoja from "../assets/Calzado/SandaliaGuessRoja.jpg"
import ZapatoRYRAbierto from "../assets/Calzado/ZapatoRYRAbierto.jpg"
import ZapatoRYRCerrado from "../assets/Calzado/ZapatoRYRCerrado.jpg"
import SandaliaMaddenVerde from "../assets/Calzado/SandaliaMaddenVerde.jpg"
import SandaliaCalvinKleinMarrones from "../assets/Calzado/SandaliaCalvinKleinMarrones.jpg"
import SandaliaMichaelKorsAzules from "../assets/Calzado/SandaliaMichaelKorsAzules.jpg"
import SandaliaKarlLegerfeldParis from "../assets/Calzado/SandaliaKarlLegerfeldParis.jpg"
import SandaliaPlataformaGuessNegra from "../assets/Calzado/SandaliaPlataformaGuessNegra.jpg"
import SandaliaKarlLegerfeldbrillo from "../assets/Calzado/SandaliaKarlLegerfeldBrillo.jpg"
import SandaliaGBGBlanca from "../assets/Calzado/SandaliaGBGBlanca.jpg"
import Taper4Compartimentos from "../assets/Hogar/Taper4Compartimentos.jpg"
import Taper7Compartimentos from "../assets/Hogar/Taper7Compartimentos.jpg"
import BodyWashBYB from "../assets/Higiene/BodyWashBYB.jpg"
import ZapatillaGBGBlanca from "../assets/Calzado/ZapatillaGBGBlanca.jpg"
import AirPodsCase from "../assets/Accesorios/AirPodsCase.jpg"
import IphoneCase from "../assets/Accesorios/IphoneCase.jpg"
import MorralGuessNegro from "../assets/Accesorios/MorralGuessNegro.jpg"
import NeceserGuessNegro from "../assets/Accesorios/NeceserGuessNegro.jpg"
import BilleteraGuessNegra from "../assets/Accesorios/BilleteraGuessNegra.jpg"
import BilleteraGuessNegraBolsillo from "../assets/Accesorios/BilleteraGuessNegraBolsillo.jpg"
import BilleteraColumbiaBolsillo from "../assets/Accesorios/BilleteraColumbiaBolsillo.jpg"
import TommyHilfigerCarteraBlanca from "../assets/Accesorios/TommyHilfigerCarteraBlanca.jpg"
import SombreroQuiksilver from "../assets/Accesorios/SombreroQuiksilver.jpg"
import VSPack12Mini from "../assets/Perfumes/VSPack12Mini.jpg"
import VSPack4Mini from "../assets/Perfumes/VSPack4Mini.jpg"


const productos = [
    {
        id: 1,
        nombre: 'Lattafa Maahir Pack 3',
        precio: 259.90,
        categoria: 'Perfumes',
        imagen: LattafaMaahirPack,
        link: 'https://wa.link/nin01k',
    },
    {
        id: 2,
        nombre: 'Lattafa Perfumed Spray',
        precio: 59.90,
        categoria: 'Perfumes',
        imagen: LattafaPerfumedSpray,
        link: 'https://wa.link/q64en6',
    },
    {
        id: 3,
        nombre: 'Steve Madden Cartera Rosa',
        precio: 134.90,
        categoria: 'Accesorios',
        imagen: SteveMadenCarteraRosa,
        link: 'https://wa.link/e858sa',
    },
    {
        id: 4,
        nombre: 'Steve Madden Cartera Crema',
        precio: 149.90,
        categoria: 'Accesorios',
        imagen: SteveMadenCarteraCrema,
        link: 'https://wa.link/nxdeo7',
    },
    {
        id: 5,
        nombre: 'U.S. Polo Zapatilla Negra',
        precio: 164.90,
        categoria: 'Calzado',
        imagen: USPoloZapatillaNegra,
        link: 'https://wa.link/n6xz1b',
    },
    {
        id: 6,
        nombre: 'Quiksilver Sandalia Negra',
        precio: 99.90,
        categoria: 'Calzado',
        imagen: QuiksilverSandaliaNegra,
        link: 'https://wa.link/vbfpo3',
    },
    {
        id: 7,
        nombre: 'Steve Madden Lonchera Negra',
        precio: 84.90,
        categoria: 'Accesorios',
        imagen: SteveMaidenLoncheraNegra,
        link: 'https://wa.link/y7ycff',
    },
    {
        id: 8,
        nombre: 'Tommy Hilfiger Morral Blanca',
        precio: 149.90,
        categoria: 'Accesorios',
        imagen: TommyHilfigerMorralBlanca,
        link: 'https://wa.link/4odfom',
    },
    {
        id: 9,
        nombre: 'Lattafa Sublime',
        precio: 194.90,
        categoria: 'Perfumes',
        imagen: LattafaSublime,
        link: 'https://wa.link/i3befh',
    },
    {
        id: 10,
        nombre: 'Lattafa Oud for Glory',
        precio: 219.90,
        categoria: 'Perfumes',
        imagen: LattafaOudForGlory,
        link: 'https://wa.link/brusl4',
    },
    {
        id: 11,
        nombre: 'Lattafa Khamrah',
        precio: 219.90,
        categoria: 'Perfumes',
        imagen: LattafaKhamrah,
        link: 'https://wa.link/w1tff3',
    },
    {
        id: 12,
        nombre: 'Club de Nuit',
        precio: 219.90,
        categoria: 'Perfumes',
        imagen: ClubDeNuit,
        link: 'https://wa.link/jlc83m',
    },
    {
        id: 13,
        nombre: 'Lattafa Yara Rosa',
        precio: 194.90,
        categoria: 'Perfumes',
        imagen: LattafaYaraRosa,
        link: 'https://wa.link/ugukfp',
    },
    {
        id: 14,
        nombre: 'Lattafa Yara Blanco',
        precio: 194.90,
        categoria: 'Perfumes',
        imagen: LattafaYaraBlanco,
        link: 'https://wa.link/spq4mn',
    },
    {
        id: 15,
        nombre: 'Sandalia Tommy Azul',
        precio: 99.90,
        categoria: 'Calzado',
        imagen: SandaliaTommyAzulCuadros,
        link: 'https://wa.link/d3t8ou',
    },
    {
        id: 16,
        nombre: 'Sandalia Tommy Azul',
        precio: 99.90,
        categoria: 'Calzado',
        imagen: SandaliaTommyAzulRayas,
        link: 'https://wa.link/ff74kd',
    },
    {
        id: 17,
        nombre: 'Sandalia Tommy Roja',
        precio: 99.90,
        categoria: 'Calzado',
        imagen: SandaliaTommyRoja,
        link: 'https://wa.link/u8btfs',
    },
    {
        id: 18,
        nombre: 'Sandalia Tommy Celeste',
        precio: 99.90,
        categoria: 'Calzado',
        imagen: SandaliaTommyCeleste,
        link: 'https://wa.link/z1r5vk',
    },
    {
        id: 19,
        nombre: 'Sandalia Guess Roja',
        precio: 124.90,
        categoria: 'Calzado',
        imagen: SandaliaGuessRoja,
        link: 'https://wa.link/1ggfmu',
    },
    {
        id: 20,
        nombre: 'Zapato Rock & Candy Cerrado',
        precio: 89.90,
        categoria: 'Calzado',
        imagen: ZapatoRYRCerrado,
        link: 'https://wa.link/hqxqlq',
    },
    {
        id: 21,
        nombre: 'Zapato Rock & Candy Abierto',
        precio: 64.90,
        categoria: 'Calzado',
        imagen: ZapatoRYRAbierto,
        link: 'https://wa.link/gqewm0',
    },
    {
        id: 22,
        nombre: 'Sandalia Madden Verde',
        precio: 79.90,
        categoria: 'Calzado',
        imagen: SandaliaMaddenVerde,
        link: 'https://wa.link/veuamg',
    },
    {
        id: 23,
        nombre: 'Sandalia Michael Kors Azules',
        precio: 99.90,
        categoria: 'Calzado',
        imagen: SandaliaMichaelKorsAzules,
        link: 'https://wa.link/6ohe66',
    },
    {
        id: 24,
        nombre: 'Sandalia Calvin Klein Marrones',
        precio: 74.90,
        categoria: 'Calzado',
        imagen: SandaliaCalvinKleinMarrones,
        link: 'https://wa.link/ts6x7x',
    },
    {
        id: 25,
        nombre: 'Sandalia Plataforma Guess Negra',
        precio: 114.90,
        categoria: 'Calzado',
        imagen: SandaliaPlataformaGuessNegra,
        link: 'https://wa.link/w6lml2',
    },
    {
        id: 26,
        nombre: 'Sandalia Karl Lagerfeld Paris',
        precio: 159.90,
        categoria: 'Calzado',
        imagen: SandaliaKarlLegerfeldParis,
        link: 'https://wa.link/anh917',
    },
    {
        id: 27,
        nombre: 'Sandalia Karl Lagerfeld brillo',
        precio: 59.90,
        categoria: 'Calzado',
        imagen: SandaliaKarlLegerfeldbrillo,
        link: 'https://wa.link/fmlpdi',
    },
    {
        id: 28,
        nombre: 'Sandalia GBG Blancas',
        precio: 74.90,
        categoria: 'Calzado',
        imagen: SandaliaGBGBlanca,
        link: 'https://wa.link/fsi8eb',
    },
    {
        id: 29,
        nombre: 'Tapers Tasty 4 compartimentos',
        precio: 44.90,
        categoria: 'Hogar',
        imagen: Taper4Compartimentos,
        link: 'https://wa.link/v7knld',
    },
    {
        id: 30,
        nombre: 'Tapers Tasty 7 compartimentos',
        precio: 54.90,
        categoria: 'Hogar',
        imagen: Taper7Compartimentos,
        link: 'https://wa.link/vlk9jg',
    },
    {
        id: 31,
        nombre: 'Body Wash Bath & Body',
        precio: 44.90,
        categoria: 'Higiene',
        imagen: BodyWashBYB,
        link: 'https://wa.link/nkao97',
    },
    {
        id: 32,
        nombre: 'Zapatilla GBG Blanca',
        precio: 204.90,
        categoria: 'Calzado',
        imagen: ZapatillaGBGBlanca,
        link: 'https://wa.link/hvk0b6',
    },
    {
        id: 33,
        nombre: 'AirPodsCase',
        precio: 44.90,
        categoria: 'Accesorios',
        imagen: AirPodsCase,
        link: 'https://wa.link/ifm6t2',
    },
    {
        id: 34,
        nombre: 'IphoneCase',
        precio: 44.90,
        categoria: 'Accesorios',
        imagen: IphoneCase,
        link: 'https://wa.link/z4sbjy',
    },
    {
        id: 35,
        nombre: 'Morral Guess Negro',
        precio: 184.90,
        categoria: 'Accesorios',
        imagen: MorralGuessNegro,
        link: 'https://wa.link/3k4pws',
    },
    {
        id: 36,
        nombre: 'Neceser Guess Negro',
        precio: 99.90,
        categoria: 'Accesorios',
        imagen: NeceserGuessNegro,
        link: 'https://wa.link/o11jlp',
    },
    {
        id: 37,
        nombre: 'Billetera Guess Negra',
        precio: 149.90,
        categoria: 'Accesorios',
        imagen: BilleteraGuessNegra,
        link: 'https://wa.link/uu52dt',
    },
    {
        id: 38,
        nombre: 'Billetera Guess Negra Bolsillo',
        precio: 109.90,
        categoria: 'Accesorios',
        imagen: BilleteraGuessNegraBolsillo,
        link: 'https://wa.link/fklj3g',
    },
    {
        id: 39,
        nombre: 'Billetera Columbia Bolsillo',
        precio: 99.90,
        categoria: 'Accesorios',
        imagen: BilleteraColumbiaBolsillo,
        link: 'https://wa.link/53pdzt',
    },
    {
        id: 40,
        nombre: 'Tommy Hilfiger Cartera Blanca',
        precio: 149.90,
        categoria: 'Accesorios',
        imagen: TommyHilfigerCarteraBlanca,
        link: 'https://wa.link/n0ujp4',
    },
    {
        id: 41,
        nombre: 'Sombrero Quiksilver',
        precio: 99.90,
        categoria: 'Accesorios',
        imagen: SombreroQuiksilver,
        link: 'https://wa.link/hapz4x',
    },
    {
        id: 42,
        nombre: 'Victorias Secret Pack 12 Mini',
        precio: 374.90,
        categoria: 'Accesorios',
        imagen: VSPack12Mini,
        link: 'https://wa.link/m2w1g4',
    },
    {
        id: 43,
        nombre: 'Victorias Secret Pack 4 Mini',
        precio: 139.90,
        categoria: 'Accesorios',
        imagen: VSPack4Mini,
        link: 'https://wa.link/xos99k',
    },


]
export default productos;