/**
 * Created by Sharezer on 15/8/12.
 */

var StartLayer = BaseLayer.extend({
    initUI: function () {

        var size = cc.winSize;

        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
                GameManager.getInstance().changeState(GL.GAME_STATE.SETTING);
            }, this);
        closeItem.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 2);

        var helloLabel = new cc.LabelTTF("Start Layer", "Arial", 72);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height;
        helloLabel.anchorY = 1;
        this.addChild(helloLabel, 3);

        this._rootNode = ccs.csLoader.createNode(res.MainMenu_json);
        this._rootNode.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        })
        this.addChild(this._rootNode, 4);

        var btns = ccui.helper.seekWidgetByName(this._rootNode, "Pc_Bg_4").getChildren();
        var length = btns.length;
        for (var i = 0; i < length; i++) {
            var btn = btns[i];
            btn.addTouchEventListener(this.touchEvent, this);
        }
    },
    touchEvent: function (sender, type) {
        if (type != ccui.Widget.TOUCH_ENDED)
            return;
        cc.log(sender.name);

        if (sender.name == "BtnSetting_14")
            GameManager.getInstance().changeState(GL.GAME_STATE.SETTING);
        else
            GameManager.getInstance().changeState(GL.GAME_STATE.BATTLE);
    }

});