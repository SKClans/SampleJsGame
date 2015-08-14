/**
 * Created by Sharezer on 15/8/13.
 */

var BattleLayer = BaseLayer.extend({
    initUI: function () {

        var size = cc.winSize;

        this._rootNode = ccs.csLoader.createNode(res.Battle_json);
        this._rootNode.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.addChild(this._rootNode, 1);

        /*
         ccs.armatureDataManager.addArmatureFileInfo(res.JackAni_json);
         var armature = new ccs.Armature("Captain_Jack");
         //armature.getAnimation().play("a1");
         armature.x = size.width / 2;
         armature.y = size.height / 2;
         this.addChild(armature, 5);
         */

        var jack = ccs.csLoader.createNode(res.JackAni_json);
        jack.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.addChild(jack, 2);
        var action = ccs.actionTimelineCache.createAction(res.JackAni_json);
        action.play("a1", true);
        jack.runAction(action);

        ccui.helper.seekWidgetByName(this._rootNode, "settingBtn").addTouchEventListener(this.touchEvent, this);
        ccui.helper.seekWidgetByName(this._rootNode, "backBtn").addTouchEventListener(this.touchEvent, this);
    },
    touchEvent: function (sender, type) {
        if (type != ccui.Widget.TOUCH_ENDED)
            return;
        cc.log(sender.name);
        if (sender.name == "settingBtn")
            GameManager.getInstance().changeState(GL.GAME_STATE.SETTING);
        else if (sender.name == "backBtn")
            GameManager.getInstance().changeState(GL.GAME_STATE.START);
    }
});