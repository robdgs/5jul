//es 1
const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

console.log(Object.values(product.addons));

const values = Object.values(product.addons);

let sum = 0;
let fullOptionalPrice = values.forEach((val) => (sum += val));

console.log(sum + product.price);

//es 2
let products = [
  {
    name: "qwert",
    brand: "yuio",
    price: 0,
  },
  {
    name: "kbnm",
    brand: "zxcvb",
    price: 0,
  },
  {
    name: "cvbn",
    brand: "dfgh",
    price: 15,
    // urlImg: "obhdbdisdi",
  },
];
(getPrice = function () {
  return this.price;
}),
  (setName = function (value) {
    this.name = value;
  });

let counter = 15;

for (let i = 0; i < counter; i++) {
  `<div class="card">
    <h1>nome prodotto: ${products[i].getName()}</h1>
    <h2> brand: ${products[i].brand}</h2>

</div>`;
}
let btn = document.getElementById("btn2");
function clickSulDue() {
  //   btn.classList.add("violet");
  //   btn.classList.remove("violet");

  let counter = 45;

  for (let i = 30; i < counter; i++) {
    `<div class="card">
            <h1>nome prodotto: ${products[i].getName()}</h1>
            <h2> brand: ${products[i].brand}</h2>
        
        </div>`;
  }
}
// quello sopra era il tentativo che per me all'inizio  aveva più senso ma non funziona

//poi ho pensato che un altro modo per farlo potrebbe essere:
// mi stabilisco una lista di prodotti di x elementi, facciamo 15
// ogni volta che cambio pafina mi servirebbe un sottoarray di 5 elementi, mi serve lo slice
// primi 5 elementi
// i da 0 a 4
// poi
// i da 5 a 9
// poi da 10 a 14
// così ho le tre pagine,

// devo capire pure qual è il primo elemento di ogni pag quindi faccio:
// numero el per pagina moltiplicato per numero pagina
// poi devo capire l'umltimo elementod della pagina
// indice ultimo elemento-numero elementi che faccio vedere nella pagina

// quindi poi devo trovare un modo di tornare la lista dei prodotti con lo slice usando quei due indici
