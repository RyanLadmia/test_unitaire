<?php

namespace Tests\PHP;

use PHPUnit\Framework\TestCase;
use App\Calculator;
use RuntimeException;

class CalculatorTest extends TestCase
{

    public function testAddition()
    {
        $calculator = new Calculator();
        $this->assertEquals(5, $calculator->calculate('2 + 3'));
    }

    public function testSoustraction()
    {
        $calculator = new Calculator();
        $this->assertEquals(1, $calculator->calculate('3 - 2'));
    }

    public function testMultiplication()
    {
        $calculator = new Calculator();
        $this->assertEquals(6, $calculator->calculate('2 * 3'));
    }

    public function testDivision()
    {
        $calculator = new Calculator();
        $this->assertEquals(2, $calculator->calculate('6 / 3'));
    }

    public function testDivisionByZero()
    {
        $calculator = new Calculator();
        $this->expectException(RuntimeException::class);
        $calculator->calculate('6 / 0');
    }
    
    public function testExpressionWithMultipleOperations()
    {
        $calculator = new Calculator();
        $this->assertEquals(9, $calculator->calculate('2 + 3 * 4 - 5'));
    }
    
    public function testParenthesesInExpression()
    {
        $calculator = new Calculator();
        $this->assertEquals(15, $calculator->calculate('(2 + 3) * 4 - 5'));
    }

    public function testEmptyString() 
    {
        $calculator = new Calculator();
        $this->assertNull($calculator->calculate(''));
    }
    
}

?>
