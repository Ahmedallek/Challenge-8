function over30(arr) {
    return arr.filter(person=> person.age >30)
}

const ppl = [
  { name:`ahmed`, age: 20, occupation: `chomeur` },
  { name: `moh`, age: 23, occupation: `dentist` },
  { name: `zaki`, age: 14, occupation: `student` },
  { name: `youcef`, age: 56, occupation: `entrepreneur` },
  { name: `toufik`, age: 58, occupation: `entrepreneur` },
];

const pplover=over30(ppl)

console.log(pplover)