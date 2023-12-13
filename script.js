
window.onscroll = function() {
    mostrarBoton();
};

function mostrarBoton() {
    var boton = document.getElementById("btnVolverArriba");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.parentElement.classList.add("show");
    } else {
        boton.parentElement.classList.remove("show");
    }
}
function volverArriba() {
    // Para navegadores modernos
    if (window.scrollY !== undefined) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {  // Para navegadores antiguos
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}




function toggleSubMenu(titulo, subMenu, listaProductos) {
    console.log('toggleSubMenu llamada');
    let subMenuVisible = false;
    let productosVisible = false;

    titulo.addEventListener("click", function () {
        subMenu.style.display = subMenuVisible ? "none" : "block";
        subMenuVisible = !subMenuVisible;

        if (!subMenuVisible) {
            listaProductos.style.display = "none";
            productosVisible = false;
        }
    });

    subMenu.addEventListener("click", function (event) {
        event.stopPropagation();
        listaProductos.style.display = productosVisible ? "none" : "block";
        productosVisible = !productosVisible;
    });
}

function agregarProductosALista(productos, listaId) {
    console.log('toggleSubMenu llamada');
    const listaProductos = document.getElementById(listaId);
    listaProductos.innerHTML = ""; // Limpiar la lista anterior (si la hay)

    productos.forEach((producto) => {
        const listItem = document.createElement("li");
        listItem.textContent = producto;
        listaProductos.appendChild(listItem);
    });
}

// Familia "Res"
//Chuletas
const tituloRes = document.getElementById("tituloRes");
const subMenuChuletas = document.getElementById("Chuletas");
const listaProductosChuletas = document.getElementById("productosChuletas");
const productosChuletas = ["Chuleta de Res Con Hueso - $199.80/KG",
"Chuleta Deshuesada - $259.80/KG",
"Chuleta Deshuesada de Res X Pieza - $259.80/KG"];
toggleSubMenu(tituloRes, subMenuChuletas, listaProductosChuletas);
agregarProductosALista(productosChuletas, "productosChuletas");



// Ejemplo para un nuevo submenú "Cortes Finos"
const subMenuCortesFinos = document.getElementById("CortesFinos");
const listaProductosCortesFinos = document.getElementById("productosCortesFinos");
const productosCortesFinos = ["Cowboy de Res - $299.00/KG",
"Filete de Res - $389.80/KG",
"New York - $244.80/KG",
"New York Pieza - $215.80/KG",
"New York Pieza Prep. - $224.80/KG",
"New York Plancha - $254.80/KG",
"Picaña de Res - $245.00/KG",
"Rib Eye - $274.80/KG",
"Rib Eye x Pieza - $234.80/KG",
"T Bone - $285.00/KG",
"Tomahawk Res - $345.00/KG"];

toggleSubMenu(tituloRes, subMenuCortesFinos, listaProductosCortesFinos);
agregarProductosALista(productosCortesFinos, "productosCortesFinos");

// Costillas
const subMenuCostillas = document.getElementById("Costillas");
const listaProductosCostillas = document.getElementById("productosCostillas");
const productosCostillas = ["Costilla de Res - $109.80/KG",
"Costilla de Res Cargada Nacional X Pieza - $115.80/KG",
"Costilla de Res para Asar - $114.80/KG",
"Costilla de Res Short Rib Americana - $299.80/KG",
"Costilla de Res X Pieza - $94.80/KG"];

toggleSubMenu(tituloRes, subMenuCostillas, listaProductosCostillas);
agregarProductosALista(productosCostillas, "productosCostillas");

// Pulpas
const subMenuPulpas = document.getElementById("Pulpas");
const listaProductosPulpas = document.getElementById("productosPulpas");
const productosPulpas = ["Pulpa Bola - $199.80/KG",
"Pulpa Bola Preparada - $209.80/KG",
"Pulpa Bola X Pieza - $189.80/KG",
"Pulpa Larga - $149.80/KG",
"Pulpa Larga Molida - $156.80/KG",
"Pulpa Larga Plancha - $159.80/KG",
"Pulpa Larga Preparada - $169.80/KG",
"Pulpa Larga X Pieza - $139.80/PZ",
"Pulpa Negra - $196.80/KG",
"Pulpa Negra Preparada - $206.80/KG",
"Pulpa Negra X Pieza - $186.80/KG",
"Pulpa Paleta - $152.80/KG",
"Pulpa Paleta Centro - $161.80/KG",
"Pulpa Paleta Centro Preparada - $169.80/KG",
"Pulpa Paleta Nacional X Pieza - $132.80/KG",
"Pulpa Paleta para Plancha - $161.80/KG",
"Pulpa Paleta Picada - $161.80/KG",
"Pulpa Paleta por Caja - $142.80/KG",
"Pulpa Paleta por Pieza - $143.80/KG",
"Pulpa Paleta Preparada - $161.80/KG",
"Pulpa Paleta x Pz Preparada - $152.80/PZ",
"Pulpa Palomilla - $204.80/KG",
"Pulpa Palomilla X Pieza - $194.80/KG"];

toggleSubMenu(tituloRes, subMenuPulpas, listaProductosPulpas);
agregarProductosALista(productosPulpas, "productosPulpas");

// Chamorro
const subMenuChamorro = document.getElementById("Chamorro");
const listaProductosChamorro = document.getElementById("productosChamorro");
const productosChamorro = ["Chamorro de Res - $125.80/KG",
"Chamorro de Res X PZ - $115.80/KG"];

toggleSubMenu(tituloRes, subMenuChamorro, listaProductosChamorro);
agregarProductosALista(productosChamorro, "productosChamorro");

// Espinazo
const subMenuEspinazo = document.getElementById("Espinazo");
const listaProductosEspinazo = document.getElementById("productosEspinazo");
const productosEspinazo = ["Espinazo de Res - $59.80/KG"];

toggleSubMenu(tituloRes, subMenuEspinazo, listaProductosEspinazo);
agregarProductosALista(productosEspinazo, "productosEspinazo");

// Milanesas
const subMenuMilanesas = document.getElementById("Milanesas");
const listaProductosMilanesas = document.getElementById("productosMilanesas");
const productosMilanesas = ["Milanesa de Res - $184.80/KG"];

toggleSubMenu(tituloRes, subMenuMilanesas, listaProductosMilanesas);
agregarProductosALista(productosMilanesas, "productosMilanesas");

// Pata
const subMenuPata = document.getElementById("Pata");
const listaProductosPata = document.getElementById("productosPata");
const productosPata = ["Pata de Res - $79.80/KG",
"Pata S/Pezuña - $89.80/KG"];

toggleSubMenu(tituloRes, subMenuPata, listaProductosPata);
agregarProductosALista(productosPata, "productosPata");

// Pecho
const subMenuPecho = document.getElementById("Pecho");
const listaProductosPecho = document.getElementById("productosPecho");
const productosPecho = ["Pecho de Res - $184.80/KG",
"Pecho de Res Bisteceado - $184.80/KG",
"Pecho de Res X Pieza - $150.80/KG"];

toggleSubMenu(tituloRes, subMenuPecho, listaProductosPecho);
agregarProductosALista(productosPecho, "productosPecho");

// Suadero
const subMenuSuadero = document.getElementById("Suadero");
const listaProductosSuadero = document.getElementById("productosSuadero");
const productosSuadero = ["Suadero Nacional - $134.80/KG",
"Suadero Nacional Limpio - $179.90/KG",
"Suadero x Pieza - $129.80/KG"
];

toggleSubMenu(tituloRes, subMenuSuadero, listaProductosSuadero);
agregarProductosALista(productosSuadero, "productosSuadero");

// Tripas
const subMenuTripas = document.getElementById("Tripas");
const listaProductosTripas = document.getElementById("productosTripas");
const productosTripas = ["Tripa de Res - $79.80/KG",
"Tripa de Res Precocida - $148.80/KG",
"Tripa de Res Trenzada - $89.80/KG",
"Tripa de Res X Caja - $69.80/KG",
"Tripa para Embutir - $450.00/KG"];

toggleSubMenu(tituloRes, subMenuTripas, listaProductosTripas);
agregarProductosALista(productosTripas, "productosTripas");

// Cabezas
const subMenuCabezas = document.getElementById("Cabezas");
const listaProductosCabezas = document.getElementById("productosCabezas");
const productosCabezas = ["Cabeza de Res Cocida por Kilo - $1399.00/KG",
"Cabeza Deshuesada Res X Set - $49.80/KG",
"Carne Cabeza de Res - $125.80/KG",
"Labio de Res - $139.80/KG",
"Labio de Res X Caja - $134.80/KG",
"Lengua de Res - $289.80/KG"];

toggleSubMenu(tituloRes, subMenuCabezas, listaProductosCabezas);
agregarProductosALista(productosCabezas, "productosCabezas");

// Carne Molida
const subMenuCarneMolida = document.getElementById("CarneMolida");
const listaProductosCarneMolida = document.getElementById("productosCarneMolida");
const productosCarneMolida = ["Carne Molida - $149.80/KG",
"Carne P/Birria - $145.80/KG"
];

toggleSubMenu(tituloRes, subMenuCarneMolida, listaProductosCarneMolida);
agregarProductosALista(productosCarneMolida, "productosCarneMolida");

// Carne Seca
const subMenuCarneSeca = document.getElementById("CarneSeca");
const listaProductosCarneSeca = document.getElementById("productosCarneSeca");
const productosCarneSeca = ["Carne Seca / Cecina - $650.00/KG"
];

toggleSubMenu(tituloRes, subMenuCarneSeca, listaProductosCarneSeca);
agregarProductosALista(productosCarneSeca, "productosCarneSeca");

// Hueso
const subMenuHueso = document.getElementById("Hueso");
const listaProductosHueso = document.getElementById("productosHueso");
const productosHueso = ["Hueso Blanco - $37.80/KG",
"Hueso Con Tuetano - $80.80/KG",
"Hueso Perico - $49.80/KG"];

toggleSubMenu(tituloRes, subMenuHueso, listaProductosHueso);
agregarProductosALista(productosHueso, "productosHueso");

// Arrachera
const subMenuArrachera = document.getElementById("Arrachera");
const listaProductosArrachera = document.getElementById("productosArrachera");
const productosArrachera = ["Arrachera - $239.80/KG",
"Arrachera FlapMeat - $239.80/KG",
"Arrachera Marinada - $262.80/KG",
"Arrachera por Pieza - $209.80/KG"];

toggleSubMenu(tituloRes, subMenuArrachera, listaProductosArrachera);
agregarProductosALista(productosArrachera, "productosArrachera");

// Menudo
const subMenuMenudo = document.getElementById("Menudo");
const listaProductosMenudo = document.getElementById("productosMenudo");
const productosMenudo = ["Menudo - $109.80/KG",
"Menudo Americano X Caja - $105.80/KG",
"Menudo Mexicano X Caja - $99.80/KG",
"Menudo Picado - $114.80/KG"];

toggleSubMenu(tituloRes, subMenuMenudo, listaProductosMenudo);
agregarProductosALista(productosMenudo, "productosMenudo");

// Otros
const subMenuOtros = document.getElementById("Otros");
const listaProductosOtros = document.getElementById("productosOtros");
const productosOtros = ["Carne Deshebrada de Res - $299.80/KG",
"Chivo x Canal - $175.00/KG",
"Cola de Res - $135.00/KG",
"Cuete de Res - $179.80/KG",
"Cuete de Res X Pieza - $173.80/PZ",
"Giba de Res X Pieza - $114.80/KG",
"Grasa De Res - $38.80/KG",
"Grasa De Res Molida - $42.80/KG",
"Hígado - $58.80/KG",
"Rancherito de Res - $139.80/KG"];

toggleSubMenu(tituloRes, subMenuOtros, listaProductosOtros);
agregarProductosALista(productosOtros, "productosOtros");

// Diezmillo
const subMenuDiezmillo = document.getElementById("Diezmillo");
const listaProductosDiezmillo = document.getElementById("productosDiezmillo");
const productosDiezmillo = ["Lomo Diezmillo - $204.80/KG",
"Lomo Diezmillo X Pieza - $194.80/KG"];

toggleSubMenu(tituloRes, subMenuDiezmillo, listaProductosDiezmillo);
agregarProductosALista(productosDiezmillo, "productosDiezmillo");

// Pescuezo
const subMenuPescuezo = document.getElementById("Pescuezo");
const listaProductosPescuezo = document.getElementById("productosPescuezo");
const productosPescuezo = ["Pescuezo de Res - $138.80/KG",
"Pescuezo de Res X Pieza - $123.80/KG",
"Retazo de Pescuezo de Res - $59.90/KG"];

toggleSubMenu(tituloRes, subMenuPescuezo, listaProductosPescuezo);
agregarProductosALista(productosPescuezo, "productosPescuezo");

// Platanillo
const subMenuPlatanillo = document.getElementById("Platanillo");
const listaProductosPlatanillo = document.getElementById("productosPlatanillo");
const productosPlatanillo = ["Platanillo - $155.80/KG",
"Platanillo x Pieza - $145.80/KG"];

toggleSubMenu(tituloRes, subMenuPlatanillo, listaProductosPlatanillo);
agregarProductosALista(productosPlatanillo, "productosPlatanillo");



// Familia "Cerdo"
// Chuletas de Cerdo
const tituloCerdo = document.getElementById("tituloCerdo");
const subMenuChuletasCerdo = document.getElementById("ChuletasCerdo");
const listaProductosChuletasCerdo = document.getElementById("productosChuletasCerdo");
const productosChuletasCerdo = [ "Chuleta Ahumada - $129.80/KG",
"Chuleta de Puerco Natural - $89.80/KG"];

toggleSubMenu(tituloCerdo, subMenuChuletasCerdo, listaProductosChuletasCerdo);
agregarProductosALista(productosChuletasCerdo, "productosChuletasCerdo");

// Costillas de Cerdo
const subMenuCostillasCerdo = document.getElementById("CostillasCerdo");
const listaProductosCostillasCerdo = document.getElementById("productosCostillasCerdo");
const productosCostillasCerdo = ["Costilla Cargada de Puerco - $149.80/KG",
"Costilla Cargada De Puerco P/Asar - $159.80/KG"];

toggleSubMenu(tituloCerdo, subMenuCostillasCerdo, listaProductosCostillasCerdo);
agregarProductosALista(productosCostillasCerdo, "productosCostillasCerdo");

// Chamorro de Cerdo
const subMenuChamorroCerdo = document.getElementById("ChamorroCerdo");
const listaProductosChamorroCerdo = document.getElementById("productosChamorroCerdo");
const productosChamorroCerdo = ["Chamorro de Puerco con Hueso - $52.80/KG"];

toggleSubMenu(tituloCerdo, subMenuChamorroCerdo, listaProductosChamorroCerdo);
agregarProductosALista(productosChamorroCerdo, "productosChamorroCerdo");

// Buche de Cerdo
const subMenuBucheCerdo = document.getElementById("BucheCerdo");
const listaProductosBucheCerdo = document.getElementById("productosBucheCerdo");
const productosBucheCerdo = ["Buche de Puerco - $99.80/KG",
"Buche De Puerco X Caja - $94.80/KG"];

toggleSubMenu(tituloCerdo, subMenuBucheCerdo, listaProductosBucheCerdo);
agregarProductosALista(productosBucheCerdo, "productosBucheCerdo");

// Espinazo de Cerdo
const subMenuEspinazoCerdo = document.getElementById("EspinazoCerdo");
const listaProductosEspinazoCerdo = document.getElementById("productosEspinazoCerdo");
const productosEspinazoCerdo = ["Espinazo de Puerco - $39.80/KG",
"Espinazo de Puerco X Caja - $34.80/KG"];

toggleSubMenu(tituloCerdo, subMenuEspinazoCerdo, listaProductosEspinazoCerdo);
agregarProductosALista(productosEspinazoCerdo, "productosEspinazoCerdo");

// Manitas de Cerdo
const subMenuManitasCerdo = document.getElementById("ManitasCerdo");
const listaProductosManitasCerdo = document.getElementById("productosManitasCerdo");
const productosManitasCerdo = ["Manitas de Puerco - $59.80/KG",
"Manitas de Puerco S/Pezuña - $69.80/KG"];

toggleSubMenu(tituloCerdo, subMenuManitasCerdo, listaProductosManitasCerdo);
agregarProductosALista(productosManitasCerdo, "productosManitasCerdo");


// Pecho de Cerdo
const subMenuPechoCerdo = document.getElementById("PechoCerdo");
const listaProductosPechoCerdo = document.getElementById("productosPechoCerdo");
const productosPechoCerdo = ["Pecho de Puerco - $72.80/KG",
"Pecho de Puerco X Caja - $67.80/KG"];

toggleSubMenu(tituloCerdo, subMenuPechoCerdo, listaProductosPechoCerdo);
agregarProductosALista(productosPechoCerdo, "productosPechoCerdo");

// Pic Nic de Cerdo
const subMenuPicNicCerdo = document.getElementById("PicNicCerdo");
const listaProductosPicNicCerdo = document.getElementById("productosPicNicCerdo");
const productosPicNicCerdo = ["Pic Nic - $79.80", "Pic Nic Adobada - $84.80",
 "PicNic en Maquina - $74.80", 
"Pic Nic Entero - $68.80"];

toggleSubMenu(tituloCerdo, subMenuPicNicCerdo, listaProductosPicNicCerdo);
agregarProductosALista(productosPicNicCerdo, "productosPicNicCerdo");

// Pierna de Cerdo
const subMenuPiernaCerdo = document.getElementById("PiernaCerdo");
const listaProductosPiernaCerdo = document.getElementById("productosPiernaCerdo");
const productosPiernaCerdo = ["Pierna Ahumada de Puerco C/H PZ - $120.00/KG",
"Pierna Ahumada de Puerco s/h Bafar - $139.80/KG",
"Pierna Ahumada S/H Rosarito - $225.00/KG",
"Pierna de Puerco Adobada - $99.80/KG",
"Pierna de Puerco Bisteceada - $89.80/KG",
"Pierna De Puerco C/H Sin Cuero - $72.80/KG",
"Pierna de Puerco C/Hueso y Cuero - $62.80/KG",
"Pierna de Puerco Molida - $62.80/KG",
"Pierna de Puerco Pza S/Hueso - $79.80/KG",
"Pierna de Puerco S/Hueso - $84.80/KG"];

toggleSubMenu(tituloCerdo, subMenuPiernaCerdo, listaProductosPiernaCerdo);
agregarProductosALista(productosPiernaCerdo, "productosPiernaCerdo");

// Punta de Cerdo
const subMenuPuntaCerdo = document.getElementById("PuntaCerdo");
const listaProductosPuntaCerdo = document.getElementById("productosPuntaCerdo");
const productosPuntaCerdo = ["Punta de Puerco - $74.80/KG",
"Punta de Puerco Adobada - $89.80/KG",
"Punta de Puerco Picada - $79.80/KG",
"Punta de Puerco Preparada - $84.80/KG",
"Punta de Puerco X Pieza - $69.80/KG"];

toggleSubMenu(tituloCerdo, subMenuPuntaCerdo, listaProductosPuntaCerdo);
agregarProductosALista(productosPuntaCerdo, "productosPuntaCerdo");

// Tocino de Cerdo
const subMenuTocinoCerdo = document.getElementById("TocinoCerdo");
const listaProductosTocinoCerdo = document.getElementById("productosTocinoCerdo");
const productosTocinoCerdo = ["Tocineta Rosarito - $185.00/KG",
"Tocineta S/Cuero de Puerco - $100.00/KG",
"Tocino Ahumado Premium - $158.80/KG",
"Tocino Farmer John - $309.80/KG",
"Tocino Recorte - $132.80/KG",
"Tocino Recorte Molido - $142.80/KG",
"Tocino Rosarito - $285.80/KG"];

toggleSubMenu(tituloCerdo, subMenuTocinoCerdo, listaProductosTocinoCerdo);
agregarProductosALista(productosTocinoCerdo, "productosTocinoCerdo");

// Tripas de Cerdo
const subMenuTripasCerdo = document.getElementById("TripasCerdo");
const listaProductosTripasCerdo = document.getElementById("productosTripasCerdo");
const productosTripasCerdo = ["Tripa para Embutir - $450.00/KG"];

toggleSubMenu(tituloCerdo, subMenuTripasCerdo, listaProductosTripasCerdo);
agregarProductosALista(productosTripasCerdo, "productosTripasCerdo");


// Cabezas de Cerdo
const subMenuCabezasCerdo = document.getElementById("CabezasCerdo");
const listaProductosCabezasCerdo = document.getElementById("productosCabezasCerdo");
const productosCabezasCerdo = ["Cabeza de Puerco - $54.80/KG"];

toggleSubMenu(tituloCerdo, subMenuCabezasCerdo, listaProductosCabezasCerdo);
agregarProductosALista(productosCabezasCerdo, "productosCabezasCerdo");

// Chicharron Prensado de Cerdo
const subMenuChicharronPrensadoCerdo = document.getElementById("ChicharronPrensadoCerdo");
const listaProductosChicharronPrensadoCerdo = document.getElementById("productosChicharronPrensadoCerdo");
const productosChicharronPrensadoCerdo = ["Chicharron de Puerco Prensado - $168.80/KG"];

toggleSubMenu(tituloCerdo, subMenuChicharronPrensadoCerdo, listaProductosChicharronPrensadoCerdo);
agregarProductosALista(productosChicharronPrensadoCerdo, "productosChicharronPrensadoCerdo");
// Cuero de Cerdo
const subMenuCueroCerdo = document.getElementById("CueroCerdo");
const listaProductosCueroCerdo = document.getElementById("productosCueroCerdo");
const productosCueroCerdo = ["Cuero de Puerco con Grasa - $42.80/KG",
"Cuero de Puerco con Grasa Cortado - $52.80/KG",
"Cuero de Puerco sin Grasa - $46.80/KG",
"Cuero de Puerco sin Grasa x Caja - $41.80/KG"];

toggleSubMenu(tituloCerdo, subMenuCueroCerdo, listaProductosCueroCerdo);
agregarProductosALista(productosCueroCerdo, "productosCueroCerdo");

// Otros de Cerdo
const subMenuOtrosCerdo = document.getElementById("OtrosCerdo");
const listaProductosOtrosCerdo = document.getElementById("productosOtrosCerdo");
const productosOtrosCerdo = ["Chorizo - $109.80/KG",
"Espaldilla de Puerco con Grasa - $72.00/KG",
"Grasa de Puerco - $60.00/KG",
"Lengua de Puerco - $117.80/KG",
"Papada de Puerco - $65.80/KG",
"Pecho de Puerco - $72.80/KG",
"Queso de Puerco Alpino - $146.80/KG",
"Queso de Puerco La Montañesa - $120.80/KG",
"Rancherito de Puerco - $94.80/KG",
"Sancocho - $135.80/KG"];

toggleSubMenu(tituloCerdo, subMenuOtrosCerdo, listaProductosOtrosCerdo);
agregarProductosALista(productosOtrosCerdo, "productosOtrosCerdo");

// Lomo de Cerdo
const subMenuLomoCerdo = document.getElementById("LomoCerdo");
const listaProductosLomoCerdo = document.getElementById("productosLomoCerdo");
const productosLomoCerdo = ["Lomo de Puerco S/H - $129.80/KG",
"Lomo de Puerco S/H PZ - $114.80/KG"];

toggleSubMenu(tituloCerdo, subMenuLomoCerdo, listaProductosLomoCerdo);
agregarProductosALista(productosLomoCerdo, "productosLomoCerdo");


// Familia "Pollo"
const tituloPollo = document.getElementById("tituloPollo");
const subMenuPollo = document.getElementById("Pollo");
const listaProductosPollo = document.getElementById("productosPollo");
const productosPollo = ["Alita de Pollo Picosa Bachoco - $106.80/KG",
"Alitas de Pollo Naturales - $87.80/KG",
"Alitas de Pollo Picosas - $125.80/KG"];

toggleSubMenu(tituloPollo, subMenuPollo, listaProductosPollo);
agregarProductosALista(productosPollo, "productosPollo");

// Pechugas de Pollo
const subMenuPechugasPollo = document.getElementById("PechugasPollo");
const listaProductosPechugasPollo = document.getElementById("productosPechugasPollo");
const productosPechugasPollo = ["Filete de Pechuga Empanizado - $167.80/KG",
"Pechuga Adobada - $111.90/KG",
"Pechuga de Pollo - $86.80/KG",
"Pechuga de Pollo Bachoco - $85.00/KG",
"Pechuga de Pollo Bisteceada - $91.80/KG",
"Pechuga de Pollo Brasileña - $72.80/KG",
"Pechuga De Pollo Con Hueso - $79.80/KG",
"Pechuga de Pollo Deshebrada - $172.80/KG",
"Pechuga de Pollo Preparada - $172.00/KG"];

toggleSubMenu(tituloPollo, subMenuPechugasPollo, listaProductosPechugasPollo);
agregarProductosALista(productosPechugasPollo, "productosPechugasPollo");

// Milanesas de Pollo
const subMenuMilanesasPollo = document.getElementById("MilanesasPollo");
const listaProductosMilanesasPollo = document.getElementById("productosMilanesasPollo");
const productosMilanesasPollo = ["Milanesa de Pechuga Empanizada - $141.80/KG",
"Milanesa de Pollo - $179.80/KG"];

toggleSubMenu(tituloPollo, subMenuMilanesasPollo, listaProductosMilanesasPollo);
agregarProductosALista(productosMilanesasPollo, "productosMilanesasPollo");

// Pierna de Pollo
const subMenuPiernaPollo = document.getElementById("PiernaPollo");
const listaProductosPiernaPollo = document.getElementById("productosPiernaPollo");
const productosPiernaPollo = ["Pierna Corta de Pollo - $39.80/KG",
"Pierna Corta de Pollo Bachoco - $53.80/KG",
"Pierna Corta De Pollo Preparada - $54.80/KG",
"Pierna de Pollo Bachoco - $53.80/KG",
"Pierna de Pollo Deshuesada - $79.80/KG",
"Pierna de Pollo Deshuesada Adobada - $94.80/KG",
"Pierna de Pollo Deshuesada Preparada - $90.80/KG",
"Pierna de Pollo Deshuesada X Caja - $71.80/CJ",
"Pierna de Pollo Picosa Bachoco - $65.80/KG",
"Pierna Y Muslo Con Hueso Preparada - $57.80/KG",
"Pierna y Muslo de Pollo - $34.59/KG",
"Pierna y Muslo x Caja - $520.00/KG",
"Pierna y Muslo x Caja Partida - $570.00/KG"];

toggleSubMenu(tituloPollo, subMenuPiernaPollo, listaProductosPiernaPollo);
agregarProductosALista(productosPiernaPollo, "productosPiernaPollo");

// Fajitas de Pollo
const subMenuFajitasPollo = document.getElementById("FajitasPollo");
const listaProductosFajitasPollo = document.getElementById("productosFajitasPollo");
const productosFajitasPollo = ["Fajitas de Pollo - $124.80/KG",
"Fajitas de Pollo Capeadas - $50.00/KG",
"Tender de Pollo Bachoco - $141.80/KG"];

toggleSubMenu(tituloPollo, subMenuFajitasPollo, listaProductosFajitasPollo);
agregarProductosALista(productosFajitasPollo, "productosFajitasPollo");

// Otros de Pollo
const subMenuOtrosPollo = document.getElementById("OtrosPollo");
const listaProductosOtrosPollo = document.getElementById("productosOtrosPollo");
const productosOtrosPollo = ["Chicken Nuggets - $47.50/KG",
"Hamburguesa de Pollo Empanizada - $56.90/KG",
"Molleja de Pollo Bachoco - $37.00/KG",
"Muslo de Pollo Bachoco - $56.00/KG",
"Nugget de Pollo Bachoco - $74.80/KG",
"Nugget Dedos de Pollo - $84.80/KG",
"Nuggets de Pollo - $59.90/KG",
"Pavo Entero - $88.80/KG",
"Pollo Empanizado Frito - $45.90/KG",
"Pollo Entero - $55.90/KG",
"Pollo Entero Bachoco - $65.80/KG"];

toggleSubMenu(tituloPollo, subMenuOtrosPollo, listaProductosOtrosPollo);
agregarProductosALista(productosOtrosPollo, "productosOtrosPollo");


// Familia "Mariscos"
const tituloMariscos = document.getElementById("tituloMariscos");
const subMenuMariscos = document.getElementById("Camarón");
const listaProductosMariscos = document.getElementById("productosCamarón");
const productosMariscos = ["Camaron Fresco Grande 21/25 - $235.00/KG",
"Camaron Fresco Mediano - $239.80/KG"];

toggleSubMenu(tituloMariscos, subMenuMariscos, listaProductosMariscos);
agregarProductosALista(productosMariscos, "productosCamarón");

// Filetes
const subMenuFiletes = document.getElementById("Filetes");
const listaProductosFiletes = document.getElementById("productosFiletes");
const productosFiletes = [
    "Filete Basa - $86.80/KG",
    "Filete Basa Empanizado - $114.80/KG",
    "Filete Basa X Caja - $69.80/KG",
    "Filete Tilapia - $76.80/KG",
    "Filete Tilapia X Caja - $66.80/KG"
        
];

toggleSubMenu(tituloMariscos, subMenuFiletes, listaProductosFiletes);
agregarProductosALista(productosFiletes, "productosFiletes");

// Almeja
const subMenuAlmeja = document.getElementById("Almeja");
const listaProductosAlmeja = document.getElementById("productosAlmeja");
const productosAlmeja = ["Almeja Choine Cruda Fortuna Del Mar - $60.00/KG"];

toggleSubMenu(tituloMariscos, subMenuAlmeja, listaProductosAlmeja);
agregarProductosALista(productosAlmeja, "productosAlmeja");

// Atún
const subMenuAtun = document.getElementById("Atun");
const listaProductosAtun = document.getElementById("productosAtun");
const productosAtun = [
    "Atun Lomo  - $256.80/KG",
    "Atun Medallon  - $333.80/KG"
];

toggleSubMenu(tituloMariscos, subMenuAtun, listaProductosAtun);
agregarProductosALista(productosAtun, "productosAtun");

// Marlin
const subMenuMarlin = document.getElementById("Marlin");
const listaProductosMarlin = document.getElementById("productosMarlin");
const productosMarlin = [
    "Marlin Ahumado - $199.80/KG"
];

toggleSubMenu(tituloMariscos, subMenuMarlin, listaProductosMarlin);
agregarProductosALista(productosMarlin, "productosMarlin");

// Pulpos
const subMenuPulpos = document.getElementById("Pulpos");
const listaProductosPulpos = document.getElementById("productosPulpos");
const productosPulpos = ["Pulpo 1-2 - $265.00/KG"];

toggleSubMenu(tituloMariscos, subMenuPulpos, listaProductosPulpos);
agregarProductosALista(productosPulpos, "productosPulpos");


// Familia "Embutidos"
const tituloEmbutidos = document.getElementById("tituloEmbutidos");
const subMenuEmbutidos = document.getElementById("Embutidos");
const listaProductosEmbutidos = document.getElementById("productosJamones");
var productosEmbutidos = [ "Jamon Ahumado de Pavo Farmhill - $172.80/KG",
"Jamon Ahumado de Pavo Farmhill - $172.80/KG",
"Jamon Burguer Duby - $88.80/KG",
"Jamon De Pavo Ahumado Burr - $182.80/KG",
"Jamon de Pavo Kir - $119.90/KG",
"Jamon de Pavo y Cerdo Zwan - $149.90/KG",
"Jamon de Pierna Ahumado - $125.50/KG",
"Jamon Lunch Bafar - $119.80/KG",
"Jamon Lunch Kir - $99.80/KG",
"Jamon Pechuga de Pavo Natural Zwan Pr - $390.00/KG",
"Jamon Pechuga Pavo Clasica Zwan Premium - $299.80/KG",
"Jamon Pierna Rosarito - $197.80/KG",
"Jamon Piernita Bafar - $124.80/KG",
"Jamon Piernita Zwan - $185.80/KG",
"Jamon Tradicional de Pavo Chimex - $101.80/KG",
"Jamon Virginia Bafar - $169.80/KG",
"Jamon Virginia Fud - $172.80/KG",
"Jamon Virginia Kir - $179.80/KG",
"Jamon Virginia Pavo Zwan - $156.80/KG"
];

toggleSubMenu(tituloEmbutidos, subMenuEmbutidos, listaProductosEmbutidos);
agregarProductosALista(productosEmbutidos, "productosJamones");

const subMenuSalchichas = document.getElementById("Salchichas");
const listaProductosSalchichas = document.getElementById("productosSalchichas");
const productosSalchichas = [    
    "Salchicha California Gold - $87.90/KG",
    "Salchicha de Pavo All American - $44.90/KG",
    "Salchicha de Pavo Burr - $99.80/KG",
    "Salchicha de Pavo Longmont - $96.80/KG",
    "Salchicha de Pavo Zwan kg - $73.80/KG",
    "Salchicha Jumbo de Pavo Burr - $52.90/KG",
    "Salchicha Torino Viena - $53.80/KG"];

toggleSubMenu(tituloEmbutidos, subMenuSalchichas, listaProductosSalchichas);
agregarProductosALista(productosSalchichas, "productosSalchichas");

//Peperoni
const subMenuPepperoni = document.getElementById("Pepperoni");
const listaProductosPepperoni = document.getElementById("productosPepperoni");
const productosPepperoni = ["Pepperoni - $187.80/KG"];

toggleSubMenu(tituloEmbutidos, subMenuPepperoni, listaProductosPepperoni);
agregarProductosALista(productosPepperoni, "productosPepperoni");

// Familia "Quesos"
const tituloQuesos = document.getElementById("tituloQuesos");
const subMenuQuesos = document.getElementById("Quesos");
const listaProductosQuesos = document.getElementById("productosChester");
const productosQuesos = ["Queso Chester 3 Castillos - $147.80/KG"];

toggleSubMenu(tituloQuesos, subMenuQuesos, listaProductosQuesos);
agregarProductosALista(productosQuesos, "productosChester");

// Chihuahua
const subMenuChihuahua = document.getElementById("Chihuahua");
const listaProductosChihuahua = document.getElementById("productosChihuahua");
const productosChihuahua = ["Queso Chihuahua - $169.80/KG"];

toggleSubMenu(tituloQuesos, subMenuChihuahua, listaProductosChihuahua);
agregarProductosALista(productosChihuahua, "productosChihuahua");

// Cotija
const subMenuCotija = document.getElementById("Cotija");
const listaProductosCotija = document.getElementById("productosCotija");
const productosCotija = ["Queso Cotija - $139.80/KG",
"Queso Cotija Excelsior - $182.80/KG",
"Queso Cotija Rayado - $139.80/KG"];

toggleSubMenu(tituloQuesos, subMenuCotija, listaProductosCotija);
agregarProductosALista(productosCotija, "productosCotija");

// Cincho
const subMenuCincho = document.getElementById("Cincho");
const listaProductosCincho = document.getElementById("productosCincho");
const productosCincho = ["Queso de Cincho - $159.80/KG"];

toggleSubMenu(tituloQuesos, subMenuCincho, listaProductosCincho);
agregarProductosALista(productosCincho, "productosCincho");

// Fresco
const subMenuFresco = document.getElementById("Fresco");
const listaProductosFresco = document.getElementById("productosFresco");
const productosFresco = ["Queso Fresco - $139.80/KG"];

toggleSubMenu(tituloQuesos, subMenuFresco, listaProductosFresco);
agregarProductosALista(productosFresco, "productosFresco");

// Monterrey
const subMenuMonterrey = document.getElementById("Monterrey");
const listaProductosMonterrey = document.getElementById("productosMonterrey");
const productosMonterrey = ["Queso Monterrey Jack - $129.80/KG",
"Queso Monterrey Jack Jalapeño - $139.80/KG"];

toggleSubMenu(tituloQuesos, subMenuMonterrey, listaProductosMonterrey);
agregarProductosALista(productosMonterrey, "productosMonterrey");

// Mozzarella
const subMenuMozzarella = document.getElementById("Mozzarella");
const listaProductosMozzarella = document.getElementById("productosMozzarella");
const productosMozzarella = ["Queso Mozzarella - $139.80/KG",
"Queso Mozzarella Rayado - $139.80/KG"];

toggleSubMenu(tituloQuesos, subMenuMozzarella, listaProductosMozzarella);
agregarProductosALista(productosMozzarella, "productosMozzarella");

// Oaxaca
const subMenuOaxaca = document.getElementById("Oaxaca");
const listaProductosOaxaca = document.getElementById("productosOaxaca");
const productosOaxaca = ["Queso Oaxaca - $175.80/KG"];

toggleSubMenu(tituloQuesos, subMenuOaxaca, listaProductosOaxaca);
agregarProductosALista(productosOaxaca, "productosOaxaca");

// Panela
const subMenuPanela = document.getElementById("Panela");
const listaProductosPanela = document.getElementById("productosPanela");
const productosPanela = ["Queso Panela - $136.80/KG"];

toggleSubMenu(tituloQuesos, subMenuPanela, listaProductosPanela);
agregarProductosALista(productosPanela, "productosPanela");

// Ranchero
const subMenuRanchero = document.getElementById("Ranchero");
const listaProductosRanchero = document.getElementById("productosRanchero");
const productosRanchero = ["Queso Ranchero - $120.00/KG"];

toggleSubMenu(tituloQuesos, subMenuRanchero, listaProductosRanchero);
agregarProductosALista(productosRanchero, "productosRanchero");


