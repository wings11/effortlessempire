export type Tool = {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji or icon name
  type: "Calculator" | "Search Tool" | "Generator" | string;
  link: string; // computed path
};

export const tools: Tool[] = [
  {
    id: "ielts-score-calculator",
    title: "IELTS Score Calculator",
    description: "Calculate your overall IELTS band score",
    icon: "🧮",
    type: "Calculator",
    link: "/tools/ielts-score-calculator",
  },
  {
    id: "university-finder",
    title: "University Finder",
    description: "Find universities that match your criteria",
    icon: "🎓",
    type: "Search Tool",
    link: "/tools/university-finder",
  },
  {
    id: "cost-of-living-calculator",
    title: "Cost of Living Calculator",
    description: "Compare living costs across different countries",
    icon: "💱",
    type: "Calculator",
    link: "/tools/cost-of-living-calculator",
  },
  {
    id: "document-checklist-generator",
    title: "Document Checklist Generator",
    description: "Generate customized document lists for your application",
    icon: "📋",
    type: "Generator",
    link: "/tools/document-checklist-generator",
  },
];

export function getToolById(id: string): Tool | undefined {
  return tools.find((t) => t.id === id);
}
