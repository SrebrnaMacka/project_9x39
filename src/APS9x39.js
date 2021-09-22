"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.APS9x39 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const ItemID = "5ac66d9b5acfc40f1633297a";
    const NewItemID = "SREBRNA_APS9x39_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Handguns";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "39488";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["APS-9x39 Handgun 9x39","APS-9x39","temp description"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[NewItemID]._props.Chambers[0]._props.filters[0].Filter = [];
    item[NewItemID]._props.RecoilForceUp = 210;
    item[NewItemID]._props.RecoilForceBack = 269;
    item[NewItemID]._props.ammoCaliber = "Caliber9x39";
    item[NewItemID]._props.Slots[2]._props.filters[0].Filter.push("5a0d63621526d8dba31fe3bf");
    item[NewItemID]._props.Slots[7]._props.filters[0].Filter = [];
    item[NewItemID]._props.Slots[7]._props.filters[0].Filter.push("57838f0b2459774a256959b2");
    item[NewItemID]._props.Slots[7]._props.filters[0].Filter.push("57838f9f2459774a150289a0");
    item[NewItemID]._props.Slots[7]._props.filters[0].Filter.push("5a9e81fba2750c00164f6b11");

    for (const round of VSSAMMO) {
        item[NewItemID]._props.Chambers[0]._props.filters[0].Filter.push(round);
    }
}