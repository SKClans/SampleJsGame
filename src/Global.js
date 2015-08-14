/**
 * Created by Sharezer on 15/8/12.
 */

var GL = GL || {};

GL.UI_Z_ORDER = {
    NOON: 0,
    MAIN: 1,
    SECOND: 2,
    THIRD: 3
};

GL.GAME_STATE = {
    NOON: 0,
    LOADING: 11,
    START: 12,
    BATTLE: 13,

    GAME_OVER: 21,
    SETTING: 22,

    THIRD_TEST: 31
};

//back ground music type
GL.BGM_TYPE = {
    NOON: 0,
    START_MENU: 1,
    BATTLE: 2,
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
