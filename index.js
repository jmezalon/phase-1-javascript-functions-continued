// Your code here
const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (character="*") => {
    function result (adjective) {
        return `You are ${character}${adjective}${character}!`
    }
    return result;
}