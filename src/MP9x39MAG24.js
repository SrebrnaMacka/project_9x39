"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.MP9x39MAG24 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const mp9x39clone = "SREBRNA_MP9x39_9x39_Smg";
    const MP9MAGID = "SREBRNA_MP9x39_MAG";

    const ItemID = "5de8eaadbbaf010b10528a6d";
    const NewItemID = "SREBRNA_MP9x39_MAG";
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_mp9_bt_mp9_std_9x19_25.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "323";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["MP9x39 24 Round Magazine","M9x39 24","A 24 round magazine for the MP9x39"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[MP9MAGID]._props.Cartridges[0]._props.filters[0].Filter = []
    item[MP9MAGID]._props.Width = 1;
    item[MP9MAGID]._props.Height = 2;
    for (const bullet of VSSAMMO) {
        item[MP9MAGID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[MP9MAGID]._props.Cartridges[0]._max_count = 24;
    item[mp9x39clone]._props.Slots[0]._props.filters[0].Filter.push(MP9MAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${mp9x39clone}`);
}