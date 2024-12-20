import { describe, it, expect } from './vitest';
import {findLongestWord, countVowels, isSubset, findCommonObjects} from './functions';


describe('factorial', () => {

    it('should return 120 for n = 5', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should return 6 for n = 3', () => {
        expect(factorial(3)).toBe(6);
    });

    it('should return 1 for n = 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => factorial(-3)).toThrowError("Factorial is not defined for negative numbers");
    });
});

describe('findLongestWord', () => {

    it('should return "jumps" for sentence = "The quick brown fox jumps over the lazy dog"', () => {
        const sentence = "The quick brown fox jumps over the lazy dog";
        expect(findLongestWord(sentence)).toBe("jumps");
    });

    it('should return "Hello" for sentence = "Hello"', () => {
        const sentence = "Hello";
        expect(findLongestWord(sentence)).toBe("Hello");
    });

    it('should return an empty string for an empty sentence', () => {
        const sentence = "";
        expect(findLongestWord(sentence)).toBe("");
    });

    it('should return "quick" for sentence = " A quick test "', () => {
        const sentence = " A quick test ";
        expect(findLongestWord(sentence)).toBe("quick");
    });
});

describe('countVowels', () => {

    it('should return 3 for input "Hello World"', () => {
        const input = "Hello World";
        expect(countVowels(input)).toBe(3);
    });

    it('should return 0 for input "bcdfg"', () => {
        const input = "bcdfg";
        expect(countVowels(input)).toBe(0);
    });

    it('should return 5 for input "AeIoU"', () => {
        const input = "AeIoU";
        expect(countVowels(input)).toBe(5);
    });

    it('should return 0 for empty string', () => {
        const input = "";
        expect(countVowels(input)).toBe(0);
    });
});

describe('isSubset', () => {

    it('should return true for obj1 = { a: 1 }, obj2 = { a: 1, b: 2 }', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(true);
    });

    it('should return false for obj1 = { c: 3 }, obj2 = { a: 1, b: 2 }', () => {
        const obj1 = { c: 3 };
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(false);
    });

    it('should return true for obj1 = { a: 1, b: 2 }, obj2 = { b: 2, a: 1 }', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 2, a: 1 };
        expect(isSubset(obj1, obj2)).toBe(true);
    });

    it('should return true for obj1 = {} and obj2 = { a: 1, b: 2 }', () => {
        const obj1 = {};
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(true);
    });

    it('should return false for obj1 = { a: 1 } and obj2 = {}', () => {
        const obj1 = { a: 1 };
        const obj2 = {};
        expect(isSubset(obj1, obj2)).toBe(false);
    });
});

describe('findCommonObjects', () => {

    it('should return [{ id: 2, name: "Bob" }] for arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }] and arr2 = [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }] ', () => {
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
        const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([{ id: 2, name: 'Bob' }]);
    });

    it('should return an empty array for arr1 = [{ id: 1, name: "Alice" }] and arr2 = [{ id: 3, name: "Charlie" }] ', () => {
        const arr1 = [{ id: 1, name: 'Alice' }];
        const arr2 = [{ id: 3, name: 'Charlie' }];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });

    it('should return an empty array for empty arrays arr1 = [] and arr2 = []', () => {
        const arr1: Record<string, any>[] = [];
        const arr2: Record<string, any>[] = [];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });

    it('should return an empty array for arr1 = [{ id: 1, name: "Alice" }] and arr2 = []', () => {
        const arr1 = [{ id: 1, name: 'Alice' }];
        const arr2: Record<string, any>[] = [];
        expect(findCommonObjects(arr1, arr2)).toEqual([]);
    });
});
