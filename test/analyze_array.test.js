import { analyzeArray } from "../src/analyze_array";

test("it return an object that contain average, min, max and length of nums", () => {
    let nums = [1, 8, 3, 4, 2, 6];
    let obj = analyzeArray(nums);
    let exp = {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    };

    expect(obj).toEqual(exp);
});

test("it raises an error if not all item in nums is Number", () => {
    let nums = ["tuna"];

    expect(() => analyzeArray(nums)).toThrow("nums should only contain number");
});
