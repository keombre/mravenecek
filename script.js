function getName(word, length) {
    nm = word.charAt(0).toUpperCase() + word.slice(1) + " "
    return nm.repeat(length).slice(0, -1)
}

function getList(word, depth) {
    if (depth == 1)
        return word
    ret = ""
    for (i = 1; i < depth; i++)
        ret += getName(word, i) + ", "

    ret = ret.slice(0, -2) + " a "
    ret += getName(word, depth)

    return ret
}

function sentence(depth) {
    ret = getList("Mraveneček", depth)
    if (depth == 1)
        ret += " šel a potkal "
    else
        ret += " šli a potkali "
    
    ret += getName("Mravenečka", depth + 1) + " a " + getName("Mraveneček", depth) + " říká: \"" + getName("Mravenečku", depth + 1)

    if (depth == 1)
        ret += " pojď se mnou na výlet.\""
    else
        ret += " pojď s námi na výlet.\""


    ret += " A tak šli " + getList("Mraveneček", depth + 1) + " na výlet. A co se nestalo? "
    return ret
}

const speed = 70

function generateText(depth = 0, text = "") {
    if (text != "") {
        elem = document.getElementById("content")
        elem.innerHTML += text.slice(0, 1)
        elem.scrollTop = elem.scrollHeight
        setTimeout(() => generateText(depth, text.slice(1)), speed)
        return
    }

    setTimeout(() => generateText(depth + 1, sentence(depth + 1)), speed)
}

generateText()