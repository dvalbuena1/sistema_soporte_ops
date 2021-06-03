sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage3: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Asunto": "",
				"Descripcion": "",
				"Fecha": new Date(Date.UTC(2021, 4, 24)),
				"Prioridad": "",
				"Estado": "En Revision",
				"___FK_b850dd7a187182d1156ef9ed_00006": "",
				"___FK_b850dd7a187182d1156ef9ed_00014": "",
				"EstadoCC": "Critical"
			};
		},
		getDefaultValuesForPage7: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"___FK_8378d50c447bdcbf156f05f5_00004": "",
				"Autor": "",
				"Fecha": new Date(Date.UTC(2021, 4, 24)),
				"Mensaje": ""
			};
		}
	};
});
