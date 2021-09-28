"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.MP9x39 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const mp9Id = "5de7bd7bfd6b4e6e2276dc25";
    const mp9x39clone = "SREBRNA_MP9x39_9x39_Smg";

    const ItemID = mp9Id;
    const NewItemID = "SREBRNA_MP9x39_9x39_Smg";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Submachinegun";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "32200";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["MP9x39 Submachine Gun 9x39","MP9x39","A MP9 chambered in 9x39mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[mp9x39clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[mp9x39clone]._props.RecoilForceUp = 210;
    item[mp9x39clone]._props.RecoilForceBack = 427;
    item[mp9x39clone]._props.ammoCaliber = "Caliber9x39";
    item[mp9x39clone]._props.ItemSound = ("weap_ar");
    item[mp9x39clone]._props.Slots[0]._props.filters[0].Filter = [];

    for (const round of VSSAMMO) {
        item[mp9x39clone]._props.Chambers[0]._props.filters[0].Filter.push(round);
    }
}