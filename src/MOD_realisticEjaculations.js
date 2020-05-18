/*
    @author: nwishmaster <nwishmaster@mailbox.org>
    @version: 0.9.0
    @description "Realistic Ejaculation MOD" adds creampies possibility to leak through vagina into uterus
 */
(function () {
    const _cumInsideFn = prostitute.cumInside;
    prostitute.cumInside = () => {
        const V = $gameVariables._data || {};
        const IS_IN_VAGINA = V[328] === 1;
        const WITH_CONDOM = V[86] === 1;
        let sperm_count = 0;

        _cumInsideFn.apply(this, arguments);

        if (IS_IN_VAGINA && !WITH_CONDOM && V[21] >= 3) {
            sperm_count = V[21] * randmm(75, 150) + randmm(1, 100);

            if (sperm_count >= 1) {
                bun('From \x1bv[21]ml ejaculated to vagina, \n\x1bc[1]' + `${sperm_count}` + '\x1bc[0] sperm reach \x1bn[1]\'s uterus');
            }

            V[13] += sperm_count;
            V[53] += sperm_count;
        }
    }
})();
