"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.VPO9x51 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const vpoId = "5c501a4d2e221602b412b540";
    const vpo9x51clone = "SREBRNA_VPO9x51_WEAPON";

    const ItemID = vpoId;
    const NewItemID = "SREBRNA_VPO9x51_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultcarbine";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "66301";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["VPO-9x51 Carbine 9x51mm", "VPO-9x51", "A VPO chambered in 9x51mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[vpo9x51clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[vpo9x51clone]._props.RecoilForceUp = 400;
    item[vpo9x51clone]._props.RecoilForceBack = 640;
    item[vpo9x51clone]._props.ammoCaliber = "Caliber9x51";
    item[vpo9x51clone]._props.ItemSound = ("weap_ar");
}
