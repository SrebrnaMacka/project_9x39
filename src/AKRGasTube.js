"use strict";
const KaijuApi = require("../../Kaiju-api/api");
const conf = require("../config/config.json");
module.exports.gasAKR = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const gasId = "59d64ec286f774171d1e0a42";
    const akrGasclone = "SREBRNA_AKR_GAS";

    const ItemID = gasId;
    const NewItemID = "SREBRNA_AKR_GAS";
    const NewItemPrefabPath = "assets/content/items/mods/gasblock/gas_block_ak_izhmash_akm_std.bundle";
    const NewItemCategory = "Gasblock";
    const NewItemTrader = "Prapor";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "18701";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["AKR Gas Tube", "AKR Gas Tube", "A AKR Gas Tube"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    item[akrGasclone]._props.Recoil = -7;
    item[akrGasclone]._props.Accuracy = 6;
    item[akrGasclone]._props.Loudness = 15;
    item[akrGasclone]._props.Velocity = 8;

    //item["SREBRNA_AKRKometa_WEAPON"]._props.Slots[0]._props.filters[0].Filter.push(akrGasclone);
    //KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKRKometa_WEAPON"}`);
    item["SREBRNA_AKR9_WEAPON"]._props.Slots[0]._props.filters[0].Filter.push(akrGasclone);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9_WEAPON"}`);
    item["SREBRNA_AKR9S_WEAPON"]._props.Slots[0]._props.filters[0].Filter.push(akrGasclone);
    KaijuApi.DebugMessage(`${NewItemID} added to ${"SREBRNA_AKR9S_WEAPON"}`);
}