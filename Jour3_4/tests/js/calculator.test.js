const { calculate } = require('../../src/Calculator');

test('Test de l\'addition', () => {
    expect(calculate('2 + 3')).toBe(5);
});

test('Test de la soustraction', () => {
    expect(calculate('5 - 2')).toBe(3);
});

test('Test de la multiplication', () => {
    expect(calculate('2 * 3')).toBe(6);
});

test('Test de la division', () => {
    expect(calculate('6 / 2')).toBe(3);
});

test('Test de la priorité des opérations', () => {
    expect(calculate('2 + 3 * 4')).toBe(14);
});

// (même si la calculatrice n'en a pas)

test('Test des parnthèses', () => {
    expect(calculate('(2 + 3) * 4')).toBe(20)
}); 

test('Test des comportements invalides', () => {
    expect(() => calculate('2 + bad')).toThrow('Expression invalide')
});


// Bonus :

test('Test d\'une chaîne vide' , () => {
    expect(() => calculate('')).toThrow('Expression invalide')
});

test('Test des injection JS interdite', () => {
    expect(() => calculate('alert("hack")')).toThrow('Expression invalide')
});


