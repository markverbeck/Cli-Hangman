function wordChoice(word){
	this.name = word;
	this.array = word.split("");
}

var words = {
	slayer: new wordChoice("slayer"),
    sepultura : new wordChoice("sepultura"),
    pantera : new wordChoice("pantera"),
    cCorpse : new wordChoice("cannibal corpse")
}

module.exports = words;