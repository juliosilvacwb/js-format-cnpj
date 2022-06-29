"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('Tests for formatCNPJ', () => {
    test('should format CNPJ when receive only numbers', () => {
        expect((0, index_1.formatCNPJ)('88601412000128')).toBe('88.601.412/0001-28');
    });
    test('should format CNPJ when receive numbers with mask of CNPJ', () => {
        expect((0, index_1.formatCNPJ)('88.601.412/0001-28')).toBe('88.601.412/0001-28');
    });
    test('should format CNPJ when receive numbers with wrong mask of CNPJ', () => {
        expect((0, index_1.formatCNPJ)('88.601/412-000128')).toBe('88.601.412/0001-28');
    });
    test('should return received param when the param is not CNPJ', () => {
        expect((0, index_1.formatCNPJ)('10')).toBe('10');
    });
    test('should return undefined when param is undefined', () => {
        expect((0, index_1.formatCNPJ)(undefined)).toBe(undefined);
    });
});
