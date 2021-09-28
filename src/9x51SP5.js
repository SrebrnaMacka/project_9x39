"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SP59x51 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const sp59x51clone = "SREBRNA_9x51_SP5";

    const ItemID = "58dd3ad986f77403051cba8f";
    const NewItemID = "SREBRNA_9x51_SP5";
    const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_762x51.bundle";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "221";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x51mm SP5 gzh","SP5 gzh","9x51"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[sp59x51clone]._props.PenetrationPower = 43;
    item[sp59x51clone]._props.Damage = 80;
    item[sp59x51clone]._props.InitialSpeed = 618;
    item[sp59x51clone]._props.ArmorDamage = 61;
    item[sp59x51clone]._props.ammoRec = 10;
    item[sp59x51clone]._props.Weight = 0.032;
    item[sp59x51clone]._props.Caliber = "Caliber9x51";

    if (conf.Weapon["VPO-9x51"]){
        DatabaseServer.tables.templates.items["SREBRNA_VPO9x51_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG2"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG3"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Weapon["AKR9"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Weapon["AKR9S"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9S_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Caliber["9x51mm"]) {
        DatabaseServer.tables.templates.items["5f2a9575926fd9352339381f"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["5dcbd56fdbd3d91b3e5468d5"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["5b0bbe4e5acfc40dc528a72d"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x51clone);
    }
    if (conf.Magazine["FALMAGS"]){
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG10"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG20"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG30"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
        DatabaseServer.tables.templates.items["SREBRNA_FAL9x51_MAG50"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x51clone);
    }
}