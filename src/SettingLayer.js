/**
 * Created by Sharezer on 15/8/12.
 */

var SettingLayer = BaseLayer.extend({
    initUI: function () {

        var size = cc.winSize;

        this._rootNode = ccs.csLoader.createNode(res.Setting_json);
        this._rootNode.attr({
            x: size.width / 2,
            y: size.height / 2,
            anchorX: 0.5,
            anchorY: 0.5
        })
        this.addChild(this._rootNode, 4);

        var btn = ccui.helper.seekWidgetByName(this._rootNode, "Button_9");
        btn.addTouchEventListener(this.touchEvent, this);
    },
    touchEvent: function (sender, type) {
        if (type != ccui.Widget.TOUCH_ENDED)
            return;
        cc.log(sender.name);
        if (sender.name == "Button_9")
            this.closeSelf();
        //GameManager.getInstance().changeState(GL.GAME_STATE.START);
    }
});