"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SPP9x54R = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const spp9x54Rclone = "SREBRNA_9x54R_SPP";

    const ItemID = "560d61e84bdc2da74d8b4571";
    const NewItemID = "SREBRNA_9x54R_SPP";
    const NewItemPrefabPath = "assets/content/items/ammo/patrons/patron_762x54r.bundle";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 3;
    const NewItemPrice = "630";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x54R SPP gzr","SPP gzr","9x54R"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[spp9x54Rclone]._props.PenetrationPower = 63;
    item[spp9x54Rclone]._props.Damage = 81;
    item[spp9x54Rclone]._props.InitialSpeed = 772;
    item[spp9x54Rclone]._props.ArmorDamage = 71;
    item[spp9x54Rclone]._props.ammoRec = 20;
    item[spp9x54Rclone]._props.Weight = 0.035;
    item[spp9x54Rclone]._props.Caliber = "Caliber9x54R";

    if (conf.Weapon["VPO-9x51"]){
        DatabaseServer.tables.templates.items["SREBRNA_VPO9x51_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(spp9x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(spp9x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG2"]._props.Cartridges[0]._props.filters[0].Filter.push(spp9x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG3"]._props.Cartridges[0]._props.filters[0].Filter.push(spp9x54Rclone);
    }
    if (conf.Weapon["AKR9"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(spp9x54Rclone);
    }
    if (conf.Weapon["AKR9S"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9S_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(spp9x54Rclone);
    }
    if (conf.Caliber["9x54R"]){
        DatabaseServer.tables.templates.items["SREBRNA_9x54R_SVD_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(spp9x54Rclone);
    }
}