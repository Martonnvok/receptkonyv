class kozpont{
    #szuloElem
    #adatok = []
    constructor(adatok, szuloElem) {
        this.#adatok = adatok;
        this.#szuloElem = szuloElem;
        console.log("wwwwwww");

        this.megjelenit();
    }

    megjelenit() {
        console.log("aaaaaaaa");
        let txt = `<table> <tbody>`;
        for (let index = 0; index < this.#adatok.length; index++) {
            txt += `<td> ${this.#adatok[index].kat_id} </td
            <td> ${this.#adatok[index].nev} </td
            <td> ${this.#adatok[index].kep_eleresi_ut} </td
            <td> ${this.#adatok[index].leiras} </td
            `;

        }
        this.#szuloElem.append(txt);

        
    }
}
export default kozpont;