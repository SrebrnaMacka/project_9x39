"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.AKR9S = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const ak105Id = "5ac66d9b5acfc4001633997a";
    const akr9sclone = "SREBRNA_AKR9S_WEAPON";

    const ItemID = ak105Id;
    const NewItemID = "SREBRNA_AKR9S_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultrifles";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "67461";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna AKR9S Assault Rifle", "AKR9S", "A AK-105 chambered in 9x54mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[akr9sclone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[akr9sclone]._props.RecoilForceUp = 440;
    item[akr9sclone]._props.RecoilForceBack = 690;
    item[akr9sclone]._props.ammoCaliber = "Caliber9x54R";
    item[akr9sclone]._props.ItemSound = ("weap_dmr");
    item[akr9sclone]._props.bFirerate = 450;
    item[akr9sclone]._props.bEffDist = 650;
    item[akr9sclone]._props.RecoilAngle = 90;
    item[akr9sclone]._props.CameraRecoil = 0.22;
    item[akr9sclone]._props.CameraSnap = 3.6;
    item[akr9sclone]._props.Velocity = -9.3;
    item[akr9sclone]._props.weapFireType = [];
    item[akr9sclone]._props.weapFireType.push("single");
    item[akr9sclone]._props.weapFireType.push("fullauto");
}