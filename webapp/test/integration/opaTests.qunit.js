/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["ctmservice/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
