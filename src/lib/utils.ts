import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Convertit un numéro affiché en lien tel: (chiffres + indicatif international). */
export function telHref(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const normalized = digits.replace(/^00/, "");
  return `tel:+${normalized}`;
}
