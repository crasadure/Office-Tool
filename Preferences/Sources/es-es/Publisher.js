"use strict";
(self.manageOffice_webpackJsonp = self.manageOffice_webpackJsonp || []).push([[5917], {
    YHTu: function(e) {
        e.exports = JSON.parse('{"categories":[{"name":"L_MicrosoftOfficePublisher","displayName":"Microsoft Publisher 2016"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_PubOptions","displayName":"Opciones de Publisher"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Advanced","displayName":"Avanzadas"},{"parentCategory":{"ref":"L_Advanced"},"name":"L_ComplexScripts","displayName":"Escritura compleja"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_General","displayName":"General"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Proofing","displayName":"Revisión"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_OptionsCustomizeRibbon","displayName":"Personalizar cinta de opciones"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Save","displayName":"Guardar"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_Miscellaneous","displayName":"Varios"}],"policies":[{"parentCategory":{"ref":"L_OptionsCustomizeRibbon"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisplayDeveloperTab","displayName":"Mostrar la pestaña Programador en la cinta de opciones","explainText":"Esta configuración de directiva controla si la pestaña Programador se va a mostrar en la cinta de opciones.\\n\\nSi la habilita, la pestaña se mostrará.\\n\\nSi la deshabilita, la pestaña no se mostrará.\\n\\nSi no la configura, la pestaña Programador no se mostrará en la cinta de opciones, pero su visibilidad puede cambiarse mediante una opción del cuadro de diálogo Opciones de aplicación.","tags":["L_OptionsCustomizeRibbon","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"developertools"},{"parentCategory":{"ref":"L_General"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowTheNewTemplateGalleryWhenStartingPublisher","displayName":"Mostrar la galería de nuevas plantillas al iniciar Publisher","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_General","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usestartupdlg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_TurnOffDragPreview","displayName":"Desactivar vista previa de arrastre","explainText":"Esta configuración de directiva le permite determinar si Publisher muestra una vista previa de arrastre semitransparente o un esquema sencillo del objeto al arrastrarlo.\\n\\nSi la habilita, solo se mostrará el esquema del objeto al arrastrarlo. Esta es la configuración recomendada para equipos antiguos, dados los requisitos de recursos de esta característica.\\n\\nSi la deshabilita o no la configura, se mostrará una vista previa de arrastre semitransparente del objeto al arrastrarlo.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"uselegacydrag"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":50,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetMaximumNumberOfMRUItemsToDisplaySpinID"}]},"name":"L_SetMaximumNumberOfMRUItemsToDisplay","displayName":"Número de publicaciones en la lista de publicaciones recientes","explainText":"Esta configuración de directiva especifica el número de entradas mostradas en la lista Publicaciones recientes que aparece cuando los usuarios hacen clic en Abrir en la pestaña Archivo en la vista Backstage. \\n\\nSi habilita esta configuración de directiva, podrá especificar el número de entradas entre 0 y 50. Si establece el número como 0, se ocultarán todas las entradas ancladas y desancladas.\\n\\nSi deshabilita o no configura esta configuración de directiva, se mostrarán un máximo de 25 elementos en la lista Publicaciones recientes.\\n\\nNota: Si desea evitar por completo que se agreguen elementos a la lista de Publicaciones recientes, puede habilitar la configuración de directiva de Windows \\"No guardar historial de documentos abiertos recientemente\\".","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\file mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":20,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetNumberOfPlacesInTheRecentPlacesListSpinID"}]},"name":"L_SetNumberOfPlacesInTheRecentPlacesList","displayName":"Número de carpetas en la lista de carpetas recientes","explainText":"Esta configuración de directiva especifica el número de entradas desancladas que se mostrarán en la lista Carpetas recientes que aparece cuando los usuarios hacen clic en Abrir o Guardar como en la pestaña Archivo en la vista Backstage. \\n\\nSi habilita esta configuración de directiva, podrá especificar el número de entradas desancladas entre 0 y 20. Si los establece en 0, se ocultarán todas las entradas ancladas y desancladas.\\n\\nSi deshabilita esta configuración de directiva o no la define, se mostrarán un máximo de 5 elementos desanclados en la lista Carpetas recientes.\\n\\nNota: Si desea evitar por completo que se agreguen elementos a la lista Carpetas recientes, puede habilitar la configuración de directiva de Windows \\"No guardar historial de documentos abiertos recientemente\\".","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\place mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseXPSEnhancedPrintPath","displayName":"Usar ruta de impresión mejorada de XPS","explainText":"Esta configuración de directiva le permite usar la ruta de impresión mejorada de XPS cuando esté disponible. \\n\\nSi la habilita o no la configura, se usará la ruta de impresión de XPS.\\n\\nSi la deshabilita, no se usará la ruta de impresión de XPS.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"enablexpsprintpathprinting"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallysubstitutefontformissingEAchars","displayName":"Sustituir automáticamente las fuentes de los caracteres de Asia Oriental que falten","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usefontlinking"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"1"},"displayName":"De izquierda a derecha"},{"value":{"string":"256"},"displayName":"De derecha a izquierda"}],"valueName":"defaulttextflow","inputType":"dropdownList","id":"L_SetDefaultTextFlowDirectionDropID"}]},"name":"L_SetDefaultTextFlowDirection","displayName":"Establecer la dirección del flujo de texto predeterminado","explainText":"Esta configuración de directiva le permite establecer el flujo de texto predeterminado en de derecha a izquierda o de izquierda a derecha  \\n\\nSi la habilita, puede elegir si el texto fluirá de derecha a izquierda o de izquierda a derecha.\\n\\nSi la deshabilita o no la configura, se usará la configuración del flujo de texto predeterminado.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallySwitchKeyboard","displayName":"Cambiar automáticamente el teclado para que coincida con el idioma del texto adyacente","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autokeybd"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AllowTextToBeDraggedAndDropped","displayName":"Permitir arrastrar y colocar el texto","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"textdragndrop"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenselectingautomaticallyselectentireword","displayName":"Seleccionar automáticamente la palabra completa","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordsel"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenformattingautomaticallyformatentireword","displayName":"Al dar formato, aplicar formato automático de palabras","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordformat"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseChinesefontsizes","displayName":"Usar tamaño de fuentes chinas","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prcfontsizes"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallyHyphenateInNewTextBoxes","displayName":"Dividir automáticamente en nuevos cuadros de texto","explainText":"Activa o desactiva la opción \'\'Dividir automáticamente en nuevos cuadros de texto\'\'.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"defautohyph"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowScreenTipsonobjects","displayName":"Mostrar información en pantalla sobre objetos","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showobjecttooltips"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Enableincrementalpublishtoweb","displayName":"Habilitar carga incremental en la Web","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"incrementalupload"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Sendentirepublicationasasingle","displayName":"Enviar toda la publicación como una única imagen JPEG","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"emailasimg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptuserwhenreapplyingastyle","displayName":"Preguntar al usuario al volver a aplicar un estilo","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prompttoupdatestyle"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"autorecoversaveinterval","required":true,"requiredSpecified":true,"expandable":false,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"Minutos (intervalo de 1 a 120):","id":"L_SaveAutoRecoverinfoeveryID"}]},"name":"L_SaveAutoRecoverinfoevery","displayName":"Guardar información de autorrecuperación cada (minutos)","explainText":"Esta configuración de directiva le permite especificar el intervalo para Guardar autorrecuperación en minutos.\\n\\nSi la habilita, puede especificar el intervalo para Guardar autorrecuperación en minutos (intervalo válido: 1 a 120).\\n\\nSi la deshabilita o no la configura, se usará el intervalo especificado en la interfaz de usuario.\\n","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Allowbackgroundsaves","displayName":"Permitir guardar en segundo plano","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"backgroundsave"},{"parentCategory":{"ref":"L_Proofing"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":1}},"displayName":"Revisar ortografía mientras escribe"},{"value":{"decimal":{"value":2}},"displayName":"Ocultar errores de ortografía"},{"value":{"decimal":{"value":3}},"displayName":"Ambas"}],"valueName":"publisherspellingoptions","inputType":"dropdownList","id":"L_CheckspellingasyoutypeDropID"}]},"name":"L_Checkspellingasyoutype","displayName":"Revisar ortografía mientras escribe","explainText":"Esta configuración de directiva le permite establecer opciones para los errores de ortografía.\\n\\nSi la habilita, puede elegir una de estas opciones:\\n-  Revisar ortografía mientras escribe: esta opción está seleccionada.\\n-  Ocultar errores de ortografía: esta opción está seleccionada, pero \\"Revisar ortografía mientras escribe\\" no está seleccionada.\\n- Ambas: las dos opciones, \\"Revisar ortografía mientras escribe\\" y \\"Ocultar errores de ortografía\\" están seleccionadas.\\n\\nSi deshabilita esta configuración de directiva, se selecciona la opción \\"Revisar ortografía mientras escribe\\".","tags":["L_Proofing","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\shared tools\\\\proofing tools\\\\1.0\\\\office"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptusertosetupprinter","displayName":"Pedir al usuario que configure la impresora","explainText":"Cuando esta configuración está activada, Publisher mostrará un mensaje al usuario para que inicie el Asistente para la configuración de la impresora cuando se detecte una nueva impresora.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showprintersetup"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"0"},"displayName":"De izquierda a derecha"},{"value":{"string":"1"},"displayName":"De derecha a izquierda"}],"valueName":"defaultrtl","inputType":"dropdownList","caption":"Dirección predeterminada del editor","id":"L_defaultpublisherdirection3"}]},"name":"L_DefaultPublisherdirection","displayName":"Dirección predeterminada del editor","explainText":"Especifica la orientación del diseño predeterminada.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseSequenceChecking","displayName":"Usar comprobación de secuencias","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"seqcheck"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Usetypeandreplace","displayName":"Utilizar escribir y reemplazar","explainText":"Activa o desactiva la opción correspondiente de la interfaz de usuario.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"typereplace"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AdddoublequotesinHebrewalphabetnumbering","displayName":"Agregar comillas dobles a la numeración del alfabeto hebreo","explainText":"Activada: agrega comillas dobles (\'\') a la numeración hebrea. | Desactivada: no agrega comillas dobles (\'\') a la numeración hebrea.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"dubquohebalpnum"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisableOfficeStartPublisher","displayName":"Deshabilitar la pantalla de inicio de Office para Publisher","explainText":"Esta configuración de directiva controla si la pantalla de inicio de Office aparece en el arranque de Publisher.\\n\\nSi habilita esta configuración de directiva, los usuarios no verán la pantalla de inicio de Office cuando inicien Publisher.\\n\\nSi deshabilita o no establece esta configuración de directiva, los usuarios verán la pantalla de inicio de Office cuando inicien Publisher.\\n\\nNota: Esta configuración de directiva se cambia por la configuración de directiva \\"Microsoft Office 2016 > Varios > Deshabilita la pantalla de inicio de Microsoft para todas las aplicaciones de Office\\" si se establece esta configuración de directiva.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"disableboottoofficestart"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"personaltemplates","requiredSpecified":false,"expandable":true,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"Ruta de plantillas personales","id":"L_PersonalTemplatesPath"}]},"name":"L_PersonalTemplatesPath","displayName":"Ruta de plantillas personales para Publisher","explainText":"Esta opción de directiva especifica la ubicación de plantillas personales de un usuario. \\n\\nSi habilita esta opción, los usuarios verán las plantillas que han guardado en la ubicación especificada en la pestaña de plantillas personalizadas de la pantalla de inicio en Office y en Archivo | Nuevo; al guardar una plantilla, su carpeta predeterminada pasará a la ubicación especificada. \\n\\nSi la deshabilita o no la configura, los usuarios no verán las plantillas que han guardado en la pestaña de plantillas personalizadas de la pantalla de inicio de Office ni en Archivo | Nuevo; al guardar una plantilla, su carpeta predeterminada será la ubicación para guardar documentos.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":0}},"displayName":"Destacados"},{"value":{"decimal":{"value":2}},"displayName":"Integrado"},{"value":{"decimal":{"value":1}},"displayName":"Personalizado"}],"valueName":"officestartdefaulttab","inputType":"dropdownList","caption":"Pestaña predeterminada","id":"L_DefaultBuiltInTab"}]},"name":"L_DefaultBuiltInTab","displayName":"Pestaña predeterminada para mostrar en Publisher en la pantalla de inicio de Office y en Archivo | Nuevo","explainText":"Esta configuración de directiva controla qué aparece en la pestaña predeterminada de Publisher en la pantalla de inicio de Office y en Archivo | Nuevo. \\n\\nSi habilita esta configuración de directiva, puede escoger entre dos opciones cuál quiere que sea la pestaña predeterminada en la pantalla de inicio de Office y en Archivo | Nuevo:\\n\\n\\\\* Integradas - Los usuarios verán la pestaña de plantillas integradas como pestaña predeterminada de Publisher en la pantalla de inicio de Office y en Archivo | Nuevo.\\n\\n* Personalizadas - Los usuarios verán la pestaña de plantillas personalizadas como pestaña predeterminada de Publisher en la pantalla de inicio de Office y en Archivo | Nuevo siempre que existan plantillas (incluyendo plantillas programadas de XML personalizadas, plantillas de la ruta de plantillas del equipo de trabajo, plantillas de la ruta de plantillas personales y plantillas de SharePoint).\\n\\nSi deshabilita o no establece esta configuración de directiva, los usuarios verán la pestaña de plantillas destacadas como pestaña predeterminada de PowerPoint en la pantalla de inicio de Office y en Archivo | Nuevo","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"}]}')
    }
}]);
