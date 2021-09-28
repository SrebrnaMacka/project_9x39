"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SP69x54R = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const sp69x54Rclone = "SREBRNA_9x54R_SP6";

    const ItemID = "5e023d34e8a400319a28ed44";
    const NewItemID = "SREBRNA_9x54R_SP6";
    const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_762x54r_7bt1.bundle";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Skier";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "530";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x54R SP6 gzr","SP6 gzr","9x54R"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[sp69x54Rclone]._props.PenetrationPower = 58;
    item[sp69x54Rclone]._props.Damage = 73;
    item[sp69x54Rclone]._props.InitialSpeed = 746;
    item[sp69x54Rclone]._props.ArmorDamage = 76;
    item[sp69x54Rclone]._props.ammoRec = 15;
    item[sp69x54Rclone]._props.Weight = 0.035;
    item[sp69x54Rclone]._props.Caliber = "Caliber9x54R";

    if (conf.Weapon["M9x54"]){
        DatabaseServer.tables.templates.items["SREBRNA_M9x54_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_M9x54_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp69x54Rclone);
    }
    if (conf.Weapon["AKR9"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x54Rclone);
    }
    if (conf.Weapon["AKR9S"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9S_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp69x54Rclone);
    }
    if (conf.Caliber["9x54R"]){
        DatabaseServer.tables.templates.items["SREBRNA_9x54R_SVD_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp69x54Rclone);
    }
}