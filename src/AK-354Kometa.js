"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.AKRKometa = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const akmId = "606587252535c57a13424cfd";
    const akrKometaclone = "SREBRNA_AKRKometa_WEAPON";

    const ItemID = akmId;
    const NewItemID = "SREBRNA_AKRKometa_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultrifles";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "105701";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["AKR .354 Kometa Rifle 9x70mm", "AKR .354 Kometa", "A AKM chambered in 9x70mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[akrKometaclone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[akrKometaclone]._props.RecoilForceUp = 653;
    item[akrKometaclone]._props.RecoilForceBack = 1221;
    item[akrKometaclone]._props.ammoCaliber = "Caliber9x70";
    item[akrKometaclone]._props.ItemSound = ("weap_dmr");
    item[akrKometaclone]._props.bFirerate = 150;
    item[akrKometaclone]._props.bEffDist = 950;

    const mk47Barrel = "6065878ac9cf8012264142fd";
    const akr439 = "SREBRNA_AKR_439";
    const NewBarrelPrefabPath = "";
    const NewBarrelCategory = "Ammunition";
    const NewBarrelTrader = "Prapor";
    const NewBarrelTraderLoyalty = 3;
    const NewBarrelPrice = "17030";
    const NewBarrelCurrency = "RUB";
    const NewBarrelDesc = ["439mm .354 Kometa Barrel","439mm Kometa Barrel","9x70mm"];

    KaijuApi.NewItemClone(mk47Barrel, akr439, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, NewBarrelPrice, NewBarrelCurrency, NewBarrelDesc);
    item[akr439]._props.Velocity = 8.24;
    item[akr439]._props.Ergonomics = -24;
    item["606587a88900dc2d9a55b659"]._props.Slots[1]._props.filters[0].Filter.push(akr439);
}