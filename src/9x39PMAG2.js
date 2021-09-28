"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x39PMAG2 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const mk9clone = "SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE";
    const sks9x39clone = "SREBRNA_SKS9x39_WEAPON";
    const PMAG2ID = "SREBRNA_9x39_PMAG2";

    const ItemID = "5aaa4194e5b5b055d06310a5";
    const NewItemID = PMAG2ID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_ak74_magpul_pmag_30_ak74_gen_m3_545x39_30.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "350";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srenrna PMAG2 9x39mm 30 Round Magazine", "PMAG2", "A 30 round magazine for 9x39mm caliber rifles and carbines"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[PMAG2ID]._props.Cartridges[0]._props.filters[0].Filter = []

    for (const bullet of VSSAMMO) {
        item[PMAG2ID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[PMAG2ID]._props.Cartridges[0]._max_count = 30;
    item["57838ad32459774a17445cd2"]._props.Slots[1]._props.filters[0].Filter.push(PMAG2ID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"57838ad32459774a17445cd2"}`);
    item["57c44b372459772d2b39b8ce"]._props.Slots[2]._props.filters[0].Filter.push(PMAG2ID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"57c44b372459772d2b39b8ce"}`);
    item[mk9clone]._props.Slots[1]._props.filters[0].Filter.push(PMAG2ID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${mk9clone}`);
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push(PMAG2ID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${sks9x39clone}`);

    //// Weapon ////
    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(PMAG2ID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}