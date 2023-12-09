// Variables para rastrear el estado de los submenús
let subMenuVisible = false;
let productosResVisible = false;
let productosCerdoVisible = false;
let productosPolloVisible = false;
let productosMariscosVisible = false;
let productosEmbutidosVisible = false;
let productosQuesosVisible = false;


function toggleSubMenu(titulo, subMenu, listaProductos) {
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
const productosChuletas = ["Chuleta de res con queso - $199.80",
    "Chuleta Deshuesada - $259,80",
    "Chuleta Deshuesada de res x Pieza - $259.80"];

toggleSubMenu(tituloRes, subMenuChuletas, listaProductosChuletas);
agregarProductosALista(productosChuletas, "productosChuletas");

// Ejemplo para un nuevo submenú "Cortes Finos"
const subMenuCortesFinos = document.getElementById("CortesFinos");
const listaProductosCortesFinos = document.getElementById("productosCortesFinos");
const productosCortesFinos = ["COWBOY DE RES - $299.00",
    "Filete de res $389.00",
    "New York - $244.80",
    "New York Pieza - $215.80",
    "New York Pieza Prep. - $224.80",
    "New York Planca - $254.80",
    "Picaña de res kg - $245.00",
    "Rib Eye - $274.80",
    "Rib Eye x Pieza - $234.80",
    "T bone - $285.00",
    "Tomahawk Res - $345.00"];

toggleSubMenu(tituloRes, subMenuCortesFinos, listaProductosCortesFinos);
agregarProductosALista(productosCortesFinos, "productosCortesFinos");

// Costillas
const subMenuCostillas = document.getElementById("Costillas");
const listaProductosCostillas = document.getElementById("productosCostillas");
const productosCostillas = ["Costilla de Res - $345.00",
    "Costilla de Res Cargada Nacional x Pieza - $115.8",
    "Costilla de Res para Asar - $114.80",
    "Costilla de Res Short Rib Americana - $299.80",
    "Costilla de Res x Pieza - $94.80"];

toggleSubMenu(tituloRes, subMenuCostillas, listaProductosCostillas);
agregarProductosALista(productosCostillas, "productosCostillas");

// Pulpas
const subMenuPulpas = document.getElementById("Pulpas");
const listaProductosPulpas = document.getElementById("productosPulpas");
const productosPulpas = ["Pulpa Bola - $199.80",
        "Pulpa Bola x Pieza - $189.80",
        "Pulpa Larga - $149.80",
        "Pulpa Larga Molida - $156.80 ",
        "Pulpla Larga Plancha - $159.80",
        "Pulpa Larga Preparada - $169.80",
        "Pulpa Larga x Pieza - $139.80",
        "Pulpa negra - $196.80",
        "Pulpa Negra Preparada $206.80",
        "Pulpa negra x Pieza - $186.80",
        "Pulpa Negra - $196.80",
        "Pulpa Negra Preparada - $206.80",
        "Pulpa Negra x Pieza - $186.80",
        "Pulpa Paleta para Plancha - $161.80",
        "Pulpa Paleta Picada kg - $161.80",
        "Pulpa Paleta por caja - $142.80", 
        "Pulpa Paleta por Pieza - $143.80",
        "Pulpa Paleta Preparada $161.80",
        "Pulpa Paleta x Pz Preparada - $143.80",
        "Pulpa Palomilla - $204.80",
        "Pulpa Palomilla x Pieza - $194.80"];

toggleSubMenu(tituloRes, subMenuPulpas, listaProductosPulpas);
agregarProductosALista(productosPulpas, "productosPulpas");

// Chamorro
const subMenuChamorro = document.getElementById("Chamorro");
const listaProductosChamorro = document.getElementById("productosChamorro");
const productosChamorro = ["Chamorro de res - $125.80",
    "Chamorro de res x Pz - $115.80"];

toggleSubMenu(tituloRes, subMenuChamorro, listaProductosChamorro);
agregarProductosALista(productosChamorro, "productosChamorro");

// Espinazo
const subMenuEspinazo = document.getElementById("Espinazo");
const listaProductosEspinazo = document.getElementById("productosEspinazo");
const productosEspinazo = ["Espinazo de Res - $59.80"];

toggleSubMenu(tituloRes, subMenuEspinazo, listaProductosEspinazo);
agregarProductosALista(productosEspinazo, "productosEspinazo");

// Milanesas
const subMenuMilanesas = document.getElementById("Milanesas");
const listaProductosMilanesas = document.getElementById("productosMilanesas");
const productosMilanesas = ["Milanesa de Res - $184.80"];

toggleSubMenu(tituloRes, subMenuMilanesas, listaProductosMilanesas);
agregarProductosALista(productosMilanesas, "productosMilanesas");

// Pata
const subMenuPata = document.getElementById("Pata");
const listaProductosPata = document.getElementById("productosPata");
const productosPata = ["Pata de Res - $79.80",
 "Pata S/Pezuña - $89.80"];

toggleSubMenu(tituloRes, subMenuPata, listaProductosPata);
agregarProductosALista(productosPata, "productosPata");

// Pecho
const subMenuPecho = document.getElementById("Pecho");
const listaProductosPecho = document.getElementById("productosPecho");
const productosPecho = ["Pecho de Res - $184.80",
 "Pecho de Res Bisteceado - $184.80",
  "Pecho de Res x Pieza - $150.80"];

toggleSubMenu(tituloRes, subMenuPecho, listaProductosPecho);
agregarProductosALista(productosPecho, "productosPecho");

// Suadero
const subMenuSuadero = document.getElementById("Suadero");
const listaProductosSuadero = document.getElementById("productosSuadero");
const productosSuadero = ["Suadero Nacional - $134.80",
 "Suadero Nacional Limpio - $179.80",
  "Suadero x Pieza - $129.80"];

toggleSubMenu(tituloRes, subMenuSuadero, listaProductosSuadero);
agregarProductosALista(productosSuadero, "productosSuadero");

// Tripas
const subMenuTripas = document.getElementById("Tripas");
const listaProductosTripas = document.getElementById("productosTripas");
const productosTripas = ["Tripas de Res - $79.80",
    "Tripa de Res Precocida - $148.80",
    "Tripa de Res Trenzada - $89.80",
    "Tripa de Res x Caja - $69.80",
    "Tripa para embutir - $450.00"];

toggleSubMenu(tituloRes, subMenuTripas, listaProductosTripas);
agregarProductosALista(productosTripas, "productosTripas");

// Cabezas
const subMenuCabezas = document.getElementById("Cabezas");
const listaProductosCabezas = document.getElementById("productosCabezas");
const productosCabezas = ["Cabeza de Res cocida por kilo - $1399.00",
 "Cabeza Deshuesada Res x Set - $49.80",];

toggleSubMenu(tituloRes, subMenuCabezas, listaProductosCabezas);
agregarProductosALista(productosCabezas, "productosCabezas");

// Carne Molida
const subMenuCarneMolida = document.getElementById("CarneMolida");
const listaProductosCarneMolida = document.getElementById("productosCarneMolida");
const productosCarneMolida = ["Carne Molida - $149.80",
 "Carne P/Birria - $149.80"];

toggleSubMenu(tituloRes, subMenuCarneMolida, listaProductosCarneMolida);
agregarProductosALista(productosCarneMolida, "productosCarneMolida");

// Carne Seca
const subMenuCarneSeca = document.getElementById("CarneSeca");
const listaProductosCarneSeca = document.getElementById("productosCarneSeca");
const productosCarneSeca = ["Carne Seca/Cecina - $650.00"];

toggleSubMenu(tituloRes, subMenuCarneSeca, listaProductosCarneSeca);
agregarProductosALista(productosCarneSeca, "productosCarneSeca");

// Hueso
const subMenuHueso = document.getElementById("Hueso");
const listaProductosHueso = document.getElementById("productosHueso");
const productosHueso = ["Hueso Blanco - $37.80",
 "Hueso con Tuetano - $80.80",
  "Hueso Perico - $49.80"];

toggleSubMenu(tituloRes, subMenuHueso, listaProductosHueso);
agregarProductosALista(productosHueso, "productosHueso");

// Arrachera
const subMenuArrachera = document.getElementById("Arrachera");
const listaProductosArrachera = document.getElementById("productosArrachera");
const productosArrachera = ["Arrachera - $239.80",
    "Arrachera FlapMeat - $239.80",
    "Arrachera Marinada - $262.80",
    "Arrachera por Pieza - $209.80"];

toggleSubMenu(tituloRes, subMenuArrachera, listaProductosArrachera);
agregarProductosALista(productosArrachera, "productosArrachera");

// Menudo
const subMenuMenudo = document.getElementById("Menudo");
const listaProductosMenudo = document.getElementById("productosMenudo");
const productosMenudo = ["Menudo - $109.80",
    "Menudo Americano x Caja - $105.80",
    "Menudo Mexicano x Caja - $99.80",
    "Menudo Picado - $114.80"];

toggleSubMenu(tituloRes, subMenuMenudo, listaProductosMenudo);
agregarProductosALista(productosMenudo, "productosMenudo");

// Otros
const subMenuOtros = document.getElementById("Otros");
const listaProductosOtros = document.getElementById("productosOtros");
const productosOtros = ["Carne Deshebrada de res - $299.80",
    "Chivo x Canal - $175.80",
    "Cola de Res - $135.80",
    "Cuete de Res - $179.80",
    "Cuete de Res x Pieza - $173.80",
    "Giba de Res x Pieza - $114.80",
    "Grasa de Res - $49.80",
    "Grasa de Res Molida - $53.80",
    "Higado - $58.80"];

toggleSubMenu(tituloRes, subMenuOtros, listaProductosOtros);
agregarProductosALista(productosOtros, "productosOtros");

// Diezmillo
const subMenuDiezmillo = document.getElementById("Diezmillo");
const listaProductosDiezmillo = document.getElementById("productosDiezmillo");
const productosDiezmillo = ["Lomo Diezmillo - $204.80",
 "Lomo Diezmillo x Pieza - $194.80"];

toggleSubMenu(tituloRes, subMenuDiezmillo, listaProductosDiezmillo);
agregarProductosALista(productosDiezmillo, "productosDiezmillo");

// Pescuezo
const subMenuPescuezo = document.getElementById("Pescuezo");
const listaProductosPescuezo = document.getElementById("productosPescuezo");
const productosPescuezo = ["Pescuezo de Res - $138.80",
 "Pescuezo de Res x Pieza - $194.80","Retazo de pescuezo de Res - $59.90"];

toggleSubMenu(tituloRes, subMenuPescuezo, listaProductosPescuezo);
agregarProductosALista(productosPescuezo, "productosPescuezo");

// Platanillo
const subMenuPlatanillo = document.getElementById("Platanillo");
const listaProductosPlatanillo = document.getElementById("productosPlatanillo");
const productosPlatanillo = ["Platanillo - $155.80",
 "Planillo x Pieza - $145.80"];

toggleSubMenu(tituloRes, subMenuPlatanillo, listaProductosPlatanillo);
agregarProductosALista(productosPlatanillo, "productosPlatanillo");



// Familia "Cerdo"
// Chuletas de Cerdo
const tituloCerdo = document.getElementById("tituloCerdo");
const subMenuChuletasCerdo = document.getElementById("ChuletasCerdo");
const listaProductosChuletasCerdo = document.getElementById("productosChuletasCerdo");
const productosChuletasCerdo = [ "Chuleta Ahumada - $128.80",
 "Chuleta de puerco Natural - $89.80"];

toggleSubMenu(tituloCerdo, subMenuChuletasCerdo, listaProductosChuletasCerdo);
agregarProductosALista(productosChuletasCerdo, "productosChuletasCerdo");

// Costillas de Cerdo
const subMenuCostillasCerdo = document.getElementById("CostillasCerdo");
const listaProductosCostillasCerdo = document.getElementById("productosCostillasCerdo");
const productosCostillasCerdo = ["Costilla Cargada de Puerco - $149.80",
 "Costilla Cargada de Puerco P/Asar - $89.80"];

toggleSubMenu(tituloCerdo, subMenuCostillasCerdo, listaProductosCostillasCerdo);
agregarProductosALista(productosCostillasCerdo, "productosCostillasCerdo");

// Chamorro de Cerdo
const subMenuChamorroCerdo = document.getElementById("ChamorroCerdo");
const listaProductosChamorroCerdo = document.getElementById("productosChamorroCerdo");
const productosChamorroCerdo = ["Chamorro de puerco con hueso - $52.80"];

toggleSubMenu(tituloCerdo, subMenuChamorroCerdo, listaProductosChamorroCerdo);
agregarProductosALista(productosChamorroCerdo, "productosChamorroCerdo");

// Buche de Cerdo
const subMenuBucheCerdo = document.getElementById("BucheCerdo");
const listaProductosBucheCerdo = document.getElementById("productosBucheCerdo");
const productosBucheCerdo = ["Buche de Puerco - $99.80", "Buche de Puerco x Caja - $99.80"];

toggleSubMenu(tituloCerdo, subMenuBucheCerdo, listaProductosBucheCerdo);
agregarProductosALista(productosBucheCerdo, "productosBucheCerdo");

// Espinazo de Cerdo
const subMenuEspinazoCerdo = document.getElementById("EspinazoCerdo");
const listaProductosEspinazoCerdo = document.getElementById("productosEspinazoCerdo");
const productosEspinazoCerdo = ["Espinazo de Puerco - $39.80",
 "Espinazo de Puerco x Caja - $34.80"];

toggleSubMenu(tituloCerdo, subMenuEspinazoCerdo, listaProductosEspinazoCerdo);
agregarProductosALista(productosEspinazoCerdo, "productosEspinazoCerdo");

// Manitas de Cerdo
const subMenuManitasCerdo = document.getElementById("ManitasCerdo");
const listaProductosManitasCerdo = document.getElementById("productosManitasCerdo");
const productosManitasCerdo = ["Manita de Puerco - $59.80",
 "Manitas de Puerco S/Pezuña - $69.80"];

toggleSubMenu(tituloCerdo, subMenuManitasCerdo, listaProductosManitasCerdo);
agregarProductosALista(productosManitasCerdo, "productosManitasCerdo");


// Pecho de Cerdo
const subMenuPechoCerdo = document.getElementById("PechoCerdo");
const listaProductosPechoCerdo = document.getElementById("productosPechoCerdo");
const productosPechoCerdo = ["Pecho de puerco - $72.80",
 "Pecho de Puerco x Caja $67.80"];

toggleSubMenu(tituloCerdo, subMenuPechoCerdo, listaProductosPechoCerdo);
agregarProductosALista(productosPechoCerdo, "productosPechoCerdo");

// Pic Nic de Cerdo
const subMenuPicNicCerdo = document.getElementById("PicNicCerdo");
const listaProductosPicNicCerdo = document.getElementById("productosPicNicCerdo");
const productosPicNicCerdo = ["Pic Nic - $69.80", "Pic Nic Adobada - $84.80",
 "PicNic en Maquina - $74.80", 
"Pic Nic Entero - $68.80"];

toggleSubMenu(tituloCerdo, subMenuPicNicCerdo, listaProductosPicNicCerdo);
agregarProductosALista(productosPicNicCerdo, "productosPicNicCerdo");

// Pierna de Cerdo
const subMenuPiernaCerdo = document.getElementById("PiernaCerdo");
const listaProductosPiernaCerdo = document.getElementById("productosPiernaCerdo");
const productosPiernaCerdo = ["Pierna Ahumada de Puerco C/H PZ - $120.00",
"Pierna Ahumada de Puerco s/h Bafar - $139.80",
"Pierna Ahumada S/H Rosarito - $225.00",
"Pierna de Puerco Adobada - $99.80",
"Pierna de Puerco Bisteceada - $89.80",
"Pierna De Puerco C/H Sin Cuero - $72.80",
"Pierna de Puerco C/Hueso y Cuero - $62.80",
"Pierna de Puerco Molida - $62.80",
"Pierna de Puerco Pza S/Hueso - $79.80",
"Pierna de Puerco S/Hueso - $84.80" ];

toggleSubMenu(tituloCerdo, subMenuPiernaCerdo, listaProductosPiernaCerdo);
agregarProductosALista(productosPiernaCerdo, "productosPiernaCerdo");

// Punta de Cerdo
const subMenuPuntaCerdo = document.getElementById("PuntaCerdo");
const listaProductosPuntaCerdo = document.getElementById("productosPuntaCerdo");
const productosPuntaCerdo = ["Punta de Puerco - $74.80",
"Punta de Puerco Adobada - $89.80",
"Punta de Puerco Picada - $79.80",
"Punta de Puerco Preparada - $84.80",
"Punta de Puerco X Pieza Kg - $69.80"];

toggleSubMenu(tituloCerdo, subMenuPuntaCerdo, listaProductosPuntaCerdo);
agregarProductosALista(productosPuntaCerdo, "productosPuntaCerdo");

// Tocino de Cerdo
const subMenuTocinoCerdo = document.getElementById("TocinoCerdo");
const listaProductosTocinoCerdo = document.getElementById("productosTocinoCerdo");
const productosTocinoCerdo = ["Tocineta Rosarito - $185.00", 
"Tocineta S/Cuero de Puerco  - $100.00",
"Tocino Ahumado Premium - $158.80",
"Tocino Farmer john - $309.80",
"Tocino Recorte - $132.80",
"Tocino Recorte Molido - $142.80",
"Tocino Rosarito - $285.80"];

toggleSubMenu(tituloCerdo, subMenuTocinoCerdo, listaProductosTocinoCerdo);
agregarProductosALista(productosTocinoCerdo, "productosTocinoCerdo");

// Tripas de Cerdo
const subMenuTripasCerdo = document.getElementById("TripasCerdo");
const listaProductosTripasCerdo = document.getElementById("productosTripasCerdo");
const productosTripasCerdo = ["Tripa para embutir - $450.00"];

toggleSubMenu(tituloCerdo, subMenuTripasCerdo, listaProductosTripasCerdo);
agregarProductosALista(productosTripasCerdo, "productosTripasCerdo");


// Cabezas de Cerdo
const subMenuCabezasCerdo = document.getElementById("CabezasCerdo");
const listaProductosCabezasCerdo = document.getElementById("productosCabezasCerdo");
const productosCabezasCerdo = ["Cabeza de Puerco - $54.80"];

toggleSubMenu(tituloCerdo, subMenuCabezasCerdo, listaProductosCabezasCerdo);
agregarProductosALista(productosCabezasCerdo, "productosCabezasCerdo");

// Chicharron Prensado de Cerdo
const subMenuChicharronPrensadoCerdo = document.getElementById("ChicharronPrensadoCerdo");
const listaProductosChicharronPrensadoCerdo = document.getElementById("productosChicharronPrensadoCerdo");
const productosChicharronPrensadoCerdo = ["Chicharron de Puerco Prensado - $168.80"];

toggleSubMenu(tituloCerdo, subMenuChicharronPrensadoCerdo, listaProductosChicharronPrensadoCerdo);
agregarProductosALista(productosChicharronPrensadoCerdo, "productosChicharronPrensadoCerdo");
// Cuero de Cerdo
const subMenuCueroCerdo = document.getElementById("CueroCerdo");
const listaProductosCueroCerdo = document.getElementById("productosCueroCerdo");
const productosCueroCerdo = ["Cuero de puerco con grasa - $42.80",
"Cuero de puerco con grasa cortado - $52.80",
"Cuero de Puerco sin grasa - $46.80",
"Cuero de Puerco sin grasa x Caja - $41.80"];

toggleSubMenu(tituloCerdo, subMenuCueroCerdo, listaProductosCueroCerdo);
agregarProductosALista(productosCueroCerdo, "productosCueroCerdo");

// Otros de Cerdo
const subMenuOtrosCerdo = document.getElementById("OtrosCerdo");
const listaProductosOtrosCerdo = document.getElementById("productosOtrosCerdo");
const productosOtrosCerdo = ["Chorizo - $109.80",
"Espaldilla de Puerco con Grasa - $72.80",
"Grasa de Puerco - $60.00",
"Lengua de Puerco kg - $117.80",
"Papada de Puerco - $65.80",
"Pecho de Puerco $72.80",
"Queso de Puerco Alpino - $146.80",
"Queso de Puerco La Montañesa Kg - $120.80",
"Rancherito de Puerco - $94.80",
"Sancocho - $135.80"];

toggleSubMenu(tituloCerdo, subMenuOtrosCerdo, listaProductosOtrosCerdo);
agregarProductosALista(productosOtrosCerdo, "productosOtrosCerdo");

// Lomo de Cerdo
const subMenuLomoCerdo = document.getElementById("LomoCerdo");
const listaProductosLomoCerdo = document.getElementById("productosLomoCerdo");
const productosLomoCerdo = ["Lomo de Puerco S/H - $129.80", "Lomo de Puerco S/H - $114.80"];

toggleSubMenu(tituloCerdo, subMenuLomoCerdo, listaProductosLomoCerdo);
agregarProductosALista(productosLomoCerdo, "productosLomoCerdo");


// Familia "Pollo"
const tituloPollo = document.getElementById("tituloPollo");
const subMenuPollo = document.getElementById("Pollo");
const listaProductosPollo = document.getElementById("productosPollo");
const productosPollo = ["Alita de Pollo Picosa Bachoco - $106.80",
"Alitas de Pollo Naturales - $87.80",
"Alitas de Pollo Picosas - $125.80"];

toggleSubMenu(tituloPollo, subMenuPollo, listaProductosPollo);
agregarProductosALista(productosPollo, "productosPollo");

// Pechugas de Pollo
const subMenuPechugasPollo = document.getElementById("PechugasPollo");
const listaProductosPechugasPollo = document.getElementById("productosPechugasPollo");
const productosPechugasPollo = ["Filete de Pechuga Empanizado - $167.80",
"Pechuga Adobada - $111.90",
"Pechuga de Pollo - $86.80",
"Pechuga de Pollo Bachoco - $85.00",
"Pechuga de Pollo Bisteceada - $91.80",
"Pechuga de Pollo Brasileña - $72.80",
"Pechuga De Pollo Con Hueso - $79.70",
"Pechuga de Pollo Deshebrada - $172.80",
"Pechuga de Pollo Preparada - $170.00"];

toggleSubMenu(tituloPollo, subMenuPechugasPollo, listaProductosPechugasPollo);
agregarProductosALista(productosPechugasPollo, "productosPechugasPollo");

// Milanesas de Pollo
const subMenuMilanesasPollo = document.getElementById("MilanesasPollo");
const listaProductosMilanesasPollo = document.getElementById("productosMilanesasPollo");
const productosMilanesasPollo = ["Milanesa de Pollo - $179.80", 
" Milanesa de Pechuga Empenizada - $141.80"];

toggleSubMenu(tituloPollo, subMenuMilanesasPollo, listaProductosMilanesasPollo);
agregarProductosALista(productosMilanesasPollo, "productosMilanesasPollo");

// Pierna de Pollo
const subMenuPiernaPollo = document.getElementById("PiernaPollo");
const listaProductosPiernaPollo = document.getElementById("productosPiernaPollo");
const productosPiernaPollo = ["Pierna Corta de Pollo - $39.80",
"Pierna Corta de Pollo Bachoco - $53.80",
"Pierna Corta De Pollo Preparada - $54.80",
"Pierna de Pollo Bachoco - $53.80",
"Pierna de Pollo Deshuesada - $79.80",
"Pierna de Pollo Deshuesada Adobada - $98.80",
"Pierna de Pollo Deshuesada Preparada - $90.80",
"Pierna de Pollo Deshuesada X Caja - $71.80",
"Pierna de Pollo Picosa Bachoco - $65.80",
"Pierna Y Muslo Con Hueso Preparada $57.80",
"Pierna y Muslo de Pollo - $34.59",
"Pierna y Muslo x Caja - $520.00",
"Pierna y Muslo x Caja Partida - $570.00"];

toggleSubMenu(tituloPollo, subMenuPiernaPollo, listaProductosPiernaPollo);
agregarProductosALista(productosPiernaPollo, "productosPiernaPollo");

// Fajitas de Pollo
const subMenuFajitasPollo = document.getElementById("FajitasPollo");
const listaProductosFajitasPollo = document.getElementById("productosFajitasPollo");
const productosFajitasPollo = ["Fajitas de Pollo - $124.80",
"Fajitas de Pollo Capeadas - $50.00",
"Tender de Pollo Bachoco Kg - 141.80"];

toggleSubMenu(tituloPollo, subMenuFajitasPollo, listaProductosFajitasPollo);
agregarProductosALista(productosFajitasPollo, "productosFajitasPollo");

// Otros de Pollo
const subMenuOtrosPollo = document.getElementById("OtrosPollo");
const listaProductosOtrosPollo = document.getElementById("productosOtrosPollo");
const productosOtrosPollo = ["Chicken Nuggets - $47.50",
"Hamburguesa de Pollo Empanizada - $56.90",
"Molleja de Pollo Bachoco - $37.00",
"Muslo de Pollo Bachoco - $56.00",
"Nugget de Pollo Bachoco kg - $74.80",
"Nugget Dedos de Pollo - $84.80",
"Nuggets de pollo - $59.90",
"Pavo Entero - $88.80",
"Pollo Empanizado Frito - $45.90",
"Pollo Entero - $55.90",
"Pollo Entero Bachoco - $65.80"];

toggleSubMenu(tituloPollo, subMenuOtrosPollo, listaProductosOtrosPollo);
agregarProductosALista(productosOtrosPollo, "productosOtrosPollo");


// Familia "Mariscos"
const tituloMariscos = document.getElementById("tituloMariscos");
const subMenuMariscos = document.getElementById("Camarón");
const listaProductosMariscos = document.getElementById("productosCamarón");
const productosMariscos = ["Camaron Fresco Grande 21/25 - $235.00",
"Camaron Fresco Mediano - $239.80"];

toggleSubMenu(tituloMariscos, subMenuMariscos, listaProductosMariscos);
agregarProductosALista(productosMariscos, "productosCamarón");

// Filetes
const subMenuFiletes = document.getElementById("Filetes");
const listaProductosFiletes = document.getElementById("productosFiletes");
const productosFiletes = [
    "Filete Basa - $86.80",
    "Filete Basa Empanizado - $114.80",
    "Filete Basa X Caja - $69.80",
    "Filete Tilapia - $76.80",
    "Filete Tilapia X Caja - $66.80",
    "Salmon Kg - $711.80"
];

toggleSubMenu(tituloMariscos, subMenuFiletes, listaProductosFiletes);
agregarProductosALista(productosFiletes, "productosFiletes");

// Almeja
const subMenuAlmeja = document.getElementById("Almeja");
const listaProductosAlmeja = document.getElementById("productosAlmeja");
const productosAlmeja = ["Almeja Choine Cruda Fortuna Del Mar 1k - $60.00"];

toggleSubMenu(tituloMariscos, subMenuAlmeja, listaProductosAlmeja);
agregarProductosALista(productosAlmeja, "productosAlmeja");

// Atún
const subMenuAtun = document.getElementById("Atun");
const listaProductosAtun = document.getElementById("productosAtun");
const productosAtun = [
    "Atun Lomo Kg - $256.80",
    "Atun Medallon Kg - $333.80"
];

toggleSubMenu(tituloMariscos, subMenuAtun, listaProductosAtun);
agregarProductosALista(productosAtun, "productosAtun");

// Marlin
const subMenuMarlin = document.getElementById("Marlin");
const listaProductosMarlin = document.getElementById("productosMarlin");
const productosMarlin = [
    "Marlin Ahumado - $199.80"
];

toggleSubMenu(tituloMariscos, subMenuMarlin, listaProductosMarlin);
agregarProductosALista(productosMarlin, "productosMarlin");

// Pulpos
const subMenuPulpos = document.getElementById("Pulpos");
const listaProductosPulpos = document.getElementById("productosPulpos");
const productosPulpos = ["Pulpo 12 - $265.00"];

toggleSubMenu(tituloMariscos, subMenuPulpos, listaProductosPulpos);
agregarProductosALista(productosPulpos, "productosPulpos");


// Familia "Embutidos"
const tituloEmbutidos = document.getElementById("tituloEmbutidos");
const subMenuEmbutidos = document.getElementById("Embutidos");
const listaProductosEmbutidos = document.getElementById("productosJamones");
const productosEmbutidos = [   
"Jamon Ahumado de Pavo Farmhill - $172.80",
"Jamon Burguer Duby - $88.8",
"Jamon De Pavo Ahumado Burr - $182.80",
"Jamon de Pavo Kir - $119.90",
"Jamon de Pavo y Cerdo Zwan - $149.90",
"Jamon de Pierna Ahumado kg - $125.50",
"Jamon Lunch Bafar - $119.80",
"Jamon Lunch Kir - $99.80",
"Jamon Pechuga de Pavo Natural Zwan Pr - $390.00",
"Jamon Pechuga Pavo Clasica Zwan Premium - $299.80",
"Jamon Pierna Rosarito - $197.80",
"Jamon Piernita Bafar Kg - $124.80",
"Jamon Piernita Zwan - $185.80",
"Jamon Tradicional de Pavo Chimex - $101.80",
"Jamon Virginia Bafar - $169.80",
"Jamon Virginia Fud - $172.80",
"Jamon Virginia Kir - $179.80",
"Jamon Virginia Pavo Zwan - $156.80"];

toggleSubMenu(tituloEmbutidos, subMenuEmbutidos, listaProductosEmbutidos);
agregarProductosALista(productosEmbutidos, "productosJamones");

const subMenuSalchichas = document.getElementById("Salchichas");
const listaProductosSalchichas = document.getElementById("productosSalchichas");
const productosSalchichas = [    
"Salchicha California Gold - $87.90",
"Salchicha de Pavo All American - $44.90",
"Salchicha de Pavo Burr - $99.80",
"Salchicha de Pavo Longmont - $96.80",
"Salchicha de Pavo Zwan kg - $73.80",
"Salchicha Jumbo de Pavo Burr - $52.90",
"Salchicha Torino Viena - $53.80"];

toggleSubMenu(tituloEmbutidos, subMenuSalchichas, listaProductosSalchichas);
agregarProductosALista(productosSalchichas, "productosSalchichas");

//Peperoni
const subMenuPepperoni = document.getElementById("Pepperoni");
const listaProductosPepperoni = document.getElementById("productosPepperoni");
const productosPepperoni = ["Pepperoni - $187.80"];

toggleSubMenu(tituloEmbutidos, subMenuPepperoni, listaProductosPepperoni);
agregarProductosALista(productosPepperoni, "productosPepperoni");

// Familia "Quesos"
const tituloQuesos = document.getElementById("tituloQuesos");
const subMenuQuesos = document.getElementById("Quesos");
const listaProductosQuesos = document.getElementById("productosChester");
const productosQuesos = ["Queso Chester 3 Castillos - $147.80"];

toggleSubMenu(tituloQuesos, subMenuQuesos, listaProductosQuesos);
agregarProductosALista(productosQuesos, "productosChester");

// Chihuahua
const subMenuChihuahua = document.getElementById("Chihuahua");
const listaProductosChihuahua = document.getElementById("productosChihuahua");
const productosChihuahua = [" Queso Chihuahua - $168.80"];

toggleSubMenu(tituloQuesos, subMenuChihuahua, listaProductosChihuahua);
agregarProductosALista(productosChihuahua, "productosChihuahua");

// Cotija
const subMenuCotija = document.getElementById("Cotija");
const listaProductosCotija = document.getElementById("productosCotija");
const productosCotija = ["Queso Cotija - $139.80", "Queso Cotija Excelsior - $182.80",
"Queso Cotija Rayado - $139.80"];

toggleSubMenu(tituloQuesos, subMenuCotija, listaProductosCotija);
agregarProductosALista(productosCotija, "productosCotija");

// Cincho
const subMenuCincho = document.getElementById("Cincho");
const listaProductosCincho = document.getElementById("productosCincho");
const productosCincho = ["Queso de Cincho - $159.80"];

toggleSubMenu(tituloQuesos, subMenuCincho, listaProductosCincho);
agregarProductosALista(productosCincho, "productosCincho");

// Fresco
const subMenuFresco = document.getElementById("Fresco");
const listaProductosFresco = document.getElementById("productosFresco");
const productosFresco = ["Queso Fresco - $139.80"];

toggleSubMenu(tituloQuesos, subMenuFresco, listaProductosFresco);
agregarProductosALista(productosFresco, "productosFresco");

// Monterrey
const subMenuMonterrey = document.getElementById("Monterrey");
const listaProductosMonterrey = document.getElementById("productosMonterrey");
const productosMonterrey = ["Queso Monterrey Jack - $129.80", 
"Queso Monterrery Jack Jalapeño $139.80"];

toggleSubMenu(tituloQuesos, subMenuMonterrey, listaProductosMonterrey);
agregarProductosALista(productosMonterrey, "productosMonterrey");

// Mozzarella
const subMenuMozzarella = document.getElementById("Mozzarella");
const listaProductosMozzarella = document.getElementById("productosMozzarella");
const productosMozzarella = ["Queso Mozzarella - $139.80", "Queso Mozzarella Rayado - $139.80"];

toggleSubMenu(tituloQuesos, subMenuMozzarella, listaProductosMozzarella);
agregarProductosALista(productosMozzarella, "productosMozzarella");

// Oaxaca
const subMenuOaxaca = document.getElementById("Oaxaca");
const listaProductosOaxaca = document.getElementById("productosOaxaca");
const productosOaxaca = ["Queso Oaxaca - $175.80"];

toggleSubMenu(tituloQuesos, subMenuOaxaca, listaProductosOaxaca);
agregarProductosALista(productosOaxaca, "productosOaxaca");

// Panela
const subMenuPanela = document.getElementById("Panela");
const listaProductosPanela = document.getElementById("productosPanela");
const productosPanela = ["Queso Panela - $136.80"];

toggleSubMenu(tituloQuesos, subMenuPanela, listaProductosPanela);
agregarProductosALista(productosPanela, "productosPanela");

// Ranchero
const subMenuRanchero = document.getElementById("Ranchero");
const listaProductosRanchero = document.getElementById("productosRanchero");
const productosRanchero = ["Queso Ranchero - $120.00"];

toggleSubMenu(tituloQuesos, subMenuRanchero, listaProductosRanchero);
agregarProductosALista(productosRanchero, "productosRanchero");
