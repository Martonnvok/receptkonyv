import adatModell from "../Modell/adatModell.js";
import gombView from "../View/gombView.js";
import kozpont from "../View/kozpont.js";

class controller{
    #adatok;
    #kozpont;
    #gomb;

    constructor(){
        this.#adatok = new adatModell();
        this.#gomb = new gombView(this.#adatok.getGombok(), $(".gombokat"));
        this.kozpont = new kozpont(this.#adatok.getAdatbazis(), $(".receptek"));
    }
}
export default controller;