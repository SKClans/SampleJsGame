/**
 * Created by Sharezer on 15/8/12.
 */



var GameManager = cc.Class.extend({
    _gameState: null,
    _scene: null,
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
        var layer = null;
        switch (state) {
            case GL.GAME_STATE.LOADING:
                break;
            case GL.GAME_STATE.START:
                layer = new StartLayer();
                break;
            case GL.GAME_STATE.GAMING:
                break;
            case GL.GAME_STATE.GAME_OVER:
                break;
            case GL.GAME_STATE.SETTING:
                layer = new SettingLayer();
                break;
            default:
                cc.warn("game state is not find");
                state = GL.GAME_STATE.NOON;
                break;
        }

        if (state != GL.GAME_STATE.NOON && layer){
            cc.director.runScene(layer);
            this._state = state;
        }
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
    playBGM: function () {

    },
    playSound: function () {

    }
});

var g_shareGameManager = null;
GameManager.getInstance = function () {
    if (g_shareGameManager == null) {
        g_shareGameManager = new GameManager();
    }
    return g_shareGameManager;
}

