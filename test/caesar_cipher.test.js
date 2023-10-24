import { caesarCipher } from "../src/caesar_cipher";

test("shift empty string", () => {
    expect(caesarCipher("", 1)).toBe("");
});

test("shift lowercase letters", () => {
    let actual = caesarCipher("tunabonitoyamhambam", 1);
    let exp = "uvobcpojupzbnibncbn";

    expect(actual).toBe(exp);
});

test("shift lowercase letters with space in between", () => {
    let actual = caesarCipher("what am i doing with my life", 2);
    let exp = "yjcv co k fqkpi ykvj oa nkhg";

    expect(actual).toBe(exp);
});

test("shift mixcase letters and keeping their case", () => {
    let actual = caesarCipher("Feels like Having some POTATO", 5);
    let exp = "Kjjqx qnpj Mfansl xtrj UTYFYT";

    expect(actual).toBe(exp);
});

test("shift punctuation and unicode characters", () => {
    let actual = caesarCipher("!@#$%^&**()💎💎💎", 10);
    let exp = "!@#$%^&**()💎💎💎";

    expect(actual).toBe(exp);
});

test("shift with negative key", () => {
    let actual = caesarCipher("abcdEFGH", -1);
    let exp = "zabcDEFG";

    expect(actual).toBe(exp);
});
