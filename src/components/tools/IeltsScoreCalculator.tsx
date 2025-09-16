"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function IeltsScoreCalculator() {
  const [scores, setScores] = useState({
    listening: "",
    reading: "",
    writing: "",
    speaking: ""
  });
  const [overallScore, setOverallScore] = useState<number | null>(null);

  const calculateOverallScore = () => {
    const { listening, reading, writing, speaking } = scores;
    
    if (!listening || !reading || !writing || !speaking) {
      alert("Please enter all four band scores");
      return;
    }

    const numScores = [
      parseFloat(listening),
      parseFloat(reading), 
      parseFloat(writing),
      parseFloat(speaking)
    ];

    // Validate scores are between 0-9
    if (numScores.some(score => score < 0 || score > 9 || isNaN(score))) {
      alert("Please enter valid band scores between 0 and 9");
      return;
    }

    const average = numScores.reduce((sum, score) => sum + score, 0) / 4;
    
    // Round to nearest 0.5
    const rounded = Math.round(average * 2) / 2;
    setOverallScore(rounded);
  };

  const reset = () => {
    setScores({ listening: "", reading: "", writing: "", speaking: "" });
    setOverallScore(null);
  };

  const getScoreInterpretation = (score: number) => {
    if (score >= 8.5) return { level: "Expert User", color: "text-green-600", bg: "bg-green-50" };
    if (score >= 7.5) return { level: "Very Good User", color: "text-green-500", bg: "bg-green-50" };
    if (score >= 6.5) return { level: "Competent User", color: "text-blue-600", bg: "bg-blue-50" };
    if (score >= 5.5) return { level: "Modest User", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (score >= 4.5) return { level: "Limited User", color: "text-orange-600", bg: "bg-orange-50" };
    return { level: "Extremely Limited User", color: "text-red-600", bg: "bg-red-50" };
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🧮 IELTS Score Calculator
          </CardTitle>
          <CardDescription>
            Enter your band scores for each skill to calculate your overall IELTS band score
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="listening">Listening</Label>
              <Input
                id="listening"
                type="number"
                min="0"
                max="9"
                step="0.5"
                placeholder="0.0 - 9.0"
                value={scores.listening}
                onChange={(e) => setScores(prev => ({ ...prev, listening: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reading">Reading</Label>
              <Input
                id="reading"
                type="number"
                min="0"
                max="9"
                step="0.5"
                placeholder="0.0 - 9.0"
                value={scores.reading}
                onChange={(e) => setScores(prev => ({ ...prev, reading: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="writing">Writing</Label>
              <Input
                id="writing"
                type="number"
                min="0"
                max="9"
                step="0.5"
                placeholder="0.0 - 9.0"
                value={scores.writing}
                onChange={(e) => setScores(prev => ({ ...prev, writing: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speaking">Speaking</Label>
              <Input
                id="speaking"
                type="number"
                min="0"
                max="9"
                step="0.5"
                placeholder="0.0 - 9.0"
                value={scores.speaking}
                onChange={(e) => setScores(prev => ({ ...prev, speaking: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={calculateOverallScore} className="bg-yellow-500 hover:bg-yellow-600">
              Calculate Overall Score
            </Button>
            <Button variant="outline" onClick={reset}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {overallScore !== null && (
        <Card className={getScoreInterpretation(overallScore).bg}>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-gray-900">
                {overallScore}
              </div>
              <div className={`text-lg font-semibold ${getScoreInterpretation(overallScore).color}`}>
                {getScoreInterpretation(overallScore).level}
              </div>
              <p className="text-gray-600">
                Your overall IELTS band score is calculated as the average of your four skill scores, rounded to the nearest half band.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
