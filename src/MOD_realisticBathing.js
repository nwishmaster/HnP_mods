/*
    @author: nwishmaster <nw_shmaster@protonmail.com>
    @version: 1.0.0
    @description "Realistic Bathing MOD" changes bathing in game making clearing Hazumi vagina more difficult
 */
(function () {
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.apply(this, arguments);
        overrideDatabase("$dataCommonEvents", {
            "id": 25,
            "list": [
                {"code": 122, "indent": 0, "parameters": [310, 310, 0, 1, 10]},
                {"code": 122, "indent": 0, "parameters": [311, 311, 0, 1, 11]},
                {"code": 355, "indent": 0, "parameters": ["this.scrapeModifier = 0"]},
                {"code": 655, "indent": 0, "parameters": ["this.semenSaved = 100"]},
                {"code": 111, "indent": 0, "parameters": [1, 61, 0, 1, 1]},
                {"code": 122, "indent": 1, "parameters": [10, 10, 0, 0, 0]},
                {"code": 122, "indent": 1, "parameters": [11, 11, 0, 0, 0]},
                {"code": 119, "indent": 1, "parameters": ["精液除算終了"]},
                {"code": 0, "indent": 1},
                {"code": 411, "indent": 0},
                {"code": 111, "indent": 1, "parameters": [1, 151, 0, 1, 1]},
                {"code": 111, "indent": 2, "parameters": [1, 150, 0, 1, 1]},
                {"code": 108, "indent": 3, "parameters": ["給湯器・シャワー"]},
                {"code": 122, "indent": 3, "parameters": [10, 10, 4, 2, 5, 9]},
                {"code": 122, "indent": 3, "parameters": [10, 10, 2, 0, 50]},
                {"code": 355, "indent": 3, "parameters": ["this.semenSaved = 90"]},
                {"code": 119, "indent": 3, "parameters": ["精液除算終了"]},
                {"code": 0, "indent": 3},
                {"code": 411, "indent": 2},
                {"code": 108, "indent": 3, "parameters": ["シャワーのみ"]},
                {"code": 122, "indent": 3, "parameters": [10, 10, 4, 2, 4, 8]},
                {"code": 122, "indent": 3, "parameters": [10, 10, 2, 0, 20]},
                {"code": 355, "indent": 3, "parameters": ["this.semenSaved = 80"]},
                {"code": 119, "indent": 3, "parameters": ["精液除算終了"]},
                {"code": 0, "indent": 3},
                {"code": 412, "indent": 2},
                {"code": 0, "indent": 2},
                {"code": 411, "indent": 1},
                {"code": 108, "indent": 2, "parameters": ["シャワーなし"]},
                {"code": 122, "indent": 2, "parameters": [10, 10, 4, 2, 4, 6]},
                {"code": 355, "indent": 2, "parameters": ["this.semenSaved = 70"]},
                {"code": 119, "indent": 2, "parameters": ["精液除算終了"]},
                {"code": 0, "indent": 2},
                {"code": 412, "indent": 1},
                {"code": 0, "indent": 1},
                {"code": 412, "indent": 0},
                {"code": 118, "indent": 0, "parameters": ["精液除算終了"]},
                {"code": 111, "indent": 0, "parameters": [1, 11, 0, 0, 4]},
                {"code": 122, "indent": 1, "parameters": [11, 11, 0, 0, 0]},
                {"code": 0, "indent": 1},
                {"code": 412, "indent": 0, "parameters": []},
                {"code": 111, "indent": 0, "parameters": [1, 10, 0, 0, 4]},
                {"code": 122, "indent": 1, "parameters": [10, 10, 0, 0, 0]},
                {"code": 0, "indent": 1}, {"code": 412, "indent": 0, "parameters": []},
                {"code": 111, "indent": 0, "parameters": [1, 13, 0, 0, 4]},
                {"code": 122, "indent": 1, "parameters": [13, 13, 0, 0, 0]}, {"code": 0, "indent": 1},
                {"code": 412, "indent": 0, "parameters": []},
                {"code": 111, "indent": 0, "parameters": [12, "$gameTemp.tempScrapeSperm"]},
                {"code": 355, "indent": 1, "parameters": ["this.scrapeModifier = 5"]},
                {"code": 0, "indent": 1, "parameters": []},
                {"code": 412, "indent": 0, "parameters": []},
                {
                    "code": 122,
                    "indent": 0,
                    "parameters": [311, 311, 0, 4, "($gameVariables.value(11) * (this.semenSaved + this.scrapeModifier)) / 100"]
                },
                {"code": 122, "indent": 0, "parameters": [310, 310, 2, 1, 10]},
                {"code": 122, "indent": 0, "parameters": [11, 11, 2, 1, 311]},
                {"code": 111, "indent": 0, "parameters": [0, 54, 0]},
                {"code": 101, "indent": 1, "parameters": ["", 0, 0, 2]},
                {"code": 401, "indent": 1, "parameters": ["\\n[1] cleans her cum soaked pussy..."]},
                {"code": 121, "indent": 1, "parameters": [54, 54, 1]},
                {"code": 0, "indent": 1, "parameters": []},
                {"code": 412, "indent": 0, "parameters": []},
                {"code": 108, "indent": 0, "parameters": ["精液洗い流したら"]},
                {
                    "code": 111,
                    "indent": 0,
                    "parameters": [12, "$gameVariables.value(310)>=1 || $gameVariables.value(311)>=1"]
                },
                {"code": 111, "indent": 1, "parameters": [0, 4, 0]},
                {"code": 355, "indent": 2, "parameters": ["v[102] = `While in the bath,\\n`"]},
                {"code": 655, "indent": 2, "parameters": ["if(v[310]){ "]},
                {
                    "code": 655,
                    "indent": 2,
                    "parameters": ["  v[102] += `\\x1bc[2] \\x1bv[310] \\x1bc[0] mL of semen was washed off.\\n`"]
                },
                {"code": 655, "indent": 2, "parameters": ["}"]},
                {"code": 655, "indent": 2, "parameters": ["if(v[311]){ "]},
                {
                    "code": 655,
                    "indent": 2,
                    "parameters": ["  v[102] += `\\x1bc[2] \\x1bv[311] \\x1bc[0] mL of semen was removed from the vagina.`"]
                },
                {"code": 655, "indent": 2, "parameters": ["}"]},
                {"code": 101, "indent": 2, "parameters": ["", 0, 0, 2]},
                {"code": 401, "indent": 2, "parameters": ["\\v[102]"]},
                {"code": 0, "indent": 2, "parameters": []},
                {"code": 411, "indent": 1, "parameters": []},
                {"code": 101, "indent": 2, "parameters": ["", 0, 0, 2]},
                {
                    "code": 401,
                    "indent": 2,
                    "parameters": ["\\n[1] washes away the semen from her body while in the bath..."]
                },
                {"code": 0, "indent": 2, "parameters": []},
                {"code": 412, "indent": 1, "parameters": []},
                {"code": 0, "indent": 1, "parameters": []},
                {"code": 412, "indent": 0, "parameters": []},
                {"code": 0, "indent": 0}],
            "name": "Semen in Bath Calculation",
            "switchId": 1,
            "trigger": 0
        });
    };
})();
