"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.AKR9 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const ak103Id = "5ac66d2e5acfc43b321d4b53";
    const akr9clone = "SREBRNA_AKR9_WEAPON";

    const ItemID = ak103Id;
    const NewItemID = "SREBRNA_AKR9_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultrifles";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "85701";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["AKR9 Rifle 9x54mm", "AKR9", "A AK-103 chambered in 9x54mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[akr9clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[akr9clone]._props.RecoilForceUp = 450;
    item[akr9clone]._props.RecoilForceBack = 680;
    item[akr9clone]._props.ammoCaliber = "Caliber9x54R";
    item[akr9clone]._props.ItemSound = ("weap_dmr");
    item[akr9clone]._props.bEffDist = 750;
    item[akr9clone]._props.bFirerate = 250;
    item[akr9clone]._props.RecoilAngle = 90;
    item[akr9clone]._props.CameraRecoil = 0.22;
    item[akr9clone]._props.CameraSnap = 3.5;
    item[akr9clone]._props.Velocity = 1.9;
    item[akr9clone]._props.weapFireType = [];
    item[akr9clone]._props.weapFireType.push("single");
    item[akr9clone]._props.weapFireType.push("fullauto");
}