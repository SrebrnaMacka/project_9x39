"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.SKS9x39 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const sksId = "587e02ff24597743df3deaeb";
    const sks9x39clone = "SREBRNA_SKS9x39_WEAPON";

    const ItemID = sksId;
    const NewItemID = "SREBRNA_SKS9x39_WEAPON";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultcarbine";
    const NewItemTrader = "Jaeger";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "46301";
    const NewItemCurrency = "RUB";
    const NewItemDesc = ["Srebrna SKS 9x39 Assault Carbine 9x39", "SKS 9x39", "A OP-SKS chambered in 9x39mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    database.globals.config.Mastering[0].Templates.push(NewItemID);
    item[sks9x39clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[sks9x39clone]._props.RecoilForceUp = 212;
    item[sks9x39clone]._props.RecoilForceBack = 430;
    item[sks9x39clone]._props.ammoCaliber = "Caliber9x39";
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push("57838f0b2459774a256959b2");
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push("57838f9f2459774a150289a0");
    item[sks9x39clone]._props.Slots[2]._props.filters[0].Filter.push("5a9e81fba2750c00164f6b11");
    item[sks9x39clone]._props.ItemSound = ("weap_ar");


    for (const round of VSSAMMO) {
        item[NewItemID]._props.Chambers[0]._props.filters[0].Filter.push(round);
    }
}
