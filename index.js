const btn = document.getElementById("btn");
const result = document.getElementById("result");
const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.getElementById("sound");

btn.addEventListener("click", () => {
    let word = document.getElementById("inp").value;
    fetch(url+word).then((response)=>response.json()).then((data)=>
    {
        
        console.log(data[0].meanings.length);
        
        result.innerHTML = '\
        <div class="first" id="first">\
                <h1>'+word+'</h1>\
                <button onclick="pl()"><i class="fa-solid fa-volume-high"></i></button>\
        </div>\
        <div class="pclass" id="plcass">\
                <p>'+data[0].meanings[0].partOfSpeech+' &nbsp;' +data[0].phonetics[1].text+'</p>\
        </div>\
        <div class="defi" id="defi">\
                <p>'+data[0].meanings[0].definitions[0].definition+'</p>\
        </div>\
        <div class="example" id="example">\
                <p>'+data[0].meanings[0].definitions[0].example+'</p>\
        </div>\
    ';
        sound.setAttribute("src",data[0].phonetics[1].audio);
    })
    .catch(()=>
    {
        result.innerHTML=`<h1 class="error">Could'nt Find The Word</h1>`
    })
});

function pl()
{
    sound.play();
}


// [{"word":"hello"/
// ,"phonetics":[{"audio":"https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
//                 "sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=75797336",
//                 "license":{"name":"BY-SA 4.0","url":"https://creativecommons.org/licenses/by-sa/4.0"}},
//                 {"text":"/həˈləʊ/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
//                 "sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=9021983",
//                 "license":{"name":"BY 3.0 US","url":"https://creativecommons.org/licenses/by/3.0/us"}},
//                 {"text":"/həˈloʊ/","audio":""}]
//                 ,"synonyms":["greeting"],"antonyms":[]},
//{"partOfSpeech":"verb","definitions":[{"definition":"To greet with \"hello\".","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"interjection","definitions":[{"definition":"A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.","synonyms":[],"antonyms":[],"example":"Hello, everyone."},{"definition":"A greeting used when answering the telephone.","synonyms":[],"antonyms":[],"example":"Hello? How may I help you?"},{"definition":"A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.","synonyms":[],"antonyms":[],"example":"Hello? Is anyone there?"},{"definition"
//:"Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.","synonyms":[],"antonyms":[],"example":"You just tried to start your car with your cell phone. Hello?"},{
    //"definition":"An expression of puzzlement or discovery.","synonyms":[],"antonyms":[],"example":"Hello! What’s going on here?"}],"synonyms":[],"antonyms":["bye","goodbye"]}],
                