"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.SR39MP = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const apsId = "59f98b4986f7746f546d2cef";
    const sr39mpclone = "SREBRNA_SR-39MP_9x39_Handgun";

    const ItemID = apsId;
    const NewItemID = "SREBRNA_SR-39MP_9x39_Handgun";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Handgun";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "326";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["SR-39MP Handgun 9x39mm","SR-39MP","A SR-1MP chambered in 9x39mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[sr39mpclone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[sr39mpclone]._props.RecoilForceUp = 450;
    item[sr39mpclone]._props.RecoilForceBack = 307;
    item[sr39mpclone]._props.ammoCaliber = "Caliber9x39";
    item[sr39mpclone]._props.ItemSound = ("weap_ar");
    item[sr39mpclone]._props.weapFireType = [];
    item[sr39mpclone]._props.weapFireType.push("single");
    item[sr39mpclone]._props.weapFireType.push("burst");
    item[sr39mpclone]._props.bFirerate = 969
    item[sr39mpclone]._props.Slots[1]._props.filters[0].Filter = [];

    for (const round of VSSAMMO) {
        item[sr39mpclone]._props.Chambers[0]._props.filters[0].Filter.push(round);
    }
}