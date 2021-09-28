"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.SR39MPMag = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const sr39mpclone = "SREBRNA_SR-39MP_9x39_Handgun";
    const SR39MPMAGID = "SREBRNA_SR-39MP_MAG";

    const ItemID = "59f99a7d86f7745b134aa97b";
    const NewItemID = "SREBRNA_SR-39MP_MAG";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "198";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["SR-39MP 9x39mm","SR-39MP Mag","A 14 round magazine for the SR-39MP"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[SR39MPMAGID]._props.Cartridges[0]._props.filters[0].Filter = []
    item[SR39MPMAGID]._props.Width = 1;
    item[SR39MPMAGID]._props.Height = 1;
    for (const bullet of VSSAMMO) {
        item[SR39MPMAGID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[SR39MPMAGID]._props.Cartridges[0]._max_count = 14;
    item[sr39mpclone]._props.Slots[1]._props.filters[0].Filter.push(SR39MPMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${sr39mpclone}`);
}