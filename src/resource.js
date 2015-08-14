var res = {
    HelloWorld_png: "res/HelloWorld.png",
    CloseNormal_png: "res/CloseNormal.png",
    CloseSelected_png: "res/CloseSelected.png",


    MainMenu_json: "res/MainMenu.json",
    Setting_json: "res/Setting.json",
    Battle_json:"res/BattleLayer.json",
    JackAni_json:"res/captain_jack.json"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
