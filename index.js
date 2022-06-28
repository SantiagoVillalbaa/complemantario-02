const PRODUCTOS = [];

function menu(
    zapatillas,
    zapatillasValor,
    remeras,
    remerasValor,
    buzos,
    buzosValor,
    pantalones,
    pantalonesValor
) {
    let total = zapatillasValor + remerasValor + buzosValor + pantalonesValor 
    return (
            " Zapatilla : " +
            zapatillas +
            " $" +
            zapatillasValor +
            "\n Remera : " +
            remeras +
            " $" +
            remerasValor +
            "\n Buzo : " +
            buzos +
            " $" +
            buzosValor +
            "\n Pantalon : " +
            pantalones +
            " $" +
            pantalonesValor +
            "\n Total : $" +
            total 
    )
}

let zapatillas,
    zapatillasValor,
    remeras,
    remerasValor,
    buzos,
    buzosValor,
    pantalones,
    pantalonesValor

zap = prompt("Elija una zapatilla \n 1. Jordan Retro 4 Black Cat \n 2. Jordan Retro 4 Off White \n 3. Dunk Low Panda \n 4. Nada")

while (zap != "1" && zap != "2" && zap != "3" && zap != "4") {
    alert("invalido")
    zap = prompt("Elija una zapatilla \n 1. Jordan Retro 4 Black Cat \n 2. Jordan Retro 4 Off White \n 3. Dunk Low Panda \n 4. Nada")
}
switch (zap) {
    case "1":
            zapatillas = "Jordan Retro 4 Black Cat"
            zapatillasValor = 100000
            break
    case "2":
            zapatillas = "Jordan Retro 4 Off White"
            zapatillasValor = 220000
            break
    case "3":
            zapatillas = "Dunk Low Panda"
            zapatillasValor = 60000
            break
    default:
            zapatillas = "Nada"
            zapatillasValor = 0
            break
}
PRODUCTOS.push({ productos: zapatillas, precio: zapatillasValor })

remeras = prompt("Elija una remera: \n 1. Remera Essentialls \n 2. Remera Supreme \n 3. Remera Zara \n 4. Nada")
while (
    remeras != "1" &&
    remeras != "2" &&
    remeras != "3" &&
    remeras != "4"
) {
    alert("invalido")
    remeras = prompt("Elija una remera: \n 1. Remera Essentialls \n 2. Remera Supreme \n 3. Remera Zara \n 4. Nada")
}
switch (remeras) {
    case "1":
            remeras = "Remera Essentialls"
            remerasValor = 40000
            break
    case "2":
            remeras = "Remera Supreme"
            remerasValor = 50500
            break
    case "3":
            remeras = "Remera Zara"
            remerasValor = 8000
            break
    default:
            remeras = "Nada"
            remerasValor = 0
            break
}
PRODUCTOS.push({ productos: remeras, precio: remerasValor })
buzos = prompt("Elija un buzo: \n 1. Buzo Supreme \n 2. Buzo Nike \n 3. Buzo Jordan \n 4. Nada")
while (
    buzos != "1" &&
    buzos != "2" &&
    buzos != "3" &&
    buzos != "4"
) {
    alert("invalido")
    buzos = prompt("Elija un buzo: \n 1. Buzo Supreme \n 2. Buzo Nike \n 3. Buzo Jordan \n 4. Nada")
}
switch (buzos) {
    case "1":
            buzos = "Buzo Supreme"
            buzosValor = 90000
            break
    case "2":
            buzos = "Buzo Nike"
            buzosValor = 20000
            break
    case "3":
            buzos = "Buzo Jordan"
            buzosValor = 22000
            break
    default:
            buzos = "Nada"
            buzosValor = 0
            break
}
PRODUCTOS.push({ productos: buzos, precio: buzosValor })
pantalones = prompt("Elija un pantalon: \n 1. Pantalon Zara \n 2. Pantalon Nike \n 3. Pantalon Jordan \n 4. Nada")
while (
    pantalones != "1" &&
    pantalones != "2" &&
    pantalones != "3" &&
    pantalones != "4"
) {
    alert("invalido")
    pantalones = prompt("Elija un pantalon: \n 1. Pantalon Zara \n 2. Pantalon Nike \n 3. Pantalon Jordan \n 4. Nada")
}
switch (pantalones) {
    case "1":
            pantalones = "Pantalon Zara"
            pantalonesValor = 14000
            break
    case "2":
            pantalones = "Pantalon Nike"
            pantalonesValor = 18000
            break
    case "3":
            pantalones = " Pantalon Jordan"
            pantalonesValor = 20000
            break
    default:
            pantalones = "Nada"
            pantalonesValor = 0
            break
}
PRODUCTOS.push({ productos: pantalones, precio: pantalonesValor });
alert(
    menu(
            PRODUCTOS[0].productos,
            PRODUCTOS[0].precio,
            PRODUCTOS[1].productos,
            PRODUCTOS[1].precio,
            PRODUCTOS[2].productos,
            PRODUCTOS[2].precio,
            PRODUCTOS[3].productos,
            PRODUCTOS[3].precio
    )
)