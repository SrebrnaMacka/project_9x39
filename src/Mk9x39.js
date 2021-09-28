"use strict";
const KaijuApi = require("../../Kaiju-api/api");
module.exports.Mk9x39 = () => {
    const database = DatabaseServer.tables;
    const item = database.templates.items;
    const ARUppers = JsonUtil.clone(item["5447a9cd4bdc2dbd208b4567"]._props.Slots[2]._props.filters[0].Filter)
    const VSSAMMO = JsonUtil.clone(item["57838ad32459774a17445cd2"]._props.Chambers[0]._props.filters[0].Filter)
    const m4a1Id = "5447a9cd4bdc2dbd208b4567";
    const mk9clone = "SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE";
    const mk9260 = "SREBRNA_mk9_260";
    const mk9370 = "SREBRNA_mk9_370";
    const mk9406 = "SREBRNA_mk9_406";
    const mk9165in = "SREBRNA_mk9_165in";
    const mk918in = "SREBRNA_mk9_18in";
    const mk920in = "SREBRNA_mk9_20in";
    const mk9Barrels = [mk9260,mk9370,mk9406,mk9165in,mk918in,mk920in]
    const mk9BarrelsPrice = ["256","281","310","342","382","423"]
    const arBarelsArray = ["55d35ee94bdc2d61338b4568","55d3632e4bdc2d972f8b4569",
        "5c0e2f94d174af029f650d56","5d440b93a4b9364276578d4b",
        "5d440b9fa4b93601354d480c","5c6d85e02e22165df16b81f4",
        "5bb20d92d4351e00853263eb","5bb20d9cd4351e00334c9d8a",
        "5bb20da5d4351e0035629dbf","5bb20dadd4351e00367faeff"]


    const NewBarrelPrefabPath = "";
    const NewBarrelCategory = "Assaultrifle";
    const NewBarrelTrader = "Peacekeeper";
    const NewBarrelTraderLoyalty = 1;
    const NewBarrelCurrency = "USD";
    const NewBarrelDesc260 = ["260mm barrel for MK9 Mutant 9x39 Assault Rifle","260mm MK9","260mm barrel for MK9 Mutant 9x39 Assault Rifle."];
    const NewBarrelDesc370 = ["370mm barrel for MK9 Mutant 9x39 Assault Rifle","370mm MK9","370mm barrel for MK9 Mutant 9x39 Assault Rifle."];
    const NewBarrelDesc406 = ["406mm barrel for MK9 Mutant 9x39 Assault Rifle","406mm MK9","406mm barrel for MK9 Mutant 9x39 Assault Rifle."];
    const NewBarrelDesc165in = ["16.5 Inch barrel for MK9 Mutant 9x39 Assault Rifle","16.5in MK9","16.5 Inch barrel for MK9 Mutant 9x39 Assault Rifle."];
    const NewBarrelDesc18in = ["18 Inch barrel for MK9 Mutant 9x39 Assault Rifle","18in MK9","18 Inch barrel for MK9 Mutant 9x39 Assault Rifle."];
    const NewBarrelDesc20in = ["20 Inch barrel for MK9 Mutant 9x39 Assault Rifle","20in MK9","20 Inch barrel for MK9 Mutant 9x39 Assault Rifle."];

    KaijuApi.NewItemClone("55d35ee94bdc2d61338b4568", mk9260, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, mk9BarrelsPrice[0], NewBarrelCurrency, NewBarrelDesc260);
    KaijuApi.NewItemClone("55d3632e4bdc2d972f8b4569", mk9370, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, mk9BarrelsPrice[1], NewBarrelCurrency, NewBarrelDesc370);
    KaijuApi.NewItemClone("5c0e2f94d174af029f650d56", mk9406, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, mk9BarrelsPrice[2], NewBarrelCurrency, NewBarrelDesc406);
    KaijuApi.NewItemClone("5bb20da5d4351e0035629dbf", mk9165in, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, mk9BarrelsPrice[3], NewBarrelCurrency, NewBarrelDesc165in);
    KaijuApi.NewItemClone("5d440b93a4b9364276578d4b", mk918in, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, mk9BarrelsPrice[4], NewBarrelCurrency, NewBarrelDesc18in);
    KaijuApi.NewItemClone("5d440b9fa4b93601354d480c", mk920in, NewBarrelPrefabPath, NewBarrelCategory, NewBarrelTrader, NewBarrelTraderLoyalty, mk9BarrelsPrice[5], NewBarrelCurrency, NewBarrelDesc20in);

    const ItemID = m4a1Id;
    const NewItemID = "SREBRNA_CMMG_MK9_9x39_ASSAULT_RIFLE";
    const NewItemPrefabPath = "";
    const NewItemCategory = "Assaultrifles";
    const NewItemTrader = "Peacekeeper";
    const NewItemTraderLoyalty = 2;
    const NewItemPrice = "218";
    const NewItemCurrency = "USD";
    const NewItemDesc = ["Srebrna MK9 Mutant 9x39mm Assault Rifle","SBRN MK9","A CMMG Mutant MK47 chambered in 9x39mm"];

    KaijuApi.NewItemClone(ItemID, NewItemID, NewItemPrefabPath, NewItemCategory, NewItemTrader, NewItemTraderLoyalty, NewItemPrice, NewItemCurrency, NewItemDesc);
    DatabaseServer.tables.globals.config.Mastering[0].Templates.push(NewItemID);
    item[mk9clone]._props.Chambers[0]._props.filters[0].Filter = [];
    item[mk9clone]._props.RecoilForceUp = 185;
    item[mk9clone]._props.RecoilForceBack = 435;
    item[mk9clone]._props.ammoCaliber = "Caliber9x39";
    item[mk9clone]._props.weapFireType = [];
    item[mk9clone]._props.weapFireType.push("single");
    item[mk9clone]._props.weapFireType.push("fullauto");
    item[mk9clone]._props.bFirerate = 900;
    item[mk9clone]._props.Slots[1]._props.filters[0].Filter.push("57838f0b2459774a256959b2");
    item[mk9clone]._props.Slots[1]._props.filters[0].Filter.push("57838f9f2459774a150289a0");
    item[mk9clone]._props.Slots[1]._props.filters[0].Filter.push("5a9e81fba2750c00164f6b11");
    item[mk9clone]._props.ItemSound = ("weap_ar");



    for (const upper of ARUppers) {
        item[upper]._props.Slots[1]._props.filters[0].Filter.push(mk9260);
        item[upper]._props.Slots[1]._props.filters[0].Filter.push(mk9370);
        item[upper]._props.Slots[1]._props.filters[0].Filter.push(mk9406);
        item[upper]._props.Slots[1]._props.filters[0].Filter.push(mk9165in);
        item[upper]._props.Slots[1]._props.filters[0].Filter.push(mk918in);
        item[upper]._props.Slots[1]._props.filters[0].Filter.push(mk920in);
    }



    for (const count of mk9Barrels){
        item["5447a9cd4bdc2dbd208b4567"]._props.ConflictingItems.push(count)
        item["5447a9cd4bdc2dbd208b4567"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e")
        item["5447a9cd4bdc2dbd208b4567"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799")
        item["5d43021ca4b9362eab4b5e25"]._props.ConflictingItems.push(count)
        item["5d43021ca4b9362eab4b5e25"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e")
        item["5d43021ca4b9362eab4b5e25"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799")
        item["5c07c60e0db834002330051f"]._props.ConflictingItems.push(count)
        item["5c07c60e0db834002330051f"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e")
        item["5c07c60e0db834002330051f"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799")
        item["5bb2475ed4351e00853264e3"]._props.ConflictingItems.push(count)
        item["5bb2475ed4351e00853264e3"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e")
        item["5bb2475ed4351e00853264e3"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799")
        if(!item["weapon_colt_m16a4_556x45"]){
        } else {
            item["weapon_colt_m16a4_556x45"]._props.ConflictingItems.push(count) //Mira's M16
            item["weapon_colt_m16a4_556x45"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e") //Mira's M16
            item["weapon_colt_m16a4_556x45"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799") //Mira's M16
        }
        if(!item["010421_ATL_WPN_ATL15_BLK"]){
        } else {
            item["010421_ATL_WPN_ATL15_BLK"]._props.ConflictingItems.push(count) //Atlas 300blk
            item["010421_ATL_WPN_ATL15_BLK"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e") //Atlas 300blk
            item["010421_ATL_WPN_ATL15_BLK"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799") //Atlas 300blk
        }
        if(!item["010421_ATL_WPN_ATL15_FDE"]){
        } else {
            item["010421_ATL_WPN_ATL15_FDE"]._props.ConflictingItems.push(count) //Atlas 5.56
            item["010421_ATL_WPN_ATL15_FDE"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e") //Atlas 5.56
            item["010421_ATL_WPN_ATL15_FDE"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799") //Atlas 5.56
        }
        if(!item["weapon_st_ar15_300blk"]){
        } else {
            item["weapon_st_ar15_300blk"]._props.ConflictingItems.push(count) //Carl's STAR-15
        }
        if(!item["weapon_arblackout_300blk"]){
        } else {
            item["weapon_arblackout_300blk"]._props.ConflictingItems.push(count) //Carl's 300BLK M4
        }
        if(!item["weapon_ArmWest_M4"]){
        } else {
            item["weapon_ArmWest_M4"]._props.ConflictingItems.push(count) //Fershte's weird project
            item["weapon_ArmWest_M4"]._props.ConflictingItems.push("5fbbfabed5cb881a7363194e") //Fershte's weird project
            item["weapon_ArmWest_M4"]._props.ConflictingItems.push("5fbbfacda56d053a3543f799") //Fershte's weird project
        }
        item[count]._props.Slots[0]._props.filters[0].filter = []
    }

    for (const count of arBarelsArray){
        item[mk9clone]._props.ConflictingItems.push(count)
    }

    for (const round of VSSAMMO) {  //Adding 9x39 to chamber
        item[mk9clone]._props.Chambers[0]._props.filters[0].Filter.push(round);
    }

    const CMMGMDArr =[
        "5d026791d7ad1a04a067ea63", //Fortis Red Brake 7.62x51 muzzle brake for AR-10
        "5b7d693d5acfc43bca706a3d", //Compensator 2A "X3" 7.62x51 for AR-10
        "5bbdb8bdd4351e4502011460", //Muzzle brake Odin Works Atlas-7 7.62x51 for AR-10
        "5c7951452e221644f31bfd5c", //Venom Antidote muzzle brake & compensator for АК
        "5cdd7685d7f00c000f260ed2", //Muzzle brake Keeno Arms SHREWD 7.62x51 for AR-10
        "5cf78496d7f00c065703d6ca", //Direct Thread adapter for the Lantac Blast mitigation device.
        "5649ab884bdc2ded0b8b457f", //Zenit DTK-1 7.62x39 & 5.45x39 muzzle brake & compensator for AK
        "5c878e9d2e2216000f201903", //Lantac Dragon 7.62x51 muzzle brake
        "5c878ebb2e2216001219d48a", //Lantac Dragon 7.62x39 muzzle brake & compensator for AK
        "5cc9ad73d7f00c000e2579d4", // SRVV 7.62x39 АК muzzle brake & compensator
        "59fb257e86f7742981561852", //Zenit DTK-4М muzzle brake
        "5e208b9842457a4a7a33d074", // Hexagon "DTKP MK.2" 7.62x39 sound suppressor
        "593d489686f7745c6255d58a", //Hexagon AKM 7.62x39 sound suppressor
        "5a0d63621526d8dba31fe3bf", //PBS-1 7.62x39 silencer
        "5a9fbacda2750c00141e080f", //Rotor 43 7.62x39 muzzle brake
        "5f633f791b231926f2329f13", //JMAC RRD-4C muzzle brake for AK-74 type thread
        "5f633f68f5750b524b45f112", //JMAC RRD-4C 7.62x39 muzzle brake for AKM type thread
        "59bffc1f86f77435b128b872", //Direct Thread for Hybrid 46
        "5c7954d52e221600106f4cc7", //Direct Thread Mount adapter for Gemtech ONE.
        "5a34fd2bc4a282329a73b4c5", //AAC Blackout 51T flash hider (7.62x51)
        "5d443f8fa4b93678dd4a01aa", //Thunder Beast 30CB Muzzle Brake 7.62x51
        "5d1f819086f7744b355c219b", //Daniel Defense Wave Muzzle Brake 7.62x51
        "5dfa3cd1b33c0951220c079b", //KAC QDC Flash suppressor kit 7.62x51 flash hider
        "5fbe7618d6fa9c00c571bb6c", //Sig-Sauer "SRD" 7.62x51 Sound Suppressor
        "5fbc22ccf24b94483f726483", //SIG Taper-LOK Muzzle Adapter
        "5a0abb6e1526d8000a025282", //Taktika Tula AK and AKM adapter
        "5a9ea27ca2750c00137fa672" , //Spike tactical dynacomp 7.62x39 muzzle brake & compensator for AK
        "5f2aa4559b44de6b1b4e68d1" //Regular RFB 7.62x51 Flash hider
    ]

    for(const md of CMMGMDArr) {
        let itemToAdd = md;
        for(const barrel of mk9Barrels) {
            if(!item[barrel]._props.Slots[0]._props.filters[0].filter.includes(itemToAdd)){
                item[barrel]._props.Slots[0]._props.filters[0].filter.push(itemToAdd);
            }
        }
    }
    for (const upper of ARUppers) {
        item[upper]._props.Slots[1]._props.filters[0].Filter.push("5fbbfabed5cb881a7363194e");
        item[upper]._props.Slots[1]._props.filters[0].Filter.push("5fbbfacda56d053a3543f799");
    }
}