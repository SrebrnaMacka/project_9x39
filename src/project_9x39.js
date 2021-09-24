"use strict";
//// Weapon ////
const { Mk9x39 } = require("./Mk9x39.js");
const { SKS9x39 } = require("./SKS9x39.js");
const { APS9x39 } = require("./APS9x39.js");
const { SR39MP } = require("./SR-39MP.js");
const { SR39MPMag } = require("./SR-39MPMag.js");
const {APS9x39MAG12} = require("./APS9x39MAG12");
const {SKS9x39MAG7} = require("./SKS9x39MAG7");
const {mag9x39GL39} = require("./9x39GL39");
const {mag9x39PMAG} = require("./9x39PMAG");
const {SP4} = require("./SP4");
const {SP59x51} = require("./9x51SP5");
const {SP69x51} = require("./9x51SP6");
const {SPP9x51} = require("./9x51SPP");
const {BP9x51} = require("./9x51BP");
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
                if (conf.Weapon["APS9x39"]) {
                    APS9x39();
                    APS9x39MAG12();
                }
                if (conf.Weapon["SR-39MP"]) {
                    SR39MP();
                    SR39MPMag();
                }
                //// Magazine ////
                if (conf.Magazine["GL39"]) {
                    mag9x39GL39();
                }
                if (conf.Magazine["PMAG"]) {
                    mag9x39PMAG();
                }
                if (conf.Caliber["9x51mm"]) {
                    SP59x51();
                    SP69x51();
                    SPP9x51();
                    BP9x51();
                }
                if (conf.Ammo["SP4"]) {
                    SP4();
                }

                KaijuApi.DebugMessage(`----------${pack.author}: ${pack.name}: ${pack.version} Debug End----------`);
        }
}
module.exports.Mod = project_9x39;