"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SP69x51 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const sp69x51clone = "SREBRNA_9x51_SP6";

    const ItemID = "57a0e5022459774d1673f889";
    const NewItemID = "SREBRNA_9x51_SP6";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "3";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["9x51mm SP6 gs","SP6 gs","9x51"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[sp69x51clone]._props.PenetrationPower = 56;
    item[sp69x51clone]._props.Damage = 71;
    item[sp69x51clone]._props.InitialSpeed = 376;
    item[sp69x51clone]._props.ArmorDamage = 74;
    item[sp69x51clone]._props.casingMass = 20;
    item[sp69x51clone]._props.ammoRec = 0.25;
    item[sp69x51clone]._props.Weight = 0.028;
    item[sp69x51clone]._props.Caliber = "Caliber9x51";

    DatabaseServer.tables.templates.items["57c44b372459772d2b39b8ce"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x51clone);
    DatabaseServer.tables.templates.items["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x51clone);

    if (conf.Weapon["Mk9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x51clone);
    }
    if (conf.Weapon["SKS9x39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_SKS9x39_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_SKS9x39_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp69x51clone);
    }
    if (conf.Magazine["GL39"]) {
        DatabaseServer.tables.templates.items["SREBRNA_9x39_GL39"]._props.Cartridges[0]._props.filters[0].Filter.push(sp69x51clone);
    }
    if (conf.Magazine["PMAG"]) {
        DatabaseServer.tables.templates.items["SREBRNA_9x39_PMAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp69x51clone);
    }
    if (conf.ModCompatablility["AdvancedModding"]) {
        DatabaseServer.tables.templates.items["KAIJU_AK9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x51clone);
    }


}