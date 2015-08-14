/**
 * Created by Sharezer on 15/8/12.
 */

var Tools = Tools || {};

Tools.SafeRemove = function (sender) {
    if (sender)
        sender.removeFromParent();
};