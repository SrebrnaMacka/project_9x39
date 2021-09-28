"use strict";
//// Weapon ////
const { Mk9x39 } = require("./Mk9x39.js");
const { SKS9x39 } = require("./SKS9x39.js");
const { MP9x39 } = require("./MP9x39.js");
const { SR39MP } = require("./SR-39MP.js");
const { M9x54 } = require("./M9x54.js");
const { AKR9 } = require("./AK-9x54R.js");
const { AKR9S } = require("./AK-9x54RS.js");
const { AKRKometa } = require("./AK-354Kometa.js");
//// Magazine ////
const { SR39MPMag } = require("./SR-39MPMag.js");
const {MP9x39MAG24} = require("./MP9x39MAG24");
const {SKS9x39MAG7} = require("./SKS9x39MAG7");
const {mag9x39GL39} = require("./9x39GL39");
const {mag9x39PMAG} = require("./9x39PMAG");
const {mag9x39PMAG2} = require("./9x39PMAG2");
const {mag9x51FAL10} = require("./FAL-9x51-10Rd");
const {mag9x51FAL20} = require("./FAL-9x51-20Rd");
const {mag9x51FAL30} = require("./FAL-L1A19x51-30Rd");
const {mag9x51FAL50} = require("./FAL-9x51-50Rd");
const {magM9x54} = require("./M9x54Mag");
const {mag9x54RSVD} = require("./SVD-9x54R-20R");
const {mag9x70} = require("./354KometaMag");
//// Mods ////
const {gasAKR} = require("./AKRGasTube");
//// Ammo ////
const {SP4} = require("./SP4");
const {SP59x51} = require("./9x51SP5");
const {SP69x51} = require("./9x51SP6");
const {SPP9x51} = require("./9x51SPP");
const {BP9x51} = require("./9x51BP");
const {SP59x54R} = require("./9x54RSP5");
const {SP69x54R} = require("./9x54RSP6");
const {SPP9x54R} = require("./9x54RSPP");
const {BP9x54R} = require("./9x54RBP");
const {Kometa9x70} = require("./354Kometa");
const conf = require("../config/config.json");
const pack = require("../package.json");
const KaijuApi = require("../../Kaiju-api/api");

const debug = conf.Debug.Enable;
KaijuApi.DebugCheck(debug);

class project_9x39{
    constructor(){
        this.mod = "Project 9x39";
        Logger.info(`Loading: ${this.mod}`);
        ModLoader.onLoad[this.mod] = this.Start.bind(this);
    }
            Start(){
                const database = DatabaseServer.tables;
                const item = database.templates.items;
                KaijuApi.DebugMessage(`----------${pack.author}: ${pack.name}: ${pack.version} Debug Start----------`);


                //// Weapon ////
                if (conf.Weapon["Mk9x39"]) {
                    Mk9x39();
                }
                if (conf.Weapon["SKS9x39"]) {
                    SKS9x39();
                    SKS9x39MAG7();
                }
                if (conf.Weapon["MP9x39"]) {
                    MP9x39();
                    MP9x39MAG24();
                }
                if (conf.Weapon["SR-39MP"]) {
                    SR39MP();
                    SR39MPMag();
                }
                if (conf.Weapon["AKR9"]) {
                    AKR9();
                }
                if (conf.Weapon["AKR9S"]) {
                    AKR9S();
                }
                if (conf.Weapon["AKRKometa"]) {
                    AKRKometa();
                }
                if (conf.Weapon["M9x54"]) {
                    M9x54();
                    magM9x54();
                }
                //// Magazine ////
                if (conf.Magazine["GL39"]) {
                    mag9x39GL39();
                }
                if (conf.Magazine["PMAG"]) {
                    mag9x39PMAG();
                    mag9x39PMAG2();
                }
                if (conf.Magazine["FALMAGS"]){
                    mag9x51FAL10();
                    mag9x51FAL20();
                    mag9x51FAL30();
                    mag9x51FAL50();
                }
                //// Mods ////
                if (conf.Mods["GASAKR"]) {
                    gasAKR();
                }
                //// Ammo ////
                if (conf.Ammo["SP4"]) {
                    SP4();
                }
                //// Caliber ////
                if (conf.Caliber["9x51mm"]) {
                    SP59x51();
                    SP69x51();
                    SPP9x51();
                    BP9x51();
                }
                if (conf.Caliber["9x54R"]) {
                    mag9x54RSVD();
                    SP59x54R();
                    SP69x54R();
                    SPP9x54R();
                    BP9x54R();
                }
                if (conf.Caliber["354Kometa"]) {
                    mag9x70();
                    Kometa9x70();

                }

                KaijuApi.DebugMessage(`----------${pack.author}: ${pack.name}: ${pack.version} Debug End----------`);
        }
}
module.exports.Mod = project_9x39;