"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.Kometa9x70 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;

    const kometa9x70clone = "SREBRNA_9x70_Kometa";
    const ItemID = "5fc382a9d724d907e2077dab";
    const NewItemID = "SREBRNA_9x70_Kometa";
    const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_86x70_lapua_ap.bundle";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "1030";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x70 .354 Kometa",".354 Kometa","9x70mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[kometa9x70clone]._props.PenetrationPower = 75;
    item[kometa9x70clone]._props.Damage = 125;
    item[kometa9x70clone]._props.InitialSpeed = 930;
    item[kometa9x70clone]._props.ArmorDamage = 91;
    item[kometa9x70clone]._props.ammoRec = 30;
    item[kometa9x70clone]._props.Weight = 0.055;
    item[kometa9x70clone]._props.Caliber = "Caliber9x70";

    if (conf.Weapon["AKRKometa"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKRKometa_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(kometa9x70clone);
    }
    if (conf.Caliber["354Kometa"]){
        DatabaseServer.tables.templates.items["SREBRNA_9x70_Kometa_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(kometa9x70clone);
    }
}