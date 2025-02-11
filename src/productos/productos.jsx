import React from 'react';
import LattafaMaahirPack from "../assets/Perfumes/LattafaMaahirPack.jpg"
import LattafaPerfumedSpray from "../assets/Perfumes/LattafaPerfumedSpray.jpg"
import SteveMadenCarteraRosa from "../assets/Accesorios/SteveMadenCarteraRosa.jpg"
import SteveMadenCarteraCrema from "../assets/Accesorios/SteveMadenCarteraCrema.jpg"
import USPoloZapatillaNegra from "../assets/Calzado/USPoloZapatillaNegra.jpg"
import TommyHilfigerCarteraBlanca from "../assets/Accesorios/TommyHilfigerCarteraBlanca.jpg"
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
        nombre: 'Tommy Hilfiger Cartera Blanca',
        precio: 149.90,
        categoria: 'Accesorios',
        imagen: TommyHilfigerCarteraBlanca,
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
        nombre: 'Sandalia Karl Legerfeld Paris',
        precio: 159.90,
        categoria: 'Calzado',
        imagen: SandaliaKarlLegerfeldParis,
        link: 'https://wa.link/anh917',
    },

]
export default productos;