/**
 * @name MyPlugin
 * @author YourName
 * @version 0.1.0
 * @description What the plugin does.
 */

module.exports = class MyPlugin {
    constructor(meta) {
        // do something when the plugin is loaded
    }
    start() {
        // do something on plugin start
    }
    stop() {
        // do something on plugin stop
    }
};

function Tee() {
    var e = (0, s.e7)([Y.default], (function() {
            return Y.default.getCurrentUser()
        })),
        // some other variables...
        a = null == e ? void 0 : e.id,
        l = He.Ok.useSetting(),
        c = o.useMemo((function() {
            return null != l ? (0,
            Z8.Z)(l) : null
        }), [l]),
        u = (0, s.cj)([Hc.Z], (function() {
            return {
                streaming: null != Hc.Z.findActivity((function(e) {
                    return e.type === Z.IIU.STREAMING
                }
                )),
                status: Hc.Z.getStatus()
            }
        })),
        f = u.streaming
        d = u.status
        p = (0, s.e7)([oy.Z], (function() {
            return null != a && oy.Z.isSpeaking(a)
        }), [a]),
    // rest...
}
