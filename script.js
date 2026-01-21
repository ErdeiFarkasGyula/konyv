const konyvek = [
    {
        "id": 1,
        "cim": "Egri csillagok",
        "szerzo": "Gárdonyi Géza",
        "kiadasEve": 1901,
        "kolcsonozve": false
    },
    {
        "id": 2,
        "cim": "A Pál utcai fiúk",
        "szerzo": "Molnár Ferenc",
        "kiadasEve": 1906,
        "kolcsonozve": false
    },
    {
        "id": 3,
        "cim": "1984",
        "szerzo": "George Orwell",
        "kiadasEve": 1949,
        "kolcsonozve": false
    },
    {
        "id": 4,
        "cim": "Állatfarm",
        "szerzo": "George Orwell",
        "kiadasEve": 1945,
        "kolcsonozve": false
    },
    {
        "id": 5,
        "cim": "A gyűrűk ura",
        "szerzo": "J. R. R. Tolkien",
        "kiadasEve": 1954,
        "kolcsonozve": false
    },
    {
        "id": 6,
        "cim": "Harry Potter és a bölcsek köve",
        "szerzo": "J. K. Rowling",
        "kiadasEve": 1997,
        "kolcsonozve": true
    },
    {
        "id": 7,
        "cim": "A kis herceg",
        "szerzo": "Antoine de Saint-Exupéry",
        "kiadasEve": 1943,
        "kolcsonozve": false
    },
    {
        "id": 8,
        "cim": "Bűn és bűnhődés",
        "szerzo": "Fjodor Dosztojevszkij",
        "kiadasEve": 1866,
        "kolcsonozve": false
    },
    {
        "id": 9,
        "cim": "Az ember tragédiája",
        "szerzo": "Madách Imre",
        "kiadasEve": 1861,
        "kolcsonozve": false
    },
    {
        "id": 10,
        "cim": "Száz év magány",
        "szerzo": "Gabriel García Márquez",
        "kiadasEve": 1967,
        "kolcsonozve": false
    }
]

const Konyvtar = {
    konyvek: [],

    hazzaAd: function (konyv) {
        this.konyvek.push(konyv);
    },
    torol: function (konyv) {
        this.konyvek = this.konyvek.filter(function (item) {
            return item.id !== konyv.id;
        });
    },
    listaz: function () {
        return this.konyvek;
    },
    visszaVetel: function (id) {
        const konyv = this.konyvek.find(x => x.id === id);
        if (konyv) {
            konyv.kolcsonozve = false;
        }
    },
    elerhetoListaz: function () {
        return this.konyvek.filter(function (konyv) {
            return konyv.kolcsonozve === false;
        });
    },
    kolcsonzottListaz : function (){
        return this.konyvek.filter(function (konyv) {
            return konyv.kolcsonozve === true;
        });
    },
    szerzőSzures : function (szerzo) {
        return this.konyvek.filter(function (konyv) {
            return konyv.szerzo === szerzo;
        });
    },
    konyvSum: function () {
        return this.konyvek.length;
    },
    kolcsonzottekSzama: function(){
        return this.konyvek.reduce(function (count, konyv) {
            return konyv.kolcsonozve ? count + 1 : count;
        }, 0);
    }


};





