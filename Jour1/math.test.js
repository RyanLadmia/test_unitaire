const addition = require('./math');

test('adds 1 + 2 to equal 3', () => 
{
    expect(addition(1, 2)).toBe(3);
})

test('adds 7 + 3 to equal 10', () => 
{
    expect(addition(7, 3)).toBe(10);
})

test('adds 18 + 21 to equal 39', () => 
{
    expect(addition(18, 21)).toBe(39);
})

test('adds 101 + 2 to equal 103', () => 
{
    expect(addition(101, 2)).toBe(103);
})






