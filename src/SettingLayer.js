/**
 * Created by Sharezer on 15/8/12.
 */

var SettingLayer = BaseLayer.extend({
    initUI:function(){

        var size = cc.winSize;

        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
                GameManager.getInstance().changeState(GL.GAME_STATE.START);
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
        this.addChild(menu, 1);

        var helloLabel = new cc.LabelTTF("Setting Layer", "Arial", 72);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height;
        helloLabel.anchorY = 1;
        this.addChild(helloLabel, 5);
    }
});