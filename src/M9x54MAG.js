"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.magM9x54 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const M9x54MAGID = "SREBRNA_M9x54_MAG";

    const ItemID = "5d25af8f8abbc3055079fec5";
    const NewItemID = M9x54MAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_m700_promag_aa70_762x51_10.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "120";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna M9x54 5R", "M9x54 5R", "temp"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[M9x54MAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    item[M9x54MAGID]._props.Cartridges[0]._max_count = 7;
    item["SREBRNA_M9x54_WEAPON"]._props.Slots[0]._props.filters[0].Filter.push(M9x54MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_M9x54_WEAPON"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[4]._props.filters[0].Filter.push(M9x54MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);
    item["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Slots[1]._props.filters[0].Filter.push(M9x54MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[2]._props.filters[0].Filter.push(M9x54MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);
    item["SREBRNA_AKR9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(M9x54MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9_WEAPON"}`);
    item["SREBRNA_AKR9S_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(M9x54MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9S_WEAPON"}`);

    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(M9x54MAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}