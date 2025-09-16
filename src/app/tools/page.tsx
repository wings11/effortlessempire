import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { tools } from "@/lib/tools";

export default function ToolsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Tools</h1>
              <p className="text-lg text-gray-600">Explore interactive tools to help with study, applications, and planning.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {tools.map((tool) => (
                <Card key={tool.id} className="hover:shadow-lg transition-all duration-300 border-yellow-200 hover:border-yellow-400 text-center h-full flex flex-col">
                  <CardHeader>
                    <div className="text-5xl mb-2">{tool.icon}</div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-center gap-3">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {tool.type}
                      </span>
                      <Link href={tool.link}>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Open</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/resources" className="inline-block">
                <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                  Back to Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
