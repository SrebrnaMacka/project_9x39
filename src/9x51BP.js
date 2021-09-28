"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.BP9x51 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const bp9x51clone = "SREBRNA_9x51_BP";

    const ItemID = "5efb0c1bd79ff02a1f5e68d9";
    const NewItemID = "SREBRNA_9x51_BP";
    const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_762x51_m993.bundle";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "505";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x51mm BP gzh","BP gzh","9x51"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[bp9x51clone]._props.PenetrationPower = 67;
    item[bp9x51clone]._props.Damage = 74;
    item[bp9x51clone]._props.InitialSpeed = 634;
    item[bp9x51clone]._props.ArmorDamage = 83;
    item[bp9x51clone]._props.ammoRec = 15;
    item[bp9x51clone]._props.Weight = 0.032;
    item[bp9x51clone]._props.Caliber = "Caliber9x51";

    if (conf.Weapon["VPO-9x51"]){
        DatabaseServer.tables.templates.items["SREBRNA_VPO9x51_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG2"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG3"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
    }
    if (conf.Weapon["AKR9"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x51clone);
    }
    if (conf.Weapon["AKR9S"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9S_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x51clone);
    }
    if (conf.Caliber["9x51mm"]) {
        DatabaseServer.tables.templates.items["5f2a9575926fd9352339381f"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["5dcbd56fdbd3d91b3e5468d5"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["5b0bbe4e5acfc40dc528a72d"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x51clone);
    }
    if (conf.Magazine["FALMAGS"]){
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG10"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG20"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG30"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG50"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x51clone);
    }
}