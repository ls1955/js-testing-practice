export function analyzeArray(nums) {
    if (!nums.every((num) => typeof num === "number")) {
        throw new TypeError("nums should only contain number");
    }

    return {
        average: Math.min(
            nums.reduce((acc, num) => acc + num, 0) / nums.length
        ),
        min: Math.min(...nums),
        max: Math.max(...nums),
        length: nums.length,
    };
}
