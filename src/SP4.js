"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SP4 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const sp4clone = "SREBRNA_9x39_SP4";

    const ItemID = "57a0dfb82459774d3078b56c";
    const NewItemID = "SREBRNA_9x39_SP4";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "187";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x39mm SP4 gs","SP4 gs","A budget 9x39 round"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[sp4clone]._props.PenetrationPower = 28;
    item[sp4clone]._props.Damage = 58;
    item[sp4clone]._props.InitialSpeed = 280;
    item[sp4clone]._props.ArmorDamage = 47;
    item[sp4clone]._props.Caliber = "Caliber9x39";

    DatabaseServer.tables.templates.items["57838f0b2459774a256959b2"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    DatabaseServer.tables.templates.items["57838f9f2459774a150289a0"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    DatabaseServer.tables.templates.items["5a9e81fba2750c00164f6b11"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    DatabaseServer.tables.templates.items["57c44b372459772d2b39b8ce"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);
    DatabaseServer.tables.templates.items["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);

    if (conf.Weapon["Mk9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);
    }
    if (conf.Weapon["SKS9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_SKS9x39_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);
        DatabaseServer.tables.templates.items["SREBRNA_SKS9x39_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    }
    if (conf.Weapon["MP9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_MP9x39_9x39_Smg"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);
        DatabaseServer.tables.templates.items["SREBRNA_MP9x39_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    }
    if (conf.Weapon["SR-39MP"]) {
        DatabaseServer.tables.templates.items["SREBRNA_SR-39MP_9x39_Handgun"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);
        DatabaseServer.tables.templates.items["SREBRNA_SR-39MP_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    }
    if (conf.Magazine["GL39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_9x39_GL39"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    }
    if (conf.Magazine["PMAG"]) {
        DatabaseServer.tables.templates.items["SREBRNA_9x39_PMAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x39_PMAG2"]._props.Cartridges[0]._props.filters[0].Filter.push(sp4clone);
    }
    if (conf.ModCompatablility["AdvancedModding"]) {
        DatabaseServer.tables.templates.items["KAIJU_AK9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp4clone);
    }


}