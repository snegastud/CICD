/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require([
    "ctmservice/test/unit/AllTests"
], function () {
    "use strict";

    QUnit.start();
});