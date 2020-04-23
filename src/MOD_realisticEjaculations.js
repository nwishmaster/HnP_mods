/*
    @author: nwishmaster <nwishmaster@mailbox.org>
    @version: 0.9.0
    @description "Realistic Ejaculation MOD" adds creampies possibility to leak through vagina into uterus

    Note that this mod uses game variable #700
 */
(function () {
    /* Drop variable 700 after sex event */
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.apply(this, arguments);
        overrideDatabase("$dataCommonEvents", {
            "id": 84,
            "list": [
                { "code": 108, "indent": 0, "parameters": ["精液処理"] },
                { "code": 122, "indent": 0, "parameters": [10, 10, 1, 1, 76] },
                { "code": 122, "indent": 0, "parameters": [10, 10, 1, 1, 78] },
                { "code": 122, "indent": 0, "parameters": [11, 11, 1, 1, 77] },
                { "code": 122, "indent": 0, "parameters": [50, 50, 1, 1, 76] },
                { "code": 122, "indent": 0, "parameters": [50, 50, 1, 1, 78] },
                { "code": 122, "indent": 0, "parameters": [51, 51, 1, 1, 77] },
                { "code": 122, "indent": 0, "parameters": [49, 49, 1, 0, 1] },
                { "code": 108, "indent": 0, "parameters": ["recently精液リセット"] },
                { "code": 121, "indent": 0, "parameters": [85, 85, 1] },
                { "code": 121, "indent": 0, "parameters": [86, 86, 1] },
                { "code": 122, "indent": 0, "parameters": [76, 78, 0, 0, 0] },
                { "code": 122, "indent": 0, "parameters": [73, 73, 0, 0, 0] },
                { "code": 122, "indent": 0, "parameters": [382, 382, 0, 0, 0] },
                { "code": 122, "indent": 0, "parameters": [700, 700, 0, 0, 0] },
                { "code": 0, "indent": 0, "parameters": [] }
            ],
            "name": "Semen Assignment/Semen Reset",
            "switchId": 1,
            "trigger": 0
        });
    };

    const _cumInsideFn = prostitute.cumInside;
    prostitute.cumInside = () => {
        const INFO_STATIC_TEXT = 'ml ejaculated to vagina, \n\x1bc[1]\x1bv[21]\x1bc[0] sperm reach \x1bn[1]\'s uterus';
        const V = $gameVariables._data || {};
        const IS_IN_VAGINA = V[328] === 1;
        const WITH_CONDOM = V[86] === 1;
        const EJACULATED_AMOUNT = V[77];
        const LAST_EJACULATED_AMOUNT = V[700] || 0;
        let ejaculation_delta = EJACULATED_AMOUNT - LAST_EJACULATED_AMOUNT;

        if (ejaculation_delta < 0) {
            ejaculation_delta = 0;
        }

        _cumInsideFn.apply(this, arguments);

        if (IS_IN_VAGINA && !WITH_CONDOM && ejaculation_delta >= 3) {
            V[21] = ejaculation_delta * randmm(75, 150) + randmm(1, 100);

            if (V[21] >= 1) {
                bun(`From ${ejaculation_delta}` + INFO_STATIC_TEXT);
            }

            V[13] += V[21];
            V[53] += V[21];
            V[700] = V[77];
        }
    }
})();
