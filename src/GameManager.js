/**
 * Created by Sharezer on 15/8/12.
 *
 * 游戏单例管理类
 * 主要用于管理游戏中的状态
 * UI间的跳转
 * 事件的统一分发
 *
 */

var GameManager = cc.Class.extend({
    _gameState: null,
    _scene: null,
    _uiRoot: null,
    _uiMain: null,
    _uiSecond: null,
    _uiThird: null,
    _uiDialog: null,
    ctor: function () {
        this.initEventListener();
    },

    //TODO: add touch event
    //TODO: add keyEvent
    initEventListener: function () {

    },

    appRun: function () {
        //cc.director.runScene(new HelloWorldScene());
        this.changeState(GL.GAME_STATE.START);
    },

    //TODO: change game state
    changeState: function (state) {
        this.switchMainState(state);
    },
    switchMainState: function (state) {
        var layer = null;
        switch (state) {
            case GL.GAME_STATE.LOADING:
                break;
            case GL.GAME_STATE.START:
                layer = new StartLayer();
                break;
            case GL.GAME_STATE.BATTLE:
                layer = new BattleLayer();
                break;
            default:
                this.switchSecondState(state);
                break;
        }

        if (layer) {
            this.closeUIMain;
            if (state == GL.GAME_STATE.START || state == GL.GAME_STATE.BATTLE) {
                var scene = new cc.Scene();
                this._uiRoot = new cc.Layer();
                this._uiRoot.addChild(layer, GL.UI_Z_ORDER.MAIN);
                scene.addChild(this._uiRoot);
                cc.director.runScene(scene);
                this._scene = scene;
            } else
                this._uiRoot.addChild(layer, GL.UI_Z_ORDER.MAIN);
            this._uiMain = layer;
        }
    },
    switchSecondState: function (state) {
        var layer = null;
        switch (state) {
            case GL.GAME_STATE.GAME_OVER:
                break;
            case GL.GAME_STATE.SETTING:
                layer = new SettingLayer(true, true);
                break;
            default:
                this.switchThirdState(state);
                break;
        }
        if (layer) {
            this.closeUISecond();
            this._uiRoot.addChild(layer, GL.UI_Z_ORDER.SECOND);
            this._uiSecond = layer;
        }

    },
    switchThirdState: function (state) {
        var layer = null;
        switch (state) {
            case GL.GAME_STATE.THIRD_TEST:
                break;
            default:
                cc.warn("game state is not exist");
                state = GL.GAME_STATE.NOON;
                break;
        }

        if (layer) {
            this.closeUIThird();
            this._uiRoot.addChild(layer, GL.UI_Z_ORDER.THIRD);
            this._uiThird = layer;
        }

    },

    closeUIMain: function () {
        Tools.SafeRemove(this._uiMain);
        this._uiMain = null;
        if (this._uiSecond)
            this.closeUISecond();
    },
    closeUISecond: function () {
        Tools.SafeRemove(this._uiSecond);
        this._uiSecond = null;
        if (this._uiThird)
            this.closeUIThird();
    },
    closeUIThird: function () {
        Tools.SafeRemove(this._uiThird);
        this._uiThird = null;
    },
    closeDialog: function () {
        Tools.SafeRemove(this._uiDialog);
        this._uiDialog = null;
    },
    closeTopUI: function () {
        if (this._uiDialog)
            this.closeDialog();
        else if (this._uiThird)
            this.closeUIThird();
        else if (this._uiSecond)
            this.closeUISecond();
    },

    getGameState: function () {
        return this._state;
    },

    //TODO: key event func
    onKeyDown: function () {

    },
    onKeyUp: function () {

    },

    //TODO: play music and sound
    playBGM: function (type, isloop) {
        isloop = isloop || false;
        var fileName = "";
        switch (type) {
            case GL.BGM_TYPE.NOON:
                break;
            case GL.BGM_TYPE.BATTLE:
                break;
            case GL.BGM_TYPE.START_MENU:
                fileName = "test.mp3";
                break;
            case GL.BGM_TYPE.GAME_OVER:
                break;
            default:
                break;
        }

        cc.audioEngine.stopMusic();
        if (fileName && fileName != "")
            cc.audioEngine.playMusic(fileName, isloop);
    },
    playSound: function (type) {
        var fileName = "";
        switch (type) {
            case GL.SOUND_TYPE.NOON:
                break;
            case GL.SOUND_TYPE.BTN:
                break;
            case GL.SOUND_TYPE.WARN:
                break;
            default:
                break;
        }

        if (fileName && fileName != "")
            cc.audioEngine.playEffect(fileName, false);
    }
});


var g_shareGameManager = null;
GameManager.getInstance = function () {
    if (g_shareGameManager == null) {
        g_shareGameManager = new GameManager();
    }
    return g_shareGameManager;
}

GM = GameManager.getInstance();
