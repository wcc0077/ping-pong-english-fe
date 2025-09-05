export const genCandidateAlphas = () => {
  const allList = []
  let count = 0
  while (count < 26){
    allList.push(String.fromCharCode('a'.charCodeAt(0) + count))
    count++
  }
  return allList
}

export const allAlphaList = genCandidateAlphas()

export const genholeWord = (word) => {

  const len = word.length
  const getRandomIndex = ()=>Math.floor(Math.random()*len)
  const holePair = (index) =>[index, word[index]]

  const pick = getRandomIndex()
  const wordWithHoleList = [...word]
  wordWithHoleList[pick] = ''

  if(len < 5) {
    return {
      wordWithHoleList,
      holeChars: [holePair(pick)]
    }
  }else {
    let pick2 = getRandomIndex()
    while(pick2 == pick){
      pick2 = getRandomIndex()
    }
    wordWithHoleList[pick2] = ''
    const holeChars = [holePair(pick), holePair(pick2)]
    return {
      wordWithHoleList,
      holeChars:pick < pick2 ? holeChars :holeChars.reverse()
    }
  }
}

export const genCandidateList = (word) => {
  const { holeChars, wordWithHoleList } = genholeWord(word)
  const answer = holeChars.length == 1 ? [holeChars[0][1]] : [holeChars[0][1], holeChars[1][1]]
  let count = 6

  while(answer.length !== count) {
    const index = Math.floor(Math.random()*26)
    const tempChar = allAlphaList[index]
    if(!answer.includes(tempChar)){
      answer.push(tempChar)
    }
  }

  // shuffle

  while(count--) {
    const len = answer.length
    const index = Math.floor(Math.random()*len)
    let temp = answer[index]
    answer[index] = answer[len - index - 1]
    answer[len - index - 1] = temp
  }
  return {
    holeChars, wordWithHoleList, candidateList: answer
  }
}
