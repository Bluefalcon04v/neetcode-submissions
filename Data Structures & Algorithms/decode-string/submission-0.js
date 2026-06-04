class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        for (let ch of s) {
            if (ch !== "]") {
                stack.push(ch);
                continue;
            }

            let str = "";
            while (stack.length && stack[stack.length - 1] !== "[") {
                str = stack.pop() + str;
            }

            stack.pop(); // removed '['

            let num = "";
            while (
                stack.length &&
                stack[stack.length - 1] >= "0" &&
                stack[stack.length - 1] <= "9"
            ) {
                num = stack.pop() + num;
            }

            stack.push(str.repeat(Number(num)));
        }

        return stack.join("");
    }
}
