var word = require("./word.js");
var slayer = word.slayer;
var sepultura = word.sepultura;
var pantera = word.pantera;
var cCorpse = word.cCorpse;

function letter(array){
	this.question = [];
	this.dash = function(){
		for (var i = 0; i < array.length; i++) {
				array[i] = "_";
				this.question.push(array[i]);
		}
		}
	this.answer = array;
}

var slayerDash = new letter(slayer.array);
var sepulturaDash = new letter(sepultura.array);
var panteraDash = new letter(pantera.array);
var cCorpseDash = new letter(cCorpse.array);

var dash = {
	slayer: slayerDash,
	sepultura: sepulturaDash,
	pantera: panteraDash,
	cCorpse: cCorpseDash,
	slayerName: slayer.name,
	sepulturaName: sepultura.name,
	panteraName: pantera.name,
	cCorpseName: cCorpse.name

}
 module.exports = dash;
