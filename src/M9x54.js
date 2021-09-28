"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.M9x54 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const m9x54Id = "5bfea6e90db834001b7347f3";
    const m9x54clone = "SREBRNA_M9x54_WEAPON";

    const ItemID = m9x54Id;
    const NewItemID = "SREBRNA_M9x54_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultcarbine";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 1;
    const NewItemPrice = "96301";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna M9x54 Sniper Rifle", "M9x54", "A M700 chambered in 9x54mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[m9x54clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[m9x54clone]._props.RecoilForceUp = 500;
    item[m9x54clone]._props.RecoilForceBack = 740;
    item[m9x54clone]._props.ammoCaliber = "Caliber9x54R";
    item[m9x54clone]._props.ItemSound = ("weap_rifle");
}
