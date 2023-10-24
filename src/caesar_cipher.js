export function caesarCipher(string, key) {
    if (key < 0) key += 26;

    const chars = [...string];

    for (let i = 0; i < string.length; i++) {
        if (/[^a-zA-Z]/.test(string[i])) continue;

        let newCodePoint = null;
        if (/[a-z]/.test(string[i])) {
            newCodePoint = ((string.codePointAt(i) - 97 + key) % 26) + 97;
        } else {
            newCodePoint = ((string.codePointAt(i) - 65 + key) % 26) + 65;
        }
        chars[i] = String.fromCodePoint(newCodePoint);
    }

    return chars.join("");
}
