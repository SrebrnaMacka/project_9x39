"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x54RSVD = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const SVDMAGID = "SREBRNA_9x54R_SVD_MAG";

    const ItemID = "5c88f24b2e22160bc12c69a6";
    const NewItemID = SVDMAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_svd_izhmash_svd_std_762x54_20.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Skier";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "627";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna SVD-9x54R 30R", "SVD-9x54R 30R", "temp"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[SVDMAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    item[SVDMAGID]._props.Cartridges[0]._max_count = 30;
    item["SREBRNA_AKR9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(SVDMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9_WEAPON"}`);
    item["SREBRNA_AKR9S_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(SVDMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9S_WEAPON"}`);

    if (conf.Weapon["Mk9x39"]){
        item["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Slots[1]._props.filters[0].Filter.push(SVDMAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"}`);
    }
}