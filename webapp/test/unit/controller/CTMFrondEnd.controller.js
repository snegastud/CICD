/*global QUnit*/

sap.ui.define([
	"ctmservice/controller/CTMFrondEnd.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CTMFrondEnd Controller");

	QUnit.test("I should test the CTMFrondEnd controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
