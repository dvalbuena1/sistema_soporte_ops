sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForDetailPage3: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"___FK_8378d50c447bdcbf156f05f5_00004": "",
				"Autor": "",
				"Fecha": new Date(Date.UTC(2021, 4, 25)),
				"Mensaje": ""
			};
		}
	};
});
