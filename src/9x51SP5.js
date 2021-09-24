"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SP59x51 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const sp59x51clone = "SREBRNA_9x51_SP5";

    const ItemID = "57a0dfb82459774d3078b56c";
    const NewItemID = "SREBRNA_9x51_SP5";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "2";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["9x51mm SP5 gs","SP5 gs","9x51"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[sp59x51clone]._props.PenetrationPower = 46;
    item[sp59x51clone]._props.Damage = 83;
    item[sp59x51clone]._props.InitialSpeed = 358;
    item[sp59x51clone]._props.ArmorDamage = 64;
    item[sp59x51clone]._props.casingMass = 20;
    item[sp59x51clone]._props.ammoRec = 0.25;
    item[sp59x51clone]._props.Weight = 0.028;
    item[sp59x51clone]._props.Caliber = "Caliber9x51";

    DatabaseServer.tables.templates.items["57c44b372459772d2b39b8ce"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
    DatabaseServer.tables.templates.items["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);

    if (conf.Weapon["Mk9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Weapon["SKS9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_SKS9x39_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_SKS9x39_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Magazine["GL39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_9x39_GL39"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Magazine["PMAG"]) {
        DatabaseServer.tables.templates.items["SREBRNA_9x39_PMAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.ModCompatablility["AdvancedModding"]) {
        DatabaseServer.tables.templates.items["KAIJU_AK9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
    }


}