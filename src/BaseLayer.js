/**
 * Created by Sharezer on 15/8/12.
 */

var BaseLayer = cc.Layer.extend({
    _rootNode:null,
    _focusNode:null,

    ctor: function () {
        this._super();
        this.init();
        return true;
    },
    init: function () {
        this.initUI();
    },
    initUI: function () {
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