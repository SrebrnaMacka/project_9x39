"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.mag9x51VPO2 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VPO2MAGID = "SREBRNA_9x51_VPO_MAG2";

    const ItemID = "5c503ad32e2216398b5aada2";
    const NewItemID = VPO2MAGID;
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_vepr_molot_308_win_std_762x51_10.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "220";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["VPO-9x51 10R", "VPO-9x51 10R", "temp"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[VPO2MAGID]._props.Cartridges[0]._props.filters[0].Filter = []

    item[VPO2MAGID]._props.Cartridges[0]._max_count = 10;
    item["SREBRNA_VPO9x51_WEAPON"]._props.Slots[4]._props.filters[0].Filter.push(VPO2MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_VPO9x51_WEAPON"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[4]._props.filters[0].Filter.push(VPO2MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);
    item["SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"]._props.Slots[1]._props.filters[0].Filter.push(VPO2MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE"}`);
    item["SREBRNA_SKS9x39_WEAPON"]._props.Slots[2]._props.filters[0].Filter.push(VPO2MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_SKS9x39_WEAPON"}`);
    item["SREBRNA_AKR9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(VPO2MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9_WEAPON"}`);
    item["SREBRNA_AKR9S_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(VPO2MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9S_WEAPON"}`);

    if (conf.ModCompatablility["AdvancedModding"]) {
        item["KAIJU_AK9_WEAPON"]._props.Slots[7]._props.filters[0].Filter.push(VPO2MAGID);
        KaijuApi.DebugMessage(`${NewItemID} added to KAIJU_AK9_WEAPON`);
    }
}