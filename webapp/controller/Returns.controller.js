sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/m/library",
	'sap/m/Button',
	'sap/m/Dialog',
	'sap/m/Text',
], function (BaseController, JSONModel, formatter, mobileLibrary, Button, Dialog, Text) {
	"use strict";

	return BaseController.extend("sap.ui.demo.orderbrowser.controller.Returns", {

		onInit: function () {
			var oMultibox = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.demo.orderbrowser.model",
				"/Reasons.json"));
			this.getView().setModel(oMultibox);
		},

		onReturn: function (oEvent) {
			var dialog = new Dialog({
				title: 'Information',
				type: 'Message',
				content: [
					new Text({
						text: 'You have exceeded threshold of maximum Returns allowed for you.'

					}).addStyleClass("sapUiSmallMarginBeginEnd sapUiSmallMarginTop")

				],
				beginButton: new Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function () {
					dialog.destroy();
				}
			});

			dialog.open();
		}

	});
});