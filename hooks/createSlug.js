import slugify from 'react-slugify';

function createSlug(str) {
    if (!str || typeof str !== 'string') {
        console.error('Geçerli bir string girişi bekleniyor.');
        return '';
    }

    return slugify(str);
}

export {
    createSlug
}