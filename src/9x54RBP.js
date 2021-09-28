"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.BP9x54R = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const bp9x54Rclone = "SREBRNA_9x54R_BP";

    const ItemID = "5e023d48186a883be655e551";
    const NewItemID = "SREBRNA_9x54R_BP";
    const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_762x54r_7n37.bundle";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "730";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x54R BP gzr","BP gzr","9x54R"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[bp9x54Rclone]._props.PenetrationPower = 70;
    item[bp9x54Rclone]._props.Damage = 79;
    item[bp9x54Rclone]._props.InitialSpeed = 752;
    item[bp9x54Rclone]._props.ArmorDamage = 91;
    item[bp9x54Rclone]._props.ammoRec = 20;
    item[bp9x54Rclone]._props.Weight = 0.035;
    item[bp9x54Rclone]._props.Caliber = "Caliber9x54R";

    if (conf.Weapon["VPO-9x51"]){
        DatabaseServer.tables.templates.items["SREBRNA_VPO9x51_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG2"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG3"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x54Rclone);
    }
    if (conf.Weapon["AKR9"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x54Rclone);
    }
    if (conf.Weapon["AKR9S"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9S_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(bp9x54Rclone);
    }
    if (conf.Caliber["9x54R"]){
        DatabaseServer.tables.templates.items["SREBRNA_9x54R_SVD_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(bp9x54Rclone);
    }
}