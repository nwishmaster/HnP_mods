/*
    @author: nwishmaster <nw_shmaster@protonmail.com>
    @version: 1.0.0
 */
(function () {
    const _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function () {
        _Scene_Boot_start.apply(this, arguments);
        overrideDatabase("$dataCommonEvents", {
            "id": 7,
            "name": "Pregnancy Progress",
            "switchId": 1,
            "trigger": 0,
            "list": [
                {
                    "code": 117,
                    "indent": 0,
                    "parameters": [205]
                },
                {
                    "code": 111,
                    "indent": 0,
                    "parameters": [0, 297, 0]
                },
                {
                    "code": 111, "indent": 1, "parameters": [12, "!isBoteMin()"]
                },
                {
                    "code": 111,
                    "indent": 2,
                    "parameters": [12, "prostitute.judgeCombinedPregnancy.call(this)"]
                },
                {
                    "code": 111, "indent": 3, "parameters": [0, 4, 0]
                },
                {
                    "code": 250,
                    "indent": 4,
                    "parameters": [{
                        "name": "Starlight", "volume": 90, "pitch": 100, "pan": 0
                    }]
                },
                {
                    "code": 101, "indent": 4, "parameters": ["", 0, 0, 2]
                },
                {
                    "code": 401,
                    "indent": 4,
                    "parameters": ["In the uterus of the already pregnant \\n[1], a new "]
                },
                {
                    "code": 401, "indent": 4, "parameters": ["life has taken hold...!"]
                },
                {
                    "code": 0,
                    "indent": 4,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 3, "parameters": []
                },
                {
                    "code": 355,
                    "indent": 3,
                    "parameters": ["prostitute.combinedPregnancy.call(this)"]
                },
                {
                    "code": 0, "indent": 3, "parameters": []
                },
                {
                    "code": 412, "indent": 2, "parameters": []
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [0, 38, 1]
                },
                {
                    "code": 0, "indent": 2, "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 0,
                    "indent": 1,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 0, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 0,
                    "parameters": [0, 36, 0]
                },
                {
                    "code": 111, "indent": 1, "parameters": [0, 4, 0]
                },
                {
                    "code": 101,
                    "indent": 2,
                    "parameters": ["", 0, 0, 2]
                },
                {
                    "code": 401,
                    "indent": 2,
                    "parameters": ["The baby in \\n[1]'s womb is getting bigger and "]
                },
                {
                    "code": 401, "indent": 2, "parameters": ["bigger......"]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 122,
                    "indent": 1,
                    "parameters": [43, 43, 1, 2, 5, 14]
                },
                {
                    "code": 0, "indent": 1, "parameters": []
                },
                {
                    "code": 411, "indent": 0, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [12, "isBoteMed()"]
                },
                {
                    "code": 122, "indent": 2, "parameters": [43, 43, 1, 2, 1, 4]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [12, "isBoteBig()"]
                },
                {
                    "code": 122,
                    "indent": 2,
                    "parameters": [43, 43, 1, 4, "Math.round(randmm(501,2800)/1000)"]
                },
                {
                    "code": 0, "indent": 2, "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [12, "!isBote()"]
                },
                {
                    "code": 122, "indent": 2, "parameters": [43, 43, 1, 2, 1, 5]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 0, "indent": 1, "parameters": []
                },
                {
                    "code": 412,
                    "indent": 0,
                    "parameters": []
                },
                {
                    "code": 111, "indent": 0, "parameters": [1, 43, 1, 45, 1]
                },
                {
                    "code": 117,
                    "indent": 1,
                    "parameters": [244]
                },
                {
                    "code": 0, "indent": 1, "parameters": []
                },
                {
                    "code": 412, "indent": 0, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 0,
                    "parameters": [0, 43, 0]
                },
                {
                    "code": 111, "indent": 1, "parameters": [1, 245, 0, 0, 2]
                },
                {
                    "code": 108,
                    "indent": 2,
                    "parameters": ["妊娠発覚してまだ薬局が開放されていない場合、開放"]
                },
                {
                    "code": 122, "indent": 2, "parameters": [1, 1, 0, 0, 11]
                },
                {
                    "code": 121,
                    "indent": 2,
                    "parameters": [1, 1, 0]
                },
                {
                    "code": 101, "indent": 2, "parameters": ["", 0, 0, 2]
                },
                {
                    "code": 401,
                    "indent": 2,
                    "parameters": ["\\n<\\n[1]>I finally got pregnant...... I should go to the pharmacy "]
                },
                {
                    "code": 401, "indent": 2, "parameters": ["and buy medicine."]
                },
                {
                    "code": 250,
                    "indent": 2,
                    "parameters": [{
                        "name": "Item1", "volume": 90, "pitch": 100, "pan": 0
                    }]
                },
                {
                    "code": 101, "indent": 2, "parameters": ["", 0, 0, 2]
                },
                {
                    "code": 401,
                    "indent": 2,
                    "parameters": ["You can now go to the \\c[2]pharmacy\\c[0]."]
                },
                {
                    "code": 122, "indent": 2, "parameters": [245, 245, 0, 0, 2]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 0, "indent": 1, "parameters": []
                },
                {
                    "code": 412,
                    "indent": 0,
                    "parameters": []
                },
                {
                    "code": 117, "indent": 0, "parameters": [204]
                },
                {
                    "code": 111,
                    "indent": 0,
                    "parameters": [12, "isBoteMed()"]
                },
                {
                    "code": 111, "indent": 1, "parameters": [0, 46, 1]
                },
                {
                    "code": 121,
                    "indent": 2,
                    "parameters": [1, 1, 0]
                },
                {
                    "code": 122, "indent": 2, "parameters": [1, 1, 0, 0, 5]
                },
                {
                    "code": 101,
                    "indent": 2,
                    "parameters": ["", 0, 0, 2]
                },
                {
                    "code": 401, "indent": 2, "parameters": ["\\n[1]'s belly is starting to swell..."]
                },
                {
                    "code": 121,
                    "indent": 2,
                    "parameters": [46, 46, 0]
                },
                {
                    "code": 0, "indent": 2, "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 0,
                    "indent": 1,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 0, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 0,
                    "parameters": [12, "!isBote()"]
                },
                {
                    "code": 115, "indent": 1, "parameters": []
                },
                {
                    "code": 0, "indent": 1, "parameters": []
                },
                {
                    "code": 412,
                    "indent": 0,
                    "parameters": []
                },
                {
                    "code": 122, "indent": 0, "parameters": [21, 21, 0, 1, 43]
                },
                {
                    "code": 122,
                    "indent": 0,
                    "parameters": [21, 21, 2, 1, 44]
                },
                {
                    "code": 111, "indent": 0, "parameters": [1, 21, 0, 0, 4]
                },
                {
                    "code": 122,
                    "indent": 1,
                    "parameters": [21, 21, 0, 0, 0]
                },
                {
                    "code": 0, "indent": 1, "parameters": []
                },
                {
                    "code": 412, "indent": 0, "parameters": []
                },
                {
                    "code": 122,
                    "indent": 0,
                    "parameters": [21, 21, 3, 0, 4]
                },
                {
                    "code": 111, "indent": 0, "parameters": [12, "isRingetsu()"]
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [12, "hasMultiBaby()"]
                },
                {
                    "code": 122, "indent": 2, "parameters": [21, 21, 1, 2, 7, 15]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [1, 43, 1, 52, 1]
                },
                {
                    "code": 122, "indent": 2, "parameters": [21, 21, 1, 2, 12, 25]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 122,
                    "indent": 1,
                    "parameters": [23, 23, 0, 0, 24]
                },
                {
                    "code": 122, "indent": 1, "parameters": [23, 23, 1, 1, 21]
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [1, 23, 0, 70, 1]
                },
                {
                    "code": 122, "indent": 2, "parameters": [23, 23, 0, 0, 70]
                },
                {
                    "code": 0,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 111,
                    "indent": 1,
                    "parameters": [12, "randper($gameVariables.value(23))"]
                },
                {
                    "code": 121, "indent": 2, "parameters": [456, 456, 0]
                },
                {
                    "code": 115,
                    "indent": 2,
                    "parameters": []
                },
                {
                    "code": 0, "indent": 2, "parameters": []
                },
                {
                    "code": 412, "indent": 1, "parameters": []
                },
                {
                    "code": 0,
                    "indent": 1
                },
                {
                    "code": 412, "indent": 0, "parameters": []
                },
                {
                    "code": 0, "indent": 0
                }
            ]
        });
    };
})();
