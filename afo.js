
var class_stats = {
    shielder:   {name: "Shielder",    np: 1,   star_server: 0,     damage: 1.0},
    saber:      {name: "Saber",       np: 1,   star_server: 0,     damage: 1.0},
    archer:     {name: "Archer",      np: 1,   star_server: 0.05,  damage: 0.95},
    lancer:     {name: "Lancer",      np: 1,   star_server: -0.05, damage: 1.05},
    rider:      {name: "Rider",       np: 1.1, star_server: 0.1,   damage: 1.0},
    caster:     {name: "Caster",      np: 1.2, star_server: 0,     damage: 0.9},
    assassin:   {name: "Assassin",    np: 0.9, star_server: -0.1,  damage: 0.9},
    berserker:  {name: "Berserker",   np: 0.8, star_server: 0,     damage: 1.1},
    ruler:      {name: "Ruler",       np: 1,   star_server: 0,     damage: 1.1},
    avenger:    {name: "Avenger",     np: 1,   star_server: -0.1,  damage: 1.1},
    moonCancer: {name: "Moon Cancer", np: 1.2, star_server: 0,     damage: 1.0},
    alterEgo:   {name: "Alter Ego",   np: 1,   star_server: 0,     damage: 1.0},
    foreigner:  {name: "Foreigner",   np: 1,   star_server: 0,     damage: 1.0},
    other:      {name: "Other",       np: 1,   star_server: 0,     damage: 1.0}
};

