export function formatCNPJ(cnpj: string): string {
    if (!cnpj) return cnpj;
    let digits = cnpj.replace(/\D/g, "");
    if (digits.length !== 14) return cnpj;

    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
}