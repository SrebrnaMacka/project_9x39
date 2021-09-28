"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x51VPO = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VPOMAGID = "SREBRNA_9x51_VPO_MAG";

    const ItemID = "5c503ac82e221602b21d6e9a";
    const NewItemID = VPOMAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_vepr_molot_308_win_std_762x51_5.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "120";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["VPO-9x51 5R", "VPO-9x51 5R", "temp"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[VPOMAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    item[VPOMAGID]._props.Cartridges[0]._max_count = 5;
    item["SREBRNA_VPO9x51_WEAPON"]._props.Slots[4]._props.filters[0].Filter.push(VPOMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_VPO9x51_WEAPON"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[4]._props.filters[0].Filter.push(VPOMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);
    item["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Slots[1]._props.filters[0].Filter.push(VPOMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[2]._props.filters[0].Filter.push(VPOMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);
    item["SREBRNA_AKR9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(VPOMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9_WEAPON"}`);
    item["SREBRNA_AKR9S_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(VPOMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9S_WEAPON"}`);

    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(VPOMAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}