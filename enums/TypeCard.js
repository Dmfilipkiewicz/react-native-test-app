export const typeCard = {
    MonsterCard:{
        name: "Monster",
        value: 1
    },
    SkillCard:{
        name: "Skill",
        value: 2
    },
    SpellCard:{
        name: "Spell",
        value: 3
    },
    TrapCard:{
        name: "Trap",
        value: 4
    }
}


export const returnCardType = (card = '') =>{
    let type = ''
    Object.keys(typeCard).forEach(key => {
        if(card.includes(typeCard[key].name))
            type = typeCard[key].name
    })
    return type;
}