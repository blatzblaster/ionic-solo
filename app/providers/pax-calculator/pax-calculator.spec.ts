import { beforeEachProviders, describe, expect, inject, it } from '@angular/core/testing';
import { PaxCalculator } from './pax-calculator';
import { SoloClass } from '../classes/solo-class';

describe('Pax Calculator Provider', () => {
    beforeEachProviders(() => [PaxCalculator])

    it('Calculates pax time', inject([PaxCalculator], (paxCalculator: PaxCalculator) => {
        let fooClass : SoloClass = {
            abbreviation: 'FOO',
            name: 'Foo Class',
            paxModifier: 0.5
        };

        let barClass : SoloClass = {
            abbreviation: 'BAR',
            name: 'Bar Class',
            paxModifier: 1
        };

        expect(paxCalculator.calculatePaxTime(1, fooClass)).toBe(0.5);
        expect(paxCalculator.calculatePaxTime(1, barClass)).toBe(1);
    }));

    it('Converts pax time', inject([PaxCalculator], (paxCalculator: PaxCalculator) => {
        let fooClass : SoloClass = {
            abbreviation: 'FOO',
            name: 'Foo Class',
            paxModifier: 0.5
        };

        let barClass : SoloClass = {
            abbreviation: 'BAR',
            name: 'Bar Class',
            paxModifier: 1
        };

        expect(paxCalculator.convertPaxTime(1, barClass)).toBe(1);
        expect(paxCalculator.convertPaxTime(1, fooClass)).toBe(2);
    }));

    it('Converts raw time', inject([PaxCalculator], (paxCalculator: PaxCalculator) => {
        let fooClass : SoloClass = {
            abbreviation: 'FOO',
            name: 'Foo Class',
            paxModifier: 0.5
        };

        let barClass : SoloClass = {
            abbreviation: 'BAR',
            name: 'Bar Class',
            paxModifier: 1
        };

        expect(paxCalculator.convertRawTime(1, fooClass, barClass)).toBe(0.5);
        expect(paxCalculator.convertRawTime(1, barClass, fooClass)).toBe(2);
    }));
})