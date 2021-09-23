"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.APS9x39MAG12 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const aps9x39clone = "SREBRNA_APS9x39_9x39_Handgun";
    const APSMAGID = "SREBRNA_APS9x39_MAG";

    const ItemID = "5aaa5dfee5b5b000140293d3";
    const NewItemID = "SREBRNA_APS9x39_MAG";
    const NewItemPrefabPath = "assets/content/items/mods/magazines/mag_aps_molot_aps_apb_std_9x18pm_20.bundle";
    const NewItemCategory = "Magazines";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "23";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["APS 9x39 12 Round Magazine","APS 9x39 Mag","A 12 round magazine for the APS 9x39"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[APSMAGID]._props.Cartridges[0]._props.filters[0].Filter = []
    item[APSMAGID]._props.Width = 1;
    item[APSMAGID]._props.Height = 1;
    for (const bullet of VSSAMMO) {
        item[APSMAGID]._props.Cartridges[0]._props.filters[0].Filter.push(bullet);
    }

    item[APSMAGID]._props.Cartridges[0]._max_count = 12;
    item[aps9x39clone]._props.Slots[0]._props.filters[0].Filter.push(APSMAGID);
    KaijuApi.DebugMessage(`${NewItemID} added to ${aps9x39clone}`);
}