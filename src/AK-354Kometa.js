"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.AKRKometa = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const akmId = "5beed0f50db834001c062b12";
    const akrKometaclone = "SREBRNA_AKRKometa_WEAPON";

    const ItemID = akmId;
    const NewItemID = "SREBRNA_AKRKometa_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultrifles";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "105701";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna AKR .354 Kometa Marksman Rifle", "AKR .354 Kometa", "A AKM chambered in 9x70mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[akrKometaclone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[akrKometaclone]._props.RecoilForceUp = 653;
    item[akrKometaclone]._props.RecoilForceBack = 1221;
    item[akrKometaclone]._props.ammoCaliber = "Caliber9x70";
    item[akrKometaclone]._props.ItemSound = ("weap_dmr");
    item[akrKometaclone]._props.bEffDist = 950;
    item[akrKometaclone]._props.weapFireType.push("single");

    const mk47Barrel = "5beec2820db834001b095426";
    const akr550 = "SREBRNA_AKR_550";
    const NewBarrelPrefabPath = "";
    const NewBarrelCategory = "Ammunition";
    const NewBarrelTrader = "Prapor";
    const NewBarrelTraderLoyalty = 3;
    const NewBarrelPrice = "17030";
    const NewBarrelCurrency = "RUB";
    const NewBarrelDesc = ["550mm .354 Kometa Barrel","550mm Kometa Barrel","9x70mm"];

    KaijuApi.NewItemClone(mk47Barrel, akr550, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, NewBarrelPrice, NewBarrelCurrency, NewBarrelDesc);
    item[akr550]._props.Velocity = 4.24;
    item["SREBRNA_AKRKometa_WEAPON"]._props.Slots[6]._props.filters[0].Filter.push(akr550);
}