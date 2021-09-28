"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x39PMAG = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const mk9clone = "SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE";
    const sks9x39clone = "SREBRNA_SKS9x39_WEAPON";
    const PMAGID = "SREBRNA_9x39_PMAG";

    const ItemID = "55d482194bdc2d1d4e8b456b";
    const NewItemID = PMAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_ak_magpul_pmag_30_ak_akm_gen_m3_762x39_30.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "374";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["PMAG 9x39mm 50 Round Magazine", "PMAG", "A 30 round magazine for 9x39mm caliber rifles and carbines"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[PMAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    for (const bullet of VSSAMMO) {
        item[PMAGID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[PMAGID]._props.Cartridges[0]._max_count = 30;
    item["57838ad32459774a17445cd2"]._props.Slots[1]._props.filters[0].Filter.push(PMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"57838ad32459774a17445cd2"}`);
    item["57c44b372459772d2b39b8ce"]._props.Slots[2]._props.filters[0].Filter.push(PMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"57c44b372459772d2b39b8ce"}`);
    item[mk9clone]._props.Slots[1]._props.filters[0].Filter.push(PMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${mk9clone}`);
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push(PMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${sks9x39clone}`);

    //// Weapon ////
    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(PMAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}