function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

let numero = "1,890,098,321,231,323,111,000";





console.log(replaceAll(numero, ",", "."));