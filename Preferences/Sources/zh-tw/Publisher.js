"use strict";
(self.manageOffice_webpackJsonp = self.manageOffice_webpackJsonp || []).push([[5396], {
    pdTQ: function(e) {
        e.exports = JSON.parse('{"categories":[{"name":"L_MicrosoftOfficePublisher","displayName":"Microsoft Publisher 2016"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_PubOptions","displayName":"Publisher 選項"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Advanced","displayName":"進階"},{"parentCategory":{"ref":"L_Advanced"},"name":"L_ComplexScripts","displayName":"複雜字集"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_General","displayName":"一般"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Proofing","displayName":"校訂"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_OptionsCustomizeRibbon","displayName":"自訂功能區"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Save","displayName":"儲存"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_Miscellaneous","displayName":"其他"}],"policies":[{"parentCategory":{"ref":"L_OptionsCustomizeRibbon"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisplayDeveloperTab","displayName":"在功能區顯示 [開發人員] 索引標籤","explainText":"此原則設定可控制是否在功能區顯示 [開發人員] 索引標籤。\\n\\n如果啟用此原則設定，將會在功能區顯示 [開發人員] 索引標籤。\\n\\n如果停用此原則設定，將不會在功能區顯示 [開發人員] 索引標籤。\\n\\n若未設定此原則設定，則功能區不會顯示 [開發人員] 索引標籤，但是您可以透過應用程式 [選項] 對話方塊中的設定變更其可見性。","tags":["L_OptionsCustomizeRibbon","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"developertools"},{"parentCategory":{"ref":"L_General"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowTheNewTemplateGalleryWhenStartingPublisher","displayName":"啟動 Publisher 時顯示新的範本庫","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_General","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usestartupdlg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_TurnOffDragPreview","displayName":"關閉拖曳預覽","explainText":"此原則設定可讓您決定在拖曳物件時，Publisher 要顯示半透明的拖曳預覽，或是顯示簡單的物件外框。\\n\\n如果啟用此原則設定，拖曳物件時將只會顯示物件的外框。由於這個功能的資源需求低，因此建議在舊型機器上使用此設定。\\n\\n如果停用或未設定此原則設定，拖曳物件時將會顯示物件的半透明拖曳預覽。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"uselegacydrag"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":50,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetMaximumNumberOfMRUItemsToDisplaySpinID"}]},"name":"L_SetMaximumNumberOfMRUItemsToDisplay","displayName":"[最近使用的出版物] 清單中的出版物數","explainText":"此原則設定可指定當使用者在 Backstage 檢視中按一下 [檔案] 索引標籤的 [開啟舊檔] 時，[最近使用的出版物] 清單中顯示的項目數。  \\n\\n如果啟用此原則設定，您可以將項目數指定為介於 0 和 50 之間的數字。如果將數字設定為 0，則所有已固定和取消固定的項目都會隱藏顯示。\\n\\n如果停用或未設定此原則設定，則 [最近使用的出版物] 清單中最多將顯示 25 個項目。\\n\\n注意: 若要避免將項目全部新增到 [最近使用的出版物] 清單中，您可以啟用 Windows 的 [不保留最近開啟文件的記錄] 原則設定。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\file mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":20,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetNumberOfPlacesInTheRecentPlacesListSpinID"}]},"name":"L_SetNumberOfPlacesInTheRecentPlacesList","displayName":"[最近使用的資料夾] 清單中的資料夾數","explainText":"此原則設定可指定當使用者在 Backstage 檢視中按一下 [檔案] 索引標籤的 [開啟舊檔] 或 [另存新檔] 時，[最近使用的資料夾] 清單中顯示的取消固定項目數。\\n\\n如果啟用此原則設定，您可以將取消固定項目數指定為介於 0 和 20 之間的數字。如果將數字設定為 0，則所有已固定和取消固定的項目都會隱藏顯示。\\n\\n如果停用或未設定此原則設定，則 [最近使用的資料夾] 清單中最多將顯示 5 個取消固定的項目。\\n\\n注意: 若要避免將項目全部新增到 [最近使用的資料夾] 清單中，您可以啟用 Windows 的 [不保留最近開啟文件的記錄] 原則設定。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\place mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseXPSEnhancedPrintPath","displayName":"使用 XPS 列印路徑","explainText":"此原則設定讓您在可供使用時使用 XPS 列印路徑。\\n\\n如果啟用或未設定此原則設定，將會使用 XPS 列印路徑。\\n\\n如果停用此原則設定，則不會使用 XPS 列印路徑。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"enablexpsprintpathprinting"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallysubstitutefontformissingEAchars","displayName":"對於缺少的亞洲字元自動取代字型","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usefontlinking"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"1"},"displayName":"從左至右"},{"value":{"string":"256"},"displayName":"從右至左"}],"valueName":"defaulttextflow","inputType":"dropdownList","id":"L_SetDefaultTextFlowDirectionDropID"}]},"name":"L_SetDefaultTextFlowDirection","displayName":"設定預設文字流向","explainText":"此原則設定可讓您將預設文字流向設定為從右至左 (RTL) 或從左至右 (LTR)。\\n\\n如果啟用此原則設定，您可以選擇文字流向為 RTL 或 LTR。\\n\\n如果停用或未設定此原則設定，將使用預設的文字流向設定。","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallySwitchKeyboard","displayName":"自動切換鍵盤以符合周圍文字使用的語言","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autokeybd"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AllowTextToBeDraggedAndDropped","displayName":"允許文字拖放","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"textdragndrop"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenselectingautomaticallyselectentireword","displayName":"選取時，自動選取整個英文字或整個中文詞","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordsel"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenformattingautomaticallyformatentireword","displayName":"設定格式時，自動格式化整個英文字或整個中文句子","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordformat"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseChinesefontsizes","displayName":"使用中文字型大小","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prcfontsizes"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallyHyphenateInNewTextBoxes","displayName":"自動為新文字方塊斷字","explainText":"核取/取消核取 [自動為新文字方塊斷字] 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"defautohyph"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowScreenTipsonobjects","displayName":"在物件顯示工具提示","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showobjecttooltips"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Enableincrementalpublishtoweb","displayName":"啟動網站智慧型發佈","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"incrementalupload"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Sendentirepublicationasasingle","displayName":"以單一 JPEG 圖像的方式傳送整個出版物","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"emailasimg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptuserwhenreapplyingastyle","displayName":"重新套用樣式時提示使用者","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prompttoupdatestyle"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"autorecoversaveinterval","required":true,"requiredSpecified":true,"expandable":false,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"分鐘 (範圍 1-120):","id":"L_SaveAutoRecoverinfoeveryID"}]},"name":"L_SaveAutoRecoverinfoevery","displayName":"儲存自動回復資訊時間間隔 (分鐘)","explainText":"此原則設定允許您以分鐘為單位指定 [儲存自動回復] 的間隔。\\n\\n如果啟用此原則設定，您可以分鐘為單位指定 [儲存自動回復] 的間隔 (有效範圍: 1-120)。\\n\\n若停用或未設定此原則設定，將使用 UI 中指定的間隔。\\n","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Allowbackgroundsaves","displayName":"允許幕後儲存檔案","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"backgroundsave"},{"parentCategory":{"ref":"L_Proofing"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":1}},"displayName":"自動拼字檢查"},{"value":{"decimal":{"value":2}},"displayName":"隱藏拼字錯誤"},{"value":{"decimal":{"value":3}},"displayName":"兩者"}],"valueName":"publisherspellingoptions","inputType":"dropdownList","id":"L_CheckspellingasyoutypeDropID"}]},"name":"L_Checkspellingasyoutype","displayName":"自動拼字檢查","explainText":"此原則設定可讓您設定拼字錯誤的選項。\\n\\n如果啟用此原則設定，可選擇下列選項之一:\\n-  自動拼字檢查: 此選項已核取。\\n-  隱藏拼字錯誤: 此選項已核取，但是 [自動拼字檢查] 取消核取。\\n- 兩者: [自動拼字檢查] 及 [隱藏拼字錯誤] 兩者已核取。\\n\\n如果停用或未設定此原則設定，則核取 [自動拼字檢查] 選項。","tags":["L_Proofing","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\shared tools\\\\proofing tools\\\\1.0\\\\office"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptusertosetupprinter","displayName":"提示使用者設定印表機","explainText":"如果設定，當找到新的印表機時，Publisher 會對使用者顯示提示，以啟動 [印表機設定精靈]。","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showprintersetup"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"0"},"displayName":"從左至右"},{"value":{"string":"1"},"displayName":"從右至左"}],"valueName":"defaultrtl","inputType":"dropdownList","caption":"預設 Publisher 方向","id":"L_defaultpublisherdirection3"}]},"name":"L_DefaultPublisherdirection","displayName":"預設 Publisher 方向","explainText":"指定預設版面配置方向。","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseSequenceChecking","displayName":"使用順序檢查","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"seqcheck"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Usetypeandreplace","displayName":"使用鍵入並取代","explainText":"核取/取消核取相對應的 UI 選項。","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"typereplace"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AdddoublequotesinHebrewalphabetnumbering","displayName":"為希伯來文字編號加入雙引號","explainText":"核取: 新增雙引號 (\'\') 至希伯來文編號。| 取消核取: 不要新增雙引號 (\'\') 至希伯來文編號。","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"dubquohebalpnum"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisableOfficeStartPublisher","displayName":"停用 Publisher 的 Office 開始畫面","explainText":"此原則設定可控制在 Publisher 啟動時，是否會出現 Office 開始畫面。\\n\\n如果啟用此原則設定，使用者在啟動 Publisher 時，不會看到 Office 開始畫面。\\n\\n如果停用或未設定此原則設定，使用者在啟動 Publisher 時，就會看到 Office 開始畫面。\\n\\n注意: 如果您已設定「[Microsoft Office 2016] > [其他] > [停用所有 Office 應用程式的 Office 開始畫面]」原則設定，該原則設定就會覆寫此原則設定。","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"disableboottoofficestart"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"personaltemplates","requiredSpecified":false,"expandable":true,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"個人範本路徑","id":"L_PersonalTemplatesPath"}]},"name":"L_PersonalTemplatesPath","displayName":"Publisher 的個人範本路徑","explainText":"此原則設定可指定使用者個人範本的位置。\\n\\n如果您啟用此原則設定，使用者在 Office 開始畫面及 [檔案] | [新增] 的自訂範本索引標籤中，會看到其已儲存在指定位置內的所有範本，而且在儲存範本時，其預設資料夾會變更為指定的位置。\\n\\n如果您停用或未設定此原則設定，使用者在 Office 開始畫面及 [檔案] | [新增] 的自訂範本索引標籤中，便不會看到其已儲存的範本，而且在儲存範本時，其預設資料夾就會是其文件儲存位置。","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":0}},"displayName":"特色"},{"value":{"decimal":{"value":2}},"displayName":"內建"},{"value":{"decimal":{"value":1}},"displayName":"自訂"}],"valueName":"officestartdefaulttab","inputType":"dropdownList","caption":"預設索引標籤","id":"L_DefaultBuiltInTab"}]},"name":"L_DefaultBuiltInTab","displayName":"預設在 Publisher 的 Office 開始畫面及 [檔案] | [新增] 中顯示自訂範本索引標籤","explainText":"此原則設定會控制在 Publisher 的 Office 開始畫面及 [檔案] | [開新檔案] 所顯示的預設索引標籤為何。\\n\\n如果啟用此原則設定，您可以從兩個選項擇其一，作為 Office 開始畫面及 [檔案] | [開新檔案] 上的預設索引標籤:\\n\\n* 內建 – 使用者在 Publisher 的 Office 開始畫面和 [檔案] | [開新檔案] 上看到的預設索引標籤，是內建範本索引標籤。\\n\\n* 自訂 – 如果有範本 (包括自訂 XML 程式化的範本、工作群組範本路徑中的範本、個人範本路徑中的範本，或 SharePoint 範本)，使用者在 Publisher 的 Office 開始畫面和 [檔案] | [開新檔案] 上看到的預設索引標籤，是自訂範本索引標籤。\\n\\n若您停用或未設定此原則設定，使用者在 Publisher 的 Office 開始畫面和 [檔案] | [開新檔案] 上看到的預設索引標籤，是 [精選範本] 索引標籤","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"}]}')
    }
}]);
