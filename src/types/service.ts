export interface ServiceCostItem {
  concept: string;
  value: string;
  notes?: string;
}

export interface LaboratoryService {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  whatYouFind: string[];
  costs: ServiceCostItem[];
}
