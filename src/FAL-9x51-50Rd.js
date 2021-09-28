"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x51FAL50 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const FAL50MAGID = "SREBRNA_FAL9x51_MAG50";

    const ItemID = "5b7bef9c5acfc43d102852ec";
    const NewItemID = FAL50MAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_fal_x_products_x_fal_762x51_50.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 4;
    const NewItemPrice = "1620";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["FAL-50", "FAL-50", "temp"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[FAL50MAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    item[FAL50MAGID]._props.Cartridges[0]._max_count = 50;
    item["57838ad32459774a17445cd2"]._props.Slots[1]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"57838ad32459774a17445cd2"}`);
    item["57c44b372459772d2b39b8ce"]._props.Slots[2]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"57c44b372459772d2b39b8ce"}`);
    item["5f2a9575926fd9352339381f"]._props.Slots[0]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"5f2a9575926fd9352339381f"}`);
    item["5dcbd56fdbd3d91b3e5468d5"]._props.Slots[1]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"5dcbd56fdbd3d91b3e5468d5"}`);
    item["5b0bbe4e5acfc40dc528a72d"]._props.Slots[1]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"5b0bbe4e5acfc40dc528a72d"}`);
    item["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Slots[1]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[2]._props.filters[0].Filter.push(FAL50MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);

    //// Weapon ////
    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(FAL50MAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}