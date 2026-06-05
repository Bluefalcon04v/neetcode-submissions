class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    // decodeString(s) {
    //     let stack = [];
    //     for (let ch of s) {
    //         if (ch !== "]") {
    //             stack.push(ch);
    //             continue;
    //         }

    //         let str = "";
    //         while (stack.length && stack[stack.length - 1] !== "[") {
    //             str = stack.pop() + str;
    //         }

    //         stack.pop(); // removed '['

    //         let num = "";
    //         while (
    //             stack.length &&
    //             stack[stack.length - 1] >= "0" &&
    //             stack[stack.length - 1] <= "9"
    //         ) {
    //             num = stack.pop() + num;
    //         }

    //         stack.push(str.repeat(Number(num)));
    //     }

    //     return stack.join("");
    // }

    decodeString(s) {
        let i = 0;

        function helper() {
            let res = "";

            while (i < s.length && s[i] !== "]") {
                if (isNaN(s[i])) {
                    res += s[i];
                    i++;
                } else {
                    let num = 0;
                    while (i < s.length && !isNaN(s[i])) {
                        num = num * 10 + Number(s[i]);
                        i++;
                    }

                    i++;
                    let decode = helper();
                    i++;

                    res += decode.repeat(num);
                }
            }
            return res;
        }

        return helper();
    }
}
