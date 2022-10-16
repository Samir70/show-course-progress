export const testCourseData = {
    courseName: "Some maths Qs",
    modules: {
        module1 : {
            moduleName: "Name of module 1 is 'module 1'!!",
            chapters: {
                number: {
                    multiplying: ['a0*b-70', 'ab*c-110', 'ab*cd-125', 'ab*c.d-135', 'cubeDigit-105', 'squareDigit-100', 'squareEndIn1-127', 'squareEndIn5-127', 'tables2to9-45'],
                    dividing: ['tables2to9-60', 'tablesWithRemainder-80'],
                    busStop: ['noCarry1-80', 'noCarry2-85', 'noRemainder-90', 'withRemainder-95'],
                    negNums: ['add-105', 'sub-110', 'times-105', 'divide-105'],
                    bidmas: ['a+bxc-105', 'axbtakec-80', 'ax(b+c)-90', 'atakeb+c-110', 'a^2takebxc-100', 'a+(btakec)^2-120'],
                },
                fraction: {
                    simplify: ['prime-75', 'composite-90'],
                    ofAmount: ['oneSlice-70', 'manySlices-120', 'mixedNumber-190'],
                    compare: ['sameDenom-170', 'sameNumer-180', 'noMatch-240'],
                    toPercentage: ['quarters-105', 'str8toOver100-150', 'simplifyThenToOver100-190'],
                    add: ['sameDenom-120', 'diffDenomChangeOne-180', 'diffDenomChangeBoth-275', 'mixedNumbers-315'],
                    multiply: ['ordinary-260', 'mixedNumbers-310'],
                },
                percent: {
                    ofAmount: ['multiplesOf25%-60', 'multiplesOf10%-105', 'multiplesOf5%-120', 'multiplesOf1%-150'],
                }
            },
        },
        module2 : {
            chapters: {
                algebra01: {
                    solveLinear: ['oneStepMult-260', 'oneStepAdd-275', 'twoStep1-300', 'twoStep2-350', 'brackets-320', 'unknownBothSides-400', 'fraction-450'],
                    substitute: ['6a(positive)-255', '6a(negative)-275', '6+a-255', '6a+2b-280', '6aminus2b+5-285'],
                },
                ratio: {
                    simplify: ['noUnits1-40', 'noUnits2-80', 'withUnits-150'],
                    share: ['findTotal-150', 'givenTotal-200', 'givenDiff-300'],
                    fractions: ['ratio2Frac-120', 'frac2Ratio-120']
                }
            },
        },
        module3 : {
            chapters: {
                data: {
                    mean: ['anyAnswer-135', 'findMissing-180', 'intAnswer-120'],
                    median: ['even-260', 'odd-255'],
                    mode: ['-255'],
                    range: ['-110']
                },
                formulas: {
                    'F=ma': ['findForce-280', 'findMass-300', 'findAcc-300']
                }
            },
        }
    }
}