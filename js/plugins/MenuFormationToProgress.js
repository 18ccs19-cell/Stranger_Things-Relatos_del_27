(() => {
    const pluginName = "MenuFormationToProgress";
    const parameters = PluginManager.parameters(pluginName);
    const commonEventId = Number(parameters['commonEventId'] || 76);

    const _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_createCommandWindow.call(this);
        this._commandWindow.setHandler('formation', this.commandProgressMenu.bind(this));
    };

    Scene_Menu.prototype.commandProgressMenu = function() {
        $gameTemp.reserveCommonEvent(commonEventId);
        SceneManager.goto(Scene_Map);
    };
})();