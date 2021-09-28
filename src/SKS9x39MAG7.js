"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.SKS9x39MAG7 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const sks9x39clone = "SREBRNA_SKS9x39_WEAPON";
    const SKSMAGID = "SREBRNA_SKS9x39_MAG";

    const ItemID = "587df3a12459772c28142567";
    const NewItemID = "SREBRNA_SKS9x39_MAG";
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_sks_toz_std_internal_762x39_10.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "180";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["SKS 9x39mm/9x51mm 7 Round Mag", "SKS 9x39mm 7R", "7 round interal magazine for the SKS-9x39"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[SKSMAGID]._props.Cartridges[0]._props.filters[0].Filter = []
    item[SKSMAGID]._props.Width = 1;
    item[SKSMAGID]._props.Height = 1;
    for (const bullet of VSSAMMO) {
        item[SKSMAGID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[SKSMAGID]._props.Cartridges[0]._max_count = 7;
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push(SKSMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${sks9x39clone}`);
}