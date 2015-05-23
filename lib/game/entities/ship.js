ig.module(
    'game.entities.ship'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityShip = ig.Entity.extend({
        size: {x:64, y:64},

        animSheet: new ig.AnimationSheet('media/ship.png', 64, 64),

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
        }
    });
});