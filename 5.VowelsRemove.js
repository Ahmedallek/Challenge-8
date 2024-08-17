function vowelsremove(string) {
    const vowels = "aeiouAEIOU";
    return string.split('').filter(char => !vowels.includes(char)).join('');
}


const result = vowelsremove("salam alikoum");
console.log(result)

uniqueElements