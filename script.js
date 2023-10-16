function checkVowel()
{
    let text = document.getElementById("inputText").value;
    let countvowel = 0;

    text = text.toLowerCase();

    for(let i=0; i<text.length; i++)
    {
        let char = text.charAt(i);
        if(isVowel(char))
        {
            countvowel++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = "Total Vowel: "+countvowel;

}

function isVowel(char)
{
    const vowels = ["a","e","i","o","u"];
    return vowels.includes(char)
}