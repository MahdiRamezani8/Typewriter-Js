const helloWorld = "Hello everyone wellco"
const textElement = document.getElementById('text')

const wait = ms => new Promise(reslove => setTimeout(reslove, ms))

const writer = async (text, textElem) => {
    for (let index = 0; index < text.length; index++) {
        const letter = text[index]
        textElem.innerHTML += letter
        await wait(100)
    }
}

writer(helloWorld, textElement)