// self, enemy
var class_affinity = {
    shielder:   {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 1.0, ruler: 1.0, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    saber:      {shielder: 1.0, saber: 1.0, archer: 0.5, lancer: 2.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 0.5, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    archer:     {shielder: 1.0, saber: 2.0, archer: 1.0, lancer: 0.5, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 0.5, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    lancer:     {shielder: 1.0, saber: 0.5, archer: 2.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 0.5, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    rider:      {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 2.0, 
                 assassin: 0.5, berserker: 2.0, ruler: 0.5, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    caster:     {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 0.5, caster: 1.0, 
                 assassin: 2.0, berserker: 2.0, ruler: 0.5, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    assassin:   {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 2.0, caster: 0.5, 
                 assassin: 1.0, berserker: 2.0, ruler: 0.5, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    berserker:  {shielder: 1.0, saber: 1.5, archer: 1.5, lancer: 1.5, rider: 1.5, caster: 1.5, 
                 assassin: 1.5, berserker: 1.5, ruler: 1.5, avenger: 1.5, moonCancer: 1.5, 
                 alterEgo: 1.5, foreigner: 0.5, other: 1.0},
    ruler:      {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 1.0, avenger: 0.5, moonCancer: 2.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    avenger:    {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 2.0, avenger: 1.0, moonCancer: 0.5, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    moonCancer: {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 0.5, avenger: 2.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0},
    alterEgo:   {shielder: 1.0, saber: 0.5, archer: 0.5, lancer: 0.5, rider: 1.5, caster: 1.5, 
                 assassin: 1.5, berserker: 2.0, ruler: 1.0, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 2.0, other: 1.0},
    foreigner:  {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 2.0, ruler: 1.0, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 0.5, foreigner: 2.0, other: 1.0},
    other:      {shielder: 1.0, saber: 1.0, archer: 1.0, lancer: 1.0, rider: 1.0, caster: 1.0, 
                 assassin: 1.0, berserker: 1.0, ruler: 1.0, avenger: 1.0, moonCancer: 1.0, 
                 alterEgo: 1.0, foreigner: 1.0, other: 1.0}
};

var card_pos_vals = {
    buster: {
        np:    {first: 0.0, second: 0.0, third: 0.0, extra: 1.0},
        stars: {first: 0.1, second: 0.15, third: 0.2, extra: 1.0},
        dmg:   {first: 1.5, second: 1.8, third: 2.1, extra: 1.0}
    },
    quick:  {
        np:    {first: 1.0, second: 1.5, third: 2.0, extra: 1.0},
        stars: {first: 0.8, second: 1.3, third: 1.8, extra: 1.0},
        dmg:   {first: 0.8, second: 0.96, third: 1.12, extra: 1.0}
    },
    arts:   {
        np:    {first: 3.0, second: 4.5, third: 6.0, extra: 1.0},
        stars: {first: 0.0, second: 0.0, third: 0.0, extra: 1.0},
        dmg:   {first: 1.0, second: 1.2, third: 1.4, extra: 1.0}
    },
    extra:  {
        np:    {first: 1.0, second: 1.0, third: 1.0, extra: 1.0},
        stars: {first: 1.0, second: 1.0, third: 1.0, extra: 1.0},
        dmg:   {first: 1.0, second: 1.0, third: 1.0, extra: 1.0}
    }
};

// self, enemy
var attrib_mod = {
    man:    {man: 1.0, earth: 0.9, sky: 1.1, heaven: 1.1, star: 1.0, beast: 1.0},
    earth:  {man: 1.1, earth: 1.0, sky: 0.9, heaven: 0.9, star: 1.0, beast: 1.0},
    sky:    {man: 0.9, earth: 1.1, sky: 1.0, heaven: 1.0, star: 1.0, beast: 1.0},
    heaven: {man: 0.9, earth: 1.1, sky: 1.0, heaven: 1.0, star: 1.0, beast: 1.0},
    star:   {man: 1.0, earth: 1.0, sky: 1.0, heaven: 1.0, star: 1.0, beast: 1.1},
    beast:  {man: 1.0, earth: 1.0, sky: 1.0, heaven: 1.0, star: 1.1, beast: 1.0}
};

// Calculates and displays all output values
function updateAllOutput() {

    // Servant class
    let selfClassSelect = document.getElementById("selfClass");
    let selfClass = selfClassSelect.value;
    let selfClassDmg = class_stats[selfClass].damage;

    // ATK Stat
    let atkStat = parseFloat(document.getElementById("atkStat").value);
    if(isNaN(atkStat)) {
        alert("ATK Stat needs to be a number.");
        return;
    }

    // NP Gen Stat
    let npGenStat = parseFloat(document.getElementById("npGenStat").value);
    if(isNaN(npGenStat)) {
        alert("NP Gen Stat needs to be a number.");
        return;
    }

    // C. Star Drop Rate stat
    let baseStarRate = parseFloat(document.getElementById("baseStarRate").value) / 100;
    if(isNaN(npGenStat)) {
        alert("C. Star Drop Rate needs to be a number.");
        return;
    }    
    
    // Card Type
    let cardSelect = document.getElementById("card");
    let cardString = cardSelect.value;

    // Attribute
    let selfAttribSelect = document.getElementById("selfAttrib");
    let selfAttrib = selfAttribSelect.value;

    // HP
    let selfHP = parseFloat(document.getElementById("hp").value);
    if(isNaN(selfHP)) {
        alert("HP % needs to be a number.");
        return;
    }

    
    // NP/Normal Card inputs
    let np = document.getElementById("np");                   // NP checkbox
    let fCardSelect = document.getElementById("firstCard");   // First Card
    let fCard = fCardSelect.value;
    let busterChain = document.getElementById("busterChain").checked;
    let cardPosSelect = document.getElementById("cardPos");   // Card Position
    let critBox = document.getElementById("crit");            // Critical Hit checkbox
    let superEffective = document.getElementById("superEffective").checked;
    let superEffectiveMod = parseFloat(document.getElementById("superEffectiveMod").value);
    if(isNaN(superEffectiveMod)) {
        alert("Super Effective Modifier needs to be a number.");
        return;
    }
    let isNP = 0;
    let npMult = 1;
    let isSuperEffective = 0;
    let fcNPBonus = 0;
    let fcStarBonus = 0;
    let fcDmgBonus = 0;
    let cardPos = "first";
    let extraMod = 1;
    let isCrit = 0;
    let critModNP = 1;
    let critModStar = 0;
    let critModDmg = 1;
    let busterChainMod = 0;
    if(np.checked) {
        isNP = 1;
        npMult = parseFloat(document.getElementById("npMult").value);
        if(isNaN(npMult)) {
            alert("NP Multiplier needs to be a number.");
            return;
        }
        npMult /= 100;
        if(superEffective) {
            isSuperEffective = 1;
        }
    }
    else {   // If NP is unchecked, read normal card inputs
        if(fCard === "arts") {
            fcNPBonus = 1;
        }
        if(fCard === "quick") {
            fcStarBonus = 0.2;
        }
        if(fCard === "buster") {
            fcDmgBonus = 0.5;
        }
        cardPos = cardPosSelect.value;  // first, second, third, extra
        if(critBox.checked) {
            isCrit = 1;
            critModNP = 2;
            critModStar = 0.2;
            critModDmg = 2;
        }
        if(cardPos === "extra" && cardString === "extra") {
            if(busterChain) {
                extraMod = 3.5;
            }
            else {
                extraMod = 2.0;
            }
        }
        if(busterChain && cardString === "buster") {
            busterChainMod = 0.2;
        }
    }

    // Card-dependent np gain coefficient
    let cardNP = 0;
    console.log(cardString + " " + cardPos);
    cardNP = card_pos_vals[cardString]["np"][cardPos];
    console.log(cardNP);
    if(isNaN(cardNP) || cardNP === -1) {
        alert("Error with card");
        return;
    }

    // Card-dependent C. Star coefficient
    let cardStar = card_pos_vals[cardString]["stars"][cardPos];
    if(isNaN(cardStar) || cardStar === -1) {
        alert("Error with card");
        return;
    }

    // Card-dependent Damage value
    let cardDmg = card_pos_vals[cardString]["dmg"][cardPos];
    if(isNaN(cardDmg) || cardDmg === -1) {
        alert("Error with card");
        return;
    }

    // Total Card Buffs (card type not considered)
    let cardBuff = parseFloat(document.getElementById("cardBuff").value) / 100;
    if(isNaN(cardBuff)) {
        alert("Total Card Buffs needs to be a number.");
        return;
    }
    
    // Total NP Generation Buffs
    let npGenBuff = parseFloat(document.getElementById("npGenBuff").value) / 100;
    if(isNaN(npGenBuff)) {
        alert("Total NP Generation Buffs needs to be a number.");
        return;
    }

    // Total C. Star Generation Buffs
    let cStarBuff = parseFloat(document.getElementById("cStarBuff").value) / 100;
    if(isNaN(cStarBuff)) {
        alert("Total C. Star Drop Rate Buffs needs to be a number.");
        return;
    }
    
    // ATK Buffs
    let atkBuff = parseFloat(document.getElementById("atkBuff").value) / 100;
    if(isNaN(atkBuff)) {
        alert("ATK Buffs needs to be a number.");
        return;
    }

    // Power Buffs
    let powerBuff = parseFloat(document.getElementById("powerBuff").value) / 100;
    if(isNaN(powerBuff)) {
        alert("Power Buffs needs to be a number.");
        return;
    }

    // Critical Damage Buffs
    let critDmgBuff = parseFloat(document.getElementById("critDmgBuff").value) / 100;
    if(isNaN(critDmgBuff)) {
        alert("Critical Damage Buffs needs to be a number.");
        return;
    }

    // NP Damage Buffs
    let npDmgBuff = parseFloat(document.getElementById("npDmgBuff").value) / 100;
    if(isNaN(npDmgBuff)) {
        alert("NP Damage Buffs needs to be a number.");
        return;
    }

    // Flat Damage Plus
    let dmgPlusBuff = parseFloat(document.getElementById("dmgPlusBuff").value);
    if(isNaN(dmgPlusBuff)) {
        alert("Flat Damage Plus needs to be a number.");
        return;
    }

    // Enemy class-specific NP gen coeff
    let enemyClassSelect = document.getElementById("enemyClass");
    let enemyClass = enemyClassSelect.value;
    let enemyClassNP = class_stats[enemyClass].np;
    if(isNaN(enemyClassNP)) {
        alert("Error with enemy class");
        return;
    }

    // Enemy class-specific C. Star server rate
    let enemyClassStar = class_stats[enemyClass].star_server;
    if(isNaN(enemyClassStar)) {
        alert("Error with enemy class");
        return;
    }

    // Class Affinity (triangle) Modifier
    let triangleMod = class_affinity[selfClass][enemyClass];
    if(isNaN(triangleMod)) {
        alert("Class Affinity error");
        return;
    }

    // Enemy Attribute
    let enemyAttribSelect = document.getElementById("enemyAttrib");
    let enemyAttrib = enemyAttribSelect.value;
    let attribMod = attrib_mod[selfAttrib][enemyAttrib];

    // Defense Buffs
    let defBuff = parseFloat(document.getElementById("defBuff").value);
    if(isNaN(defBuff)) {
        alert("Defense Buffs needs to be a number.");
        return;
    }

    // Flat Damage Cut
    let dmgCutBuff = parseFloat(document.getElementById("dmgCutBuff").value);
    if(isNaN(dmgCutBuff)) {
        alert("Flat Damage Cut needs to be a number.");
        return;
    }

    // Special Defense Buffs
    let specialDef = parseFloat(document.getElementById("specialDef").value);
    if(isNaN(specialDef)) {
        alert("Special Defense Buffs needs to be a number.");
        return;
    }

    // Number of Total hits
    let hitCount = parseFloat(document.getElementById("hitCount").value);
    if(isNaN(hitCount)) {
        alert("Number of hits needs to be a number.");
        return;
    }

    // Number of Overkill hits
    let overkillHits = parseFloat(document.getElementById("overkillHits").value);
    if(isNaN(overkillHits)) {
        alert("Number of overkill hits needs to be a number.");
        return;
    }
    else if(overkillHits > hitCount) {
        alert("Overkill hit count cannot be greater than total hit count.");
        return;
    }

    /*console.log(npgenstat);
    console.log(card);
    console.log(cardbuff);
    console.log(enemyclass);
    console.log(npgenbuff);
    console.log(hitcount);*/

    // Calculate NP Generation Output
    let perHit = npGenStat*(fcNPBonus+(cardNP*(1+cardBuff)))*enemyClassNP*(1+npGenBuff)*critModNP;
    perHit = parseFloat(perHit.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    perOverkillHit = parseFloat((perHit * 1.5).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    let result = (perHit * (hitCount-overkillHits)) + (perOverkillHit * overkillHits);
    let npTotal = perHit * hitCount;
    let npOverkillTotal = perOverkillHit * hitCount;

    // Display NP Generation Output
    document.getElementById("np_result").innerHTML = overkillHits+" overkill hits: "+result.toFixed(2);
    document.getElementById("np_min").innerHTML = "No overkill: "+npTotal.toFixed(2);
    document.getElementById("np_max").innerHTML = "All overkill: "+npOverkillTotal.toFixed(2);

    // Calculate C. Star Generation Output
    perHit = baseStarRate+fcStarBonus+(cardStar*(1+cardBuff))+enemyClassStar+cStarBuff-0+critModStar;
    perOverkillHit = perHit + 0.3;
    let starMin = (Math.floor(perHit) * (hitCount - overkillHits)) + 
                    (Math.floor(perOverkillHit) * overkillHits);
    let starAvg = (perHit * (hitCount - overkillHits)) + (perOverkillHit * overkillHits);
    let starMax = (Math.ceil(perHit) * (hitCount - overkillHits)) + 
                    (Math.ceil(perOverkillHit) * overkillHits);

    // Display C. Star Generation Output
    document.getElementById("stars_min").innerHTML = "Min: "+starMin;
    document.getElementById("stars_avg").innerHTML = "Avg: "+starAvg.toFixed(2);
    document.getElementById("stars_max").innerHTML = "Max: "+starMax;

    // Calculate Damage Output
    let damageCard = fcDmgBonus + (cardDmg * (1 + cardBuff));
    let damageNetAtk = 1 + atkBuff - defBuff;
    let damagePower = 1 + powerBuff + 0 + (critDmgBuff * isCrit) + (npDmgBuff * isNP);
    let damageSuper = 1 + ((superEffectiveMod - 1) * isSuperEffective);
    let damageFlat = dmgPlusBuff - dmgCutBuff + (atkStat * busterChainMod);
    let damageCoreAvg = atkStat * npMult * 1 * selfClassDmg * triangleMod * attribMod * 
                            0.23 * critModDmg * extraMod * (1 - specialDef);
    let dmgAvg = (damageCoreAvg*1*damageCard*damageNetAtk*damagePower*damageSuper)+damageFlat;
    let dmgMin = (damageCoreAvg*0.9*damageCard*damageNetAtk*damagePower*damageSuper)+damageFlat;
    let dmgMax = (damageCoreAvg*1.1*damageCard*damageNetAtk*damagePower*damageSuper)+damageFlat;

    // Display Damage Output
    document.getElementById("dmg_min").innerHTML = "Min: "+Math.round(dmgMin);
    document.getElementById("dmg_avg").innerHTML = "Avg: "+Math.round(dmgAvg);
    document.getElementById("dmg_max").innerHTML = "Max: "+Math.round(dmgMax);

}

// If NP checkbox clicked, hides or shows all options dealing with normal cards
function toggleNP() {
    let np = this;//document.getElementById("np");
    let notnpElems = document.getElementsByClassName("notnp");
    let onlynpElems = document.getElementsByClassName("onlynp");
    
    if(np.checked) {
        // Hide normal card options, show np options
        for(let i = 0; i < notnpElems.length; i++) {
            notnpElems[i].style.visibility = "hidden";
        }
        for(let i = 0; i < onlynpElems.length; i++) {
            onlynpElems[i].style.visibility = "visible";
        }
    }
    else {
        // Show normal card options, hide np options
        for(let i = 0; i < notnpElems.length; i++) {
            notnpElems[i].style.visibility = "visible";
        }
        for(let i = 0; i < onlynpElems.length; i++) {
            onlynpElems[i].style.visibility = "hidden";
        }
    }
}

// Unused
// Meant to change card position to match Extra card if selected
function togglePos() {
    let cardSelect = document.getElementById("card");
    let cardText = cardSelect.options[cardSelect.selectedIndex].text;
    if(cardText === "Extra") {
        
    }
}

// Unused
// Same as togglePos() except finished
function updatePos() {
    let cardSelect = document.getElementById("card");
    let cardText = cardSelect.options[cardSelect.selectedIndex].text;
    if(cardText === "Extra") {
        let cardPosSelect = document.getElementById("cardPos");
        for(i = 0; i < cardPosSelect.length; i++) {
            if(cardPosSelect.options[i].text === "Extra") {
                cardPosSelect.selectedIndex = i;
                break;
            }
        }
    }
}

document.getElementById("submit").addEventListener("click", updateAllOutput);
document.getElementById("np").addEventListener("click", toggleNP);
toggleNP();
//document.getElementById("card").addEventListener("change", updatePos);







