/**
 * Created by Sharezer on 15/8/12.
 */

var GL = GL || {};

GL.GAME_STATE = {
    NOON: 0,
    LOADING: 1,
    START: 2,
    GAMING: 3,
    GAME_OVER: 4,
    SETTING:5
};

//back ground music type
GL.BGM_TYPE = {
    NOON: 0,
    START_MENU: 1,
    GAMING: 2,
    GAME_OVER: 3
};

GL.SOUND_TYPE = {
    NOON: 0,
    BTN: 1,
    WARN: 2,
    HIT: 3,
    LOSE: 4,
    EAT: 5
};

GL.DIALG_TYPE = {
    NONE: 0,
    AUTO_CLOSE: 1,
    ONE_BTN: 2,
    TWO_BTN: 3
};
