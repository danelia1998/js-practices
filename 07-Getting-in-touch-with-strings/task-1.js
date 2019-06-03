// upperCaseFirst(''); // ''

const upperCaseFirst = function (str) {
    if (typeof str === 'string') {
        let first = str.charAt(0).toUpperCase()
        let second = str.substring(1)
        let third = first + second
        return third
    } else {
        throw new Error("parameter isn't string")

    }
}

upperCaseFirst('pitter'); // Pitter