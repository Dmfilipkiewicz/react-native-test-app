export const EnumView = {
    Main: 0,
    Secondary: 1
}
export const returnView = (num) => {
    let active = 0;
    Object.keys(EnumView).forEach( e => {
        if(EnumView[e].value === num){
            active = EnumView[e];
        }
    console.log(name);
    return active
    })
}