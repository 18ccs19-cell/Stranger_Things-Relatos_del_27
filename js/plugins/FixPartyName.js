(() => {
    const _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function(text) {
        text = text.replace(/(?:\\N\[[1-4]\])+/gi, "\\P[1]");
        
        return _Window_Base_convertEscapeCharacters.call(this, text);
    };
})();