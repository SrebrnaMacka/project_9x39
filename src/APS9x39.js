"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.APS9x39 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const apsId = "5a17f98cfcdbcb0980087290";
    const aps9x39clone = "SREBRNA_APS9x39_9x39_Handgun";

    const ItemID = apsId;
    const NewItemID = "SREBRNA_APS9x39_9x39_Handgun";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Handgun";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "182";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["APS 9x39 Handgun 9x39","APS 9x39","A APS chambered in 9x39mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[aps9x39clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[aps9x39clone]._props.RecoilForceUp = 477;
    item[aps9x39clone]._props.RecoilForceBack = 299;
    item[aps9x39clone]._props.ammoCaliber = "Caliber9x39";
    item[aps9x39clone]._props.ItemSound = ("weap_ar");
    item[aps9x39clone]._props.Slots[0]._props.filters[0].Filter = [];

    for (const round of VSSAMMO) {
        item[aps9x39clone]._props.Chambers[0]._props.filters[0].Filter.push(round);
    }
}