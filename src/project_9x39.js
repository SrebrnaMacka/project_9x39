"use strict";
//// Weapon ////
const { Mk9x39 } = require("./Mk9x39.js");
const { SKS9x39 } = require("./SKS9x39.js");
const { APS9x39 } = require("./APS9x39.js");
const {APS9x39MAG12} = require("./APS9x39MAG12");
const {SKS9x39MAG7} = require("./SKS9x39MAG7");
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

                KaijuApi.DebugMessage(`----------${pack.author}: ${pack.name}: ${pack.version} Debug End----------`);
        }
}
module.exports.Mod = project_9x39;