for(var i = 0; i < 9; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (((GetWidgetText('u2')) == ('cbh@cbh.com')) && ((GetWidgetText('u3')) == ('password'))) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('CBH_Associate_Dashboard.html');

}
else
if (((GetWidgetText('u2')) == ('investor@cbh.com')) && ((GetWidgetText('u3')) == ('password'))) {

	self.location.href='#';

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Investor_Dashboard.html');

}
else
if (((GetWidgetText('u2')) == ('builder@cbh.com')) && ((GetWidgetText('u3')) == ('password'))) {

	self.location.href='#';

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Builder_Dashboard.html');

}
else
if (true) {

	SetPanelVisibility('u6','','none',500);

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u1'] = 'center';