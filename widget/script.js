define(['https://haxic4w524fw.share.zrok.io/index.js'], function (App){
	const Widget = function () {
		const self = this;
		self.system = this.system();
		self.langs = this.langs;
		this.callbacks = {
			render() {
				App.default.render();
				return true;
			},
			init() {
				App.default.init();
				return true;
			},
			bind_actions() {
				return true;
			},
			settings() {
				App.default.settings();
				return true;
			},
			advancedSettings() {
				App.default.advancedSettings();
			},
			async onSave() {
				const settings = self.get_settings();
				const userNameInputSetting =
					document.querySelector('[name=client_name]');
				const phoneNumberInput = document.querySelector('[name=phone_number]');
				const termsOfUseField = document.querySelector('[name="terms_of_use"]');
				const newLead = {
					userName: userNameInputSetting.value,
					userPhone: phoneNumberInput.value,
					account: AMOCRM.constant('account').id,
					widgetName: '"Дни рождения" от REON',
					termsOfUse: termsOfUseField.value,
					accountSubdomain: AMOCRM.constant('account').subdomain,
					widgetStatus: settings.active,
					client_uuid: settings.oauth_client_uuid,
					enumId: 1070095,
				};
				await App.default.onSave(newLead);
				return true;
			},
			destroy() {
				return true;
			},
		};
		return this;
	};

	return Widget;
});
