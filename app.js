
// load keys
function listCode() {
    let list = '<option value="">--Chose--</option>';
    for(let i =1; i<=26; i++) {
        list += '<option value="' + i + '">' + i + '</option>';
    }

    document.getElementById('key-1').innerHTML = list;
    document.getElementById('key-2').innerHTML = list;
    document.getElementById('key-3').innerHTML = list;
    document.getElementById('key-4').innerHTML = list;
}

listCode()

// Create code
let mainCode = [
    {A:'A', B:'B', C:'C', D:'D', E:'E', F:'F', G:'G', H:'H', I:'I', J:'J', K:'K', L:'L', M:'M', N:'N', O:'O', P:'P', Q:'Q', R:'R', S:'S', T:'T', U:'U', V:'V', W:'W', X:'X', Y:'Y', Z:'Z'},
    {A:'B', B:'C', C:'D', D:'E', E:'F', F:'G', G:'H', H:'I', I:'J', J:'K', K:'L', L:'M', M:'N', N:'O', O:'P', P:'Q', Q:'R', R:'S', S:'T', T:'U', U:'V', V:'W', W:'X', X:'Y', Y:'Z', Z:'A'},
    {A:'C', B:'D', C:'E', D:'F', E:'G', F:'H', G:'I', H:'J', I:'K', J:'L', K:'M', L:'N', M:'O', N:'P', O:'Q', P:'R', Q:'S', R:'T', S:'U', T:'V', U:'W', V:'X', W:'Y', X:'Z', Y:'A', Z:'B'},
    {A:'D', B:'E', C:'F', D:'G', E:'H', F:'I', G:'J', H:'K', I:'L', J:'M', K:'N', L:'O', M:'P', N:'Q', O:'R', P:'S', Q:'T', R:'U', S:'V', T:'W', U:'X', V:'Y', W:'Z', X:'A', Y:'B', Z:'C'},
    {A:'E', B:'F', C:'G', D:'H', E:'I', F:'J', G:'K', H:'L', I:'M', J:'N', K:'O', L:'P', M:'Q', N:'R', O:'S', P:'T', Q:'U', R:'V', S:'W', T:'X', U:'Y', V:'Z', W:'A', X:'B', Y:'C', Z:'D'},
    {A:'F', B:'G', C:'H', D:'I', E:'J', F:'K', G:'L', H:'M', I:'N', J:'O', K:'P', L:'Q', M:'R', N:'S', O:'T', P:'U', Q:'V', R:'W', S:'X', T:'Y', U:'Z', V:'A', W:'B', X:'C', Y:'D', Z:'E'},
    {A:'G', B:'H', C:'I', D:'J', E:'K', F:'L', G:'M', H:'N', I:'O', J:'P', K:'Q', L:'R', M:'S', N:'T', O:'U', P:'V', Q:'W', R:'X', S:'Y', T:'Z', U:'A', V:'B', W:'C', X:'D', Y:'E', Z:'F'},
    {A:'H', B:'I', C:'J', D:'K', E:'L', F:'M', G:'N', H:'O', I:'P', J:'Q', K:'R', L:'S', M:'T', N:'U', O:'V', P:'W', Q:'X', R:'Y', S:'Z', T:'A', U:'B', V:'C', W:'D', X:'E', Y:'F', Z:'G'},
    {A:'I', B:'J', C:'K', D:'L', E:'M', F:'N', G:'O', H:'P', I:'Q', J:'R', K:'S', L:'T', M:'U', N:'V', O:'W', P:'X', Q:'Y', R:'Z', S:'A', T:'B', U:'C', V:'D', W:'E', X:'F', Y:'G', Z:'H'},
    {A:'J', B:'K', C:'L', D:'M', E:'N', F:'O', G:'P', H:'Q', I:'R', J:'S', K:'T', L:'U', M:'V', N:'W', O:'X', P:'Y', Q:'Z', R:'A', S:'B', T:'C', U:'D', V:'E', W:'F', X:'G', Y:'H', Z:'I'},
    {A:'K', B:'L', C:'M', D:'N', E:'O', F:'P', G:'Q', H:'R', I:'S', J:'T', K:'U', L:'V', M:'W', N:'X', O:'Y', P:'Z', Q:'A', R:'B', S:'C', T:'D', U:'E', V:'F', W:'G', X:'H', Y:'I', Z:'J'},
    {A:'L', B:'M', C:'N', D:'O', E:'P', F:'Q', G:'R', H:'S', I:'T', J:'U', K:'V', L:'W', M:'X', N:'Y', O:'Z', P:'A', Q:'B', R:'C', S:'D', T:'E', U:'F', V:'G', W:'H', X:'I', Y:'J', Z:'K'},
    {A:'M', B:'N', C:'O', D:'P', E:'Q', F:'R', G:'S', H:'T', I:'U', J:'V', K:'W', L:'X', M:'Y', N:'Z', O:'A', P:'B', Q:'C', R:'D', S:'E', T:'F', U:'G', V:'H', W:'I', X:'J', Y:'K', Z:'L'},
    {A:'N', B:'O', C:'P', D:'Q', E:'R', F:'S', G:'T', H:'U', I:'V', J:'W', K:'X', L:'Y', M:'Z', N:'A', O:'B', P:'C', Q:'D', R:'E', S:'F', T:'G', U:'H', V:'I', W:'J', X:'K', Y:'L', Z:'M'},
    {A:'O', B:'P', C:'Q', D:'R', E:'S', F:'T', G:'U', H:'V', I:'W', J:'X', K:'Y', L:'Z', M:'A', N:'B', O:'C', P:'D', Q:'E', R:'F', S:'G', T:'H', U:'I', V:'J', W:'K', X:'L', Y:'M', Z:'N'},
    {A:'P', B:'Q', C:'R', D:'S', E:'T', F:'U', G:'V', H:'W', I:'X', J:'Y', K:'Z', L:'A', M:'B', N:'C', O:'D', P:'E', Q:'F', R:'G', S:'H', T:'I', U:'J', V:'K', W:'L', X:'M', Y:'N', Z:'O'},
    {A:'Q', B:'R', C:'S', D:'T', E:'U', F:'V', G:'W', H:'X', I:'Y', J:'Z', K:'A', L:'B', M:'C', N:'D', O:'E', P:'F', Q:'G', R:'H', S:'I', T:'J', U:'K', V:'L', W:'M', X:'N', Y:'O', Z:'P'},
    {A:'R', B:'S', C:'T', D:'U', E:'V', F:'W', G:'X', H:'Y', I:'Z', J:'A', K:'B', L:'C', M:'D', N:'E', O:'F', P:'G', Q:'H', R:'I', S:'J', T:'K', U:'L', V:'M', W:'N', X:'O', Y:'P', Z:'Q'},
    {A:'S', B:'T', C:'U', D:'V', E:'W', F:'X', G:'Y', H:'Z', I:'A', J:'B', K:'C', L:'D', M:'E', N:'F', O:'G', P:'H', Q:'I', R:'J', S:'K', T:'L', U:'M', V:'N', W:'O', X:'P', Y:'Q', Z:'R'},
    {A:'T', B:'U', C:'V', D:'W', E:'X', F:'Y', G:'Z', H:'A', I:'B', J:'C', K:'D', L:'E', M:'F', N:'G', O:'H', P:'I', Q:'J', R:'K', S:'L', T:'M', U:'N', V:'O', W:'P', X:'Q', Y:'R', Z:'S'},
    {A:'U', B:'V', C:'W', D:'X', E:'Y', F:'Z', G:'A', H:'B', I:'C', J:'D', K:'E', L:'F', M:'G', N:'H', O:'I', P:'J', Q:'K', R:'L', S:'M', T:'N', U:'O', V:'P', W:'Q', X:'R', Y:'S', Z:'T'},
    {A:'V', B:'W', C:'X', D:'Y', E:'Z', F:'A', G:'B', H:'C', I:'D', J:'E', K:'F', L:'G', M:'H', N:'I', O:'J', P:'K', Q:'L', R:'M', S:'N', T:'O', U:'P', V:'Q', W:'R', X:'S', Y:'T', Z:'U'},
    {A:'W', B:'X', C:'Y', D:'Z', E:'A', F:'B', G:'C', H:'D', I:'E', J:'F', K:'G', L:'H', M:'I', N:'J', O:'K', P:'L', Q:'M', R:'N', S:'O', T:'P', U:'Q', V:'R', W:'S', X:'T', Y:'U', Z:'V'},
    {A:'X', B:'Y', C:'Z', D:'A', E:'B', F:'C', G:'D', H:'E', I:'F', J:'G', K:'H', L:'I', M:'J', N:'K', O:'L', P:'M', Q:'N', R:'O', S:'P', T:'Q', U:'R', V:'S', W:'T', X:'U', Y:'V', Z:'W'},
    {A:'Y', B:'Z', C:'A', D:'B', E:'C', F:'D', G:'E', H:'F', I:'G', J:'H', K:'I', L:'J', M:'K', N:'L', O:'M', P:'N', Q:'O', R:'P', S:'Q', T:'R', U:'S', V:'T', W:'U', X:'V', Y:'W', Z:'X'},
    {A:'Z', B:'A', C:'B', D:'C', E:'D', F:'E', G:'F', H:'G', I:'H', J:'I', K:'J', L:'K', M:'L', N:'M', O:'N', P:'O', Q:'P', R:'Q', S:'R', T:'S', U:'T', V:'U', W:'V', X:'W', Y:'X', Z:'Y'},
]

