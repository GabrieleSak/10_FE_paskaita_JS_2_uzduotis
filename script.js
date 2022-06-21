// ANTRA UŽDUOTIS
// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai
// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

var valstybes = [
    {pavadinimas: "Lietuva", plotas: 65300, gyvSkaicius: 2795680},
    {pavadinimas: "Brazilija", plotas: 8515767, gyvSkaicius: 214047375},
    {pavadinimas: "Vatikanas", plotas: 0.49, gyvSkaicius: 453},
    {pavadinimas: "Italija", plotas: 301230, gyvSkaicius: 60317116},
    {pavadinimas: "Islandija", plotas: 102775, gyvSkaicius: 371580}
]

for(var valstybe of valstybes){
    console.log(`Šalis: ${valstybe.pavadinimas}, joje gyvena ${(valstybe.gyvSkaicius/1000000).toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${valstybe.plotas} km², plotas tenkantis vienam gyventojui: ${(valstybe.plotas*1000000/valstybe.gyvSkaicius).toFixed(2)} m².`)
    console.log("=============")
}

// Papildomai su funkcija

console.log("-------------Su funkcija---------------")

for(var valstybe of valstybes){
    spausdinimas(valstybe.pavadinimas, valstybe.plotas, valstybe.gyvSkaicius)
}

function spausdinimas(pavadinimas, plotas, gyvSkaicius){
    console.log(`Šalis: ${pavadinimas}, joje gyvena ${(gyvSkaicius/1000000).toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${plotas} km², plotas tenkantis vienam gyventojui: ${(plotas*1000000/gyvSkaicius).toFixed(2)} m².`)
    console.log("=============")
}