function replaceTurkishCharacters(str) {
    if (!str || typeof str !== 'string') {
        console.error('Geçerli bir string girişi bekleniyor.');
        return '';
    }

    const turkishChars = {
        'ğ': 'g',
        'Ğ': 'G',
        'ü': 'u',
        'Ü': 'U',
        'ş': 's',
        'Ş': 'S',
        'ı': 'i',
        'İ': 'I',
        'ö': 'o',
        'Ö': 'O',
        'ç': 'c',
        'Ç': 'C'
    };

    return str.replace(/[ğüşıöçĞÜŞİÖÇ]/g, function(match) {
        return turkishChars[match];
    });
}

export {
    replaceTurkishCharacters
}