function genAnswer() {
  const posVarName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const functionNames = [
      "factSum",
      "sumFact",
      "factSumm",
      "sumFacto",
      "factAdd",
      "addFact",
      "factPlus",
      "plusFact",
      "sumFactr",
      "factSumr"
  ];
  let functionName = functionNames[Math.floor(Math.random() * functionNames.length)];
  let varNameGlobalN = posVarName[Math.floor(Math.random() * posVarName.length)]
  let varNameGlobalResult = posVarName[Math.floor(Math.random() * posVarName.length)]
  let varNameGlobalInput1 = posVarName[Math.floor(Math.random() * posVarName.length)]
  let varNameGlobalInput2 = posVarName[Math.floor(Math.random() * posVarName.length)]
  let varNameGlobalI = posVarName[Math.floor(Math.random() * posVarName.length)]
  let varNameGlobalSum = posVarName[Math.floor(Math.random() * posVarName.length)]
  let varNameGlobalFact = posVarName[Math.floor(Math.random() * posVarName.length)]
  


  let posWay = [`
    function ${functionName}(${varNameGlobalInput1}:integer):integer
      Begin:
        If ${varNameGlobalInput1} = 0 or ${varNameGlobalInput1} = 1 then:
          return 1
        Else:
          return ${varNameGlobalInput1} * fact(${varNameGlobalInput1}-1)
        Endif
      End
    endFunction
    function ${functionName}Calc(${varNameGlobalInput2}:integer):reel
      Variables:
        ${varNameGlobalI}:integer
        ${varNameGlobalSum}:reel
      Begin:
      ${varNameGlobalSum} ⬅ 0.0
      for ${varNameGlobalI} ⬅ 0 to ${varNameGlobalInput2} do:
        ${varNameGlobalSum} ⬅ ${varNameGlobalSum} + fact(${varNameGlobalI})
      Endfor
      return ${varNameGlobalSum}
    endFunction
`,
`
    function ${functionName}(${varNameGlobalInput1}:integer):reel
      Variables:
       ${varNameGlobalSum}:reel
       ${varNameGlobalI},${varNameGlobalFact}:integer
      Begin:
       ${varNameGlobalSum} ⬅ 0
       ${varNameGlobalFact} ⬅ 1
       for ${varNameGlobalI} ⬅ 0 to ${varNameGlobalInput1} do:
         ${varNameGlobalFact} ⬅ ${varNameGlobalFact} * ${varNameGlobalI} 
         ${varNameGlobalSum} ⬅ ${varNameGlobalSum} + (${varNameGlobalI}/${varNameGlobalFact})
        Endfor
        return ${varNameGlobalSum}
      End
    endFunction
`]
  let qest1 = [`Please enter ${varNameGlobalN}:`, "Please enter N1", `enter ${varNameGlobalN}:`, "enter first limit", `Donne ${varNameGlobalN}:`]
  let rng = Math.floor(Math.random() * qest1.length)

  document.querySelector("#answerArea").textContent = `
Algorithm exo7TD3
  Variables:
    ${varNameGlobalN}:integer
    ${varNameGlobalResult}:reel
  ${posWay[Math.floor(Math.random() * posWay.length)]}
  Begin:
    write(“${qest1[rng]}”)
    read(${varNameGlobalN})
    ${varNameGlobalResult} ⬅ ${functionName}(${varNameGlobalN})
    write(${varNameGlobalResult})
  End
`
}

window.onload = ()=>{
  document.querySelector("#adImg").src = `${Math.floor(Math.random()*4)}.jpg`
}

document.querySelector("#genbtn").addEventListener("click", () => genAnswer())
document.querySelector("#adCont").addEventListener("click",()=>{
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
})
