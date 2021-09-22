class project_9x39{
    constructor(){
        this.mod = "Project 9x39";
        core_f.packager.onLoad[this.mod] = this.load.bind(this);
        common_f.logger.logInfo('Loading : ${this.mod}');
    }
            load(){
                const lib = A_1_Lirikana_Weaponlib.mod;
        }
}
module.exports.Mod = project_9x39;