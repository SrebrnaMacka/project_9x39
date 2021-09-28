"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.SP59x54R = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const sp59x54Rclone = "SREBRNA_9x54R_SP5";

    const ItemID = "5887431f2459777e1612938f";
    const NewItemID = "SREBRNA_9x54R_SP5";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Ammunition";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "421";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["9x54R SP5 gzr","SP5 gzr","9x54R"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);

    item[sp59x54Rclone]._props.PenetrationPower = 49;
    item[sp59x54Rclone]._props.Damage = 80;
    item[sp59x54Rclone]._props.InitialSpeed = 718;
    item[sp59x54Rclone]._props.ArmorDamage = 67;
    item[sp59x54Rclone]._props.ammoRec = 15;
    item[sp59x54Rclone]._props.Weight = 0.035;
    item[sp59x54Rclone]._props.Caliber = "Caliber9x54R";

    if (conf.Weapon["VPO-9x51"]){
        DatabaseServer.tables.templates.items["SREBRNA_VPO9x51_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG2"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x54Rclone);
        DatabaseServer.tables.templates.items["SREBRNA_9x51_VPO_MAG3"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x54Rclone);
    }
    if (conf.Weapon["AKR9"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x54Rclone);
    }
    if (conf.Weapon["AKR9S"]){
        DatabaseServer.tables.templates.items["SREBRNA_AKR9S_WEAPON"]._props.Chambers[0]._props.filters[0].Filter.push(sp59x54Rclone);
    }
    if (conf.Caliber["9x54R"]){
        DatabaseServer.tables.templates.items["SREBRNA_9x54R_SVD_MAG"]._props.Cartridges[0]._props.filters[0].Filter.push(sp59x54Rclone);
    }
}