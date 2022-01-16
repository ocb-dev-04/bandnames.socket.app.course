const Band = require("./band");

class Bands {
    constructor(){
        this.bands = [];

    }

    getBands() { return this.bands};

    addBand(band = new Band()){
        this.bands.push(band);
    }

    deleteBand(id = ''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    voteFor(id = ''){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes++;
            }
            return band;
        });
    }
}

module.exports = Bands;