function encodeInput() {

    //get keys
    let keyFirst = document.getElementById('key-1').value - 1;
    let keySecond = document.getElementById('key-2').value - 1;
    let keyThird = document.getElementById('key-3').value - 1;
    let keyFourth = document.getElementById('key-4').value - 1;
    const allKeys = [keyFirst, keySecond, keyThird, keyFourth];
    console.log(allKeys);

    //check key
    if (keyFirst < 0 && keySecond < 0 && keyThird < 0 && keyFourth <0 ) {
        alert("Please chose key")
    };

    //input message
    let input = document.getElementById('message-input').value.toUpperCase();
    const myArray = input.split("");

    //create output
    let output = [];
    output.push(allKeys.join(''));
    
    // //function encode
    for (let i = 0; i < myArray.length; i++) {
        //step
        let $1 = myArray[i];
        let $2 = mainCode[allKeys[0]];
        let $3 = $2[$1];
        let $4 = mainCode[allKeys[1]];
        let $5 = $4[$3];
        let $6 = mainCode[allKeys[2]];
        let $7 = $6[$5];
        let $8 = mainCode[allKeys[3]];
        let $9 = $8[$7];
        //add ele
        output.push($9);
        console.log(output)
    }

    //check output
    document.getElementById("message-output").value = output.join('');
}
