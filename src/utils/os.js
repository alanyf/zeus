var os = (function () {
    var ua = navigator.userAgent;
    var isWindowsPhone = /(?:Windows Phone)/.test(ua);
    var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    var isAndroid = /(?:Android)/.test(ua);
    var isFireFox = /(?:Firefox)/.test(ua);
    var isChrome = /(?:Chrome|CriOS)/.test(ua);
    var isTablet = /(?:iPad|PlayBook)/.test(ua)
        || (isAndroid && !/(?:Mobile)/.test(ua))
        || (isFireFox && /(?:Tablet)/.test(ua));
    var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    var isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isChrome: isChrome,
        isPc: isPc
    };
}());

export default os;
