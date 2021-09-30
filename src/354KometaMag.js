"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x70 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const KOMETAMAGID = "SREBRNA_9x70_Kometa_MAG";

    //const ItemID = "59d6088586f774275f37482f";
    const ItemID = "5fc23426900b1d5091531e15";
    //const ItemID = "5beed0f50db834001c062b12";
    const NewItemID = KOMETAMAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_mk18_sword_mjolnir_std_86x70_10.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "1720";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna .354 Kometa 10 Round Magazine", ".354 Kometa 10R", "temp"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[KOMETAMAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    item[KOMETAMAGID]._props.Cartridges[0]._max_count = 10;
    //item["SREBRNA_AKRKometa_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(KOMETAMAGID);
    item["SREBRNA_AKRKometa_WEAPON"]._props.Slots[2]._props.filters[0].Filter.push(KOMETAMAGID);
    //item["SREBRNA_AKRKometa_WEAPON"]._props.Slots[2]._props.filters[0].Filter.push(KOMETAMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKRKometa_WEAPON"}`);
}