/**
 * Created by Sharezer on 15/8/12.
 */

var BaseLayer = cc.Layer.extend({
    _rootNode: null,
    _focusNode: null,

    ctor: function (showAction) {
        this._super();
        this.init(showAction);
        return true;
    },
    init: function (swallowTouches, showAction) {
        if (swallowTouches){
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: function(){
                    cc.log("swallow touches");
                    return true;
                }
            }, this);
        }

        //开启打开窗体弹出效果
        if (showAction) {
            var obj = this;
            obj.setScale(0.6);
            if (obj != null) {
                var sl = new cc.EaseIn(new cc.ScaleTo(0.15, 1.1), 2);
                var sl2 = new cc.ScaleTo(0.15, 1);
                var seq = new cc.Sequence(sl, sl2);
                obj.runAction(seq);
            }
        }
        this.initUI();
    },
    initUI: function () {
        cc.log("base layer initUI");
    },
    closeSelf: function () {
        if (this == GM._uiMain)
            GM.closeUIMain();
        else if (this == GM._uiSecond)
            GM.closeUISecond();
        else if (this == GM._uiThird)
            GM.closeUIThird();
        else if (this == GM._uiDialog)
            GM.closeDialog();
    },
    onClickBack: function () {

    },
    onClickMenu: function () {

    },
    onClickOK: function () {

    },
    onClickDirection: function (direction) {

    }
});