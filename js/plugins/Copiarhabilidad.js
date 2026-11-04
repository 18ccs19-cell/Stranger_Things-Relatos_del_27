const _Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
    _Game_Actor_learnSkill.call(this, skillId);
    $gameActors._data.forEach(actor => {
        if (actor && !actor.hasSkill(skillId)) {
            actor.learnSkill(skillId);
        }
    });
};