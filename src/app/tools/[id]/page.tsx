import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getToolById } from "@/lib/tools";
import IeltsScoreCalculator from "@/components/tools/IeltsScoreCalculator";
import UniversityFinder from "@/components/tools/UniversityFinder";
import CostOfLivingCalculator from "@/components/tools/CostOfLivingCalculator";
import DocumentChecklistGenerator from "@/components/tools/DocumentChecklistGenerator";

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = getToolById(id);

  if (!tool) return notFound();

  const renderTool = () => {
    switch (id) {
      case "ielts-score-calculator":
        return <IeltsScoreCalculator />;
      case "university-finder":
        return <UniversityFinder />;
      case "cost-of-living-calculator":
        return <CostOfLivingCalculator />;
      case "document-checklist-generator":
        return <DocumentChecklistGenerator />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="flex justify-center gap-3">
              <Link href="/resources">
                <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                  Back to Resources
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                  All Tools
                </Button>
              </Link>
            </div>
          </div>
          
          {renderTool()}
        </div>
      </section>
    </div>
  );
}
