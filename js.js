//Wednesday : Search and Replace
function searchAndReplace(sentence, searchWord, replaceWord){
    let pos = sentence.search(searchWord);
    
    if (pos<0) {
        return sentence;
    }
    let myRegex;
    if (searchWord[0]==searchWord[0].toUpperCase()) {
        replaceWord=replaceWord.replace(replaceWord[0],replaceWord[0].toUpperCase());
        
    }
    myRegex=new RegExp(`\\b${searchWord}\\b`, 'gi');

    sentence=sentence.replace(myRegex, replaceWord);
    
    return sentence;

}

let mySentence="A quick brown Fox, a slow grey Fox and a cow jumped over the lazy Fox";
let searchW="Fox";
let replaceW="dog";
console.log(searchAndReplace(mySentence,searchW,replaceW));

