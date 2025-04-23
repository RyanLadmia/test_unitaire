<?php

namespace Tests;

use App\Math;
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testAddition()
    {
        $math = new Math();
        
        $this->assertEquals(5, $math->addition(2, 3));
        
        $this->assertEquals(0, $math->addition(-1, 1));
        
        $this->assertEquals(0, $math->addition(0, 0));
        
        $this->assertEquals(3.5, $math->addition(1.5, 2));
    }
} 