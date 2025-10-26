export function slugify(input: string) {
  if (!input) return "";
  // Normalize diacritics, convert to lower-case, replace non-alphanum with hyphen
  return input
    .toString()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
