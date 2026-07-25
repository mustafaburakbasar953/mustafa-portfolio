export type Category =
  | "Artificial Intelligence"
  | "Embedded Systems"
  | "Aerospace"
  | "Energy"
  | "Software"
  | "CAD & Design"
  | "Industry";

export interface Certification {
  /** Unique ID */
  id: number;

  /** Certificate title */
  title: string;

  /** Issuing organization */
  issuer: string;

  /** Category */
  category: Category;

  /** Organization logo */
  logo: string;

  /** Certificate preview image */
  thumbnail: string;

  /** Google Drive or verification URL */
  drive: string;

  /** Show in featured section */
  featured: boolean;

  /** Optional description */
  description?: string;

  /** Technologies / skills */
  skills?: string[];

  /** Credential ID */
  credentialId?: string;

  /** Issue date */
  issueDate?: string;

  /** Expiration date */
  expirationDate?: string;

  /** Certificate language */
  language?: "Turkish" | "English";

  /** Certificate provider website */
  website?: string;

  /** Verification available */
  verified?: boolean;
}

export interface CategoryFilterItem {
  id: string;
  label: string;
  value: Category | "All";
}

export interface CertificationStats {
  total: number;
  featured: number;
  categories: number;
}

export interface SearchProps {
  search: string;
  category: Category | "All";
}