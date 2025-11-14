const productosBasket = [
  {
    nombre: "Balón Spalding",
    descripcion: "Balón oficial de baloncesto Spalding, ideal para interiores y exteriores.",
    precio: 26,
    categoria: "Balones",
    imagen: "https://spalding-basketball.com/cdn/shop/products/spalding-fiba-varsity-tf-150-rubber-indooroutdoor-basketball-941958.jpg?v=1754024368"
  },
  {
    nombre: "Giannis Immortality 4",
    descripcion: "Zapatillas Nike inspiradas en Giannis Antetokounmpo, con excelente amortiguación.",
    precio: 60,
    categoria: "Zapatillas",
    imagen: "https://dam.elcorteingles.es/producto/www-001017725008183-03.jpg?impolicy=Resize&width=1200&height=1200"
  },
  {
    nombre: "Muñequeras Nike",
    descripcion: "Par de muñequeras absorbentes Nike, ideales para entrenamientos intensos.",
    precio: 15,
    categoria: "Accesorios",
    imagen: "https://www.market.correos.es/uploads/correos-marketplace-shop/1/product/257162-EVpAk8S4-nike-munequeras-nike-swoosh-double-pack-2-unds-negro-0.jpg"
  },
  {
    nombre: "Adidas Monster 1",
    descripcion: "Zapatillas Adidas de alto rendimiento para jugadores que buscan velocidad y tracción.",
    precio: 40,
    categoria: "Zapatillas",
    imagen: "https://www.manelsanchez.com/uploads/media/images/800x800/F33079.jpg.webp"
  },
  {
    nombre: "Canasta Profesional",
    descripcion: "Canasta de baloncesto profesional con base móvil y tablero de acrílico.",
    precio: 800,
    categoria: "Equipamiento",
    imagen: "https://equidesa.com/media/productos/Canasta_plegable_-_baloncesto_-_equidesa.jpg"
  },
  {
    nombre: "Banda NBA",
    descripcion: "Banda elástica para la cabeza con logo de la NBA y Nike, evita el sudor en los ojos.",
    precio: 16,
    categoria: "Accesorios",
    imagen: "https://www.basketballemotion.com/imagesarticulos/215582/grandes/cinta-nike-nba-black-0.webp"
  },
  {
    nombre: "Rodilleras McDavid",
    descripcion: "Rodilleras acolchadas para protección en saltos y caídas durante el juego.",
    precio: 25,
    categoria: "Protección",
    imagen: "https://m.media-amazon.com/images/I/61+8AxI9sfL.jpg"
  },
  {
    nombre: "Conos de Entrenamiento",
    descripcion: "Set de 10 conos para mejorar la agilidad y velocidad en entrenamientos.",
    precio: 20,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/71zBG+h7ONL.jpg"
  },
  {
    nombre: "Camiseta NBA Lakers",
    descripcion: "Camiseta oficial de los Lakers con tela transpirable.",
    precio: 35,
    categoria: "Ropa",
    imagen: "https://tuscamisetasnba.com/wp-content/uploads/2021/09/Camiseta-LeBron-James-06-Los-Angeles-Lakers-2022.jpeg"
  },
  {
    nombre: "Pantalones de Entrenamiento Nike",
    descripcion: "Pantalones ligeros y cómodos para sesiones de entrenamiento o partidos.",
    precio: 45,
    categoria: "Ropa",
    imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202408/12/00199440923565____6__1200x1200.jpg"
  },
  {
    nombre: "Bolsa de Deporte Spalding",
    descripcion: "Bolsa amplia y resistente para llevar todo el equipo deportivo.",
    precio: 30,
    categoria: "Accesorios",
    imagen: "https://media.basket-center.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/3/0/300452801_2.jpg"
  },
  {
    nombre: "Toalla Absorbente NBA",
    descripcion: "Toalla oficial NBA de microfibra absorbente.",
    precio: 18,
    categoria: "Accesorios",
    imagen: "https://www.fuikaomar.es/58394-large_default/toalla-nba-los-angeles-lakers-logo-stripes.jpg"
  },
  {
    nombre: "Red de Baloncesto",
    descripcion: "Red de nylon reforzado para canastas estándar.",
    precio: 10,
    categoria: "Equipamiento",
    imagen: "https://m.media-amazon.com/images/I/51IfYMI8qUL.jpg"
  },
  {
    nombre: "Camiseta Entrenamiento Jordan",
    descripcion: "Camiseta Jordan con tecnología Dri-FIT para máxima transpirabilidad.",
    precio: 32,
    categoria: "Ropa",
    imagen: "https://www.basketballemotion.com/imagesarticulos/227716/grandes/camiseta-jordan-practice-flight-nino-gym-red-0.webp"
  },
  {
    nombre: "Balón Wilson Evolution",
    descripcion: "Balón de alta gama para interiores con gran agarre y control.",
    precio: 45,
    categoria: "Balones",
    imagen: "https://www.basketballemotion.com/imagesarticulos/216118/grandes/balon-wilson-evolution-basketball-orange-silver-1.webp"
  },
  {
    nombre: "Calcetines Nike Elite",
    descripcion: "Calcetines acolchados diseñados para absorber impactos y ofrecer comodidad.",
    precio: 14,
    categoria: "Ropa",
    imagen: "https://www.basketballemotion.com/imagesarticulos/215485/grandes/calcetines-nike-elite-crew-white-black-0.webp"
  },
  {
    nombre: "Protectores Bucales Shock Doctor",
    descripcion: "Protector bucal moldeable para máxima protección dental.",
    precio: 12,
    categoria: "Protección",
    imagen: "https://shockdoctorsports.eu/cdn/shop/products/6100-BLU-BK_FrontSide.jpg?v=1756878852"
  },
  {
    nombre: "Compresor de Aire Spalding",
    descripcion: "Compresor portátil para inflar balones con facilidad.",
    precio: 28,
    categoria: "Accesorios",
    imagen: "https://m.media-amazon.com/images/I/71rJLzp2-yL.jpg"
  },
  {
    nombre: "Cinta Kinesiológica",
    descripcion: "Cinta elástica para aliviar tensión muscular y prevenir lesiones.",
    precio: 22,
    categoria: "Protección",
    imagen: "https://m.media-amazon.com/images/I/91hTh6RhQQL.jpg"
  },
  {
    nombre: "Tablero de Entrenador",
    descripcion: "Pizarra magnética para diseñar jugadas durante los partidos.",
    precio: 35,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/61paR6OIRHL.jpg"
  },
  {
    nombre: "Mochila Jordan",
    descripcion: "Mochila resistente y elegante con compartimento especial para zapatos.",
    precio: 50,
    categoria: "Accesorios",
    imagen: "https://www.basketballemotion.com/imagesarticulos/222675/540/mochila-jordan-air-school-con-estuche-white-0.jpg"
  },
  {
    nombre: "Balón de Entrenamiento Molten",
    descripcion: "Balón Molten con superficie antideslizante para un mejor control.",
    precio: 30,
    categoria: "Balones",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_700286-MLU71213398044_082023-O.webp"
  },
  {
    nombre: "Camiseta All-Star 2025",
    descripcion: "Edición especial del All-Star Game 2025 con diseño exclusivo.",
    precio: 55,
    categoria: "Ropa",
    imagen: "https://www.basketballemotion.com/imagesarticulos/242620/grandes/camiseta-jordan-all-star-weekend-team-1-2025-university-red-0.webp"
  },
  {
    nombre: "Banda de Resistencia",
    descripcion: "Banda elástica ideal para calentamientos y ejercicios de fuerza.",
    precio: 17,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/71p6dAKPG9L.jpg"
  }
];

export default productosBasket;
