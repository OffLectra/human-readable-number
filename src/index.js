module.exports = function toReadable (number) {
    const exceptions = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number == 0) {
        return 'zero';
    } else if (number < 20) {
        return exceptions[number];
    } else if ((number >= 20 && (number < 1000))) {
        let t = Math.floor(number / 10) % 10;
        let u = number % 10;
        if (number < 100) {
            return (tens[t] + ' ' + exceptions[u]).replace(/ +/g, ' ').trim();
        } else if (number >= 100) {
            let h = Math.floor(number / 100);
            if (t == 1) {
                let teen = number - h*100;
                return (exceptions[h] + ' ' + 'hundred ' + exceptions[teen]).replace(/ +/g, ' ').trim();
            }
            return (exceptions[h] + ' ' + 'hundred ' + tens[t] + ' ' + exceptions[u]).replace(/ +/g, ' ').trim();
        }
    }
}
