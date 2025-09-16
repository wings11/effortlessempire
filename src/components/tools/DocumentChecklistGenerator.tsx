"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const documentTemplates = {
  "university-application": {
    name: "University Application",
    documents: [
      "Academic transcripts",
      "Diploma/degree certificates",
      "English proficiency test results (IELTS/TOEFL)",
      "Statement of purpose/personal statement",
      "Letters of recommendation (2-3)",
      "CV/Resume",
      "Passport copy",
      "Financial proof/bank statements",
      "Portfolio (if applicable)",
      "Application form"
    ]
  },
  "student-visa": {
    name: "Student Visa Application",
    documents: [
      "Valid passport",
      "Visa application form",
      "University acceptance letter",
      "Financial proof/sponsorship letter",
      "Academic transcripts",
      "English proficiency certificate",
      "Medical examination results",
      "Police clearance certificate",
      "Passport-sized photographs",
      "Visa application fee receipt",
      "Travel insurance",
      "Accommodation proof"
    ]
  },
  "scholarship-application": {
    name: "Scholarship Application",
    documents: [
      "Completed application form",
      "Academic transcripts",
      "Letters of recommendation",
      "Personal statement/essay",
      "CV/Resume",
      "Financial need statement",
      "Research proposal (if applicable)",
      "English proficiency certificate",
      "Passport copy",
      "Award certificates/achievements"
    ]
  },
  "job-application": {
    name: "International Job Application",
    documents: [
      "Updated CV/Resume",
      "Cover letter",
      "Academic certificates",
      "Work experience certificates",
      "Professional references",
      "Portfolio/work samples",
      "English proficiency certificate",
      "Passport copy",
      "Professional licenses (if applicable)",
      "LinkedIn profile link"
    ]
  }
};

export default function DocumentChecklistGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [customDocuments, setCustomDocuments] = useState<string[]>([]);
  const [newDocument, setNewDocument] = useState("");

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
    setCheckedItems({});
    setCustomDocuments([]);
  };

  const handleCheckChange = (document: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [document]: checked }));
  };

  const addCustomDocument = () => {
    if (newDocument.trim() && !customDocuments.includes(newDocument.trim())) {
      setCustomDocuments(prev => [...prev, newDocument.trim()]);
      setNewDocument("");
    }
  };

  const removeCustomDocument = (document: string) => {
    setCustomDocuments(prev => prev.filter(doc => doc !== document));
    setCheckedItems(prev => {
      const updated = { ...prev };
      delete updated[document];
      return updated;
    });
  };

  const reset = () => {
    setSelectedTemplate("");
    setCheckedItems({});
    setCustomDocuments([]);
    setNewDocument("");
  };

  const getAllDocuments = () => {
    if (!selectedTemplate) return [];
    const templateDocs = documentTemplates[selectedTemplate as keyof typeof documentTemplates].documents;
    return [...templateDocs, ...customDocuments];
  };

  const getProgress = () => {
    const allDocs = getAllDocuments();
    const checkedCount = allDocs.filter(doc => checkedItems[doc]).length;
    return allDocs.length > 0 ? Math.round((checkedCount / allDocs.length) * 100) : 0;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📋 Document Checklist Generator
          </CardTitle>
          <CardDescription>
            Generate a customized document checklist for your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Application Type</label>
            <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select application type" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(documentTemplates).map(([key, template]) => (
                  <SelectItem key={key} value={key}>{template.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedTemplate && (
            <div className="flex gap-3">
              <Button onClick={reset} variant="outline">
                Reset
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedTemplate && (
        <>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {documentTemplates[selectedTemplate as keyof typeof documentTemplates].name} Checklist
                  </h3>
                  <p className="text-gray-600">
                    {getAllDocuments().filter(doc => checkedItems[doc]).length} of {getAllDocuments().length} documents completed
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">{getProgress()}%</div>
                  <div className="text-sm text-gray-500">Complete</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgress()}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documentTemplates[selectedTemplate as keyof typeof documentTemplates].documents.map((document) => (
                  <div key={document} className="flex items-center space-x-3">
                    <Checkbox
                      id={document}
                      checked={checkedItems[document] || false}
                      onCheckedChange={(checked: boolean) => handleCheckChange(document, checked)}
                    />
                    <label 
                      htmlFor={document}
                      className={`flex-1 cursor-pointer ${checkedItems[document] ? 'line-through text-gray-500' : ''}`}
                    >
                      {document}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Documents</CardTitle>
              <CardDescription>Add any additional documents specific to your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter custom document..."
                  value={newDocument}
                  onChange={(e) => setNewDocument(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomDocument()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <Button onClick={addCustomDocument} className="bg-yellow-500 hover:bg-yellow-600">
                  Add
                </Button>
              </div>

              {customDocuments.length > 0 && (
                <div className="space-y-3">
                  {customDocuments.map((document) => (
                    <div key={document} className="flex items-center space-x-3">
                      <Checkbox
                        id={`custom-${document}`}
                        checked={checkedItems[document] || false}
                        onCheckedChange={(checked: boolean) => handleCheckChange(document, checked)}
                      />
                      <label 
                        htmlFor={`custom-${document}`}
                        className={`flex-1 cursor-pointer ${checkedItems[document] ? 'line-through text-gray-500' : ''}`}
                      >
                        {document}
                      </label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeCustomDocument(document)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
