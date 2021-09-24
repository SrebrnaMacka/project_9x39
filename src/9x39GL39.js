"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x39GL39 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const mk9clone = "SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE";
    const sks9x39clone = "SREBRNA_SKS9x39_WEAPON";
    const GL39MAGID = "SREBRNA_9x39_GL39";

    const ItemID = "55d482194bdc2d1d4e8b456b";
    const NewItemID = GL39MAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_ak74_izhmash_6l31_545x39_60.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "162";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["GL39 9x39mm/9x51mm 50 Round Magazine", "GL39", "A 50 round magazine for 9x39mm/9x51 caliber rifles and carbines"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[GL39MAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    for (const bullet of VSSAMMO) {
        item[GL39MAGID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[GL39MAGID]._props.Cartridges[0]._max_count = 50;
    item[mk9clone]._props.Slots[1]._props.filters[0].Filter.push(GL39MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${mk9clone}`);
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push(GL39MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${sks9x39clone}`);

    //// Weapon ////
    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(GL39MAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}