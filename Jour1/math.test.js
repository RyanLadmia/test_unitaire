const addition = require('./math');

test('adds 1 + 2 to equal 7', () => 
{
    expect(addition(1, 2)).toBe(7);
})

test('adds 7 + 3 to equal 19', () => 
{
    expect(addition(7, 3)).toBe(19);
})

test('adds 18 + 21 to equal 19', () => 
{
    expect(addition(18, 21)).toBe(19);
})

test('adds 101 + 2 to equal 113', () => 
{
    expect(addition(101, 2)).toBe(113);
})






