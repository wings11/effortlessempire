"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const costData = {
  "United States": { rent: 1500, food: 400, transport: 150, utilities: 120, entertainment: 200, currency: "USD" },
  "United Kingdom": { rent: 1200, food: 350, transport: 120, utilities: 100, entertainment: 180, currency: "GBP" },
  "Germany": { rent: 800, food: 300, transport: 80, utilities: 150, entertainment: 150, currency: "EUR" },
  "Canada": { rent: 1100, food: 350, transport: 100, utilities: 110, entertainment: 170, currency: "CAD" },
  "Australia": { rent: 1300, food: 400, transport: 130, utilities: 140, entertainment: 190, currency: "AUD" },
  "Sweden": { rent: 900, food: 320, transport: 90, utilities: 80, entertainment: 160, currency: "SEK" },
  "Netherlands": { rent: 1000, food: 330, transport: 100, utilities: 120, entertainment: 170, currency: "EUR" },
  "Singapore": { rent: 1400, food: 380, transport: 110, utilities: 100, entertainment: 200, currency: "SGD" },
  "Japan": { rent: 1100, food: 450, transport: 120, utilities: 130, entertainment: 180, currency: "JPY" },
  "Thailand": { rent: 400, food: 200, transport: 50, utilities: 60, entertainment: 100, currency: "THB" }
};

export default function CostOfLivingCalculator() {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  const countries = Object.keys(costData).sort();

  const handleCompare = () => {
    if (!country1 || !country2) {
      alert("Please select both countries to compare");
      return;
    }
    setShowComparison(true);
  };

  const reset = () => {
    setCountry1("");
    setCountry2("");
    setShowComparison(false);
  };

  const getTotal = (country: string) => {
    const data = costData[country as keyof typeof costData];
    return data.rent + data.food + data.transport + data.utilities + data.entertainment;
  };

  const getDifference = () => {
    if (!country1 || !country2) return 0;
    return getTotal(country2) - getTotal(country1);
  };

  const formatCurrency = (amount: number, country: string) => {
    const currency = costData[country as keyof typeof costData].currency;
    return `${amount.toLocaleString()} ${currency}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💱 Cost of Living Calculator
          </CardTitle>
          <CardDescription>
            Compare monthly living costs between different countries
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Country 1</label>
              <Select value={country1} onValueChange={setCountry1}>
                <SelectTrigger>
                  <SelectValue placeholder="Select first country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Country 2</label>
              <Select value={country2} onValueChange={setCountry2}>
                <SelectTrigger>
                  <SelectValue placeholder="Select second country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleCompare} className="bg-yellow-500 hover:bg-yellow-600">
              Compare Countries
            </Button>
            <Button variant="outline" onClick={reset}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {showComparison && country1 && country2 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[country1, country2].map((country, index) => {
            const data = costData[country as keyof typeof costData];
            const total = getTotal(country);
            
            return (
              <Card key={country} className={index === 0 ? "border-blue-200" : "border-green-200"}>
                <CardHeader>
                  <CardTitle className="text-xl">{country}</CardTitle>
                  <CardDescription>Monthly living costs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>🏠 Rent (1BR apartment)</span>
                      <span className="font-medium">{formatCurrency(data.rent, country)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🍽️ Food & Groceries</span>
                      <span className="font-medium">{formatCurrency(data.food, country)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🚌 Transportation</span>
                      <span className="font-medium">{formatCurrency(data.transport, country)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>⚡ Utilities</span>
                      <span className="font-medium">{formatCurrency(data.utilities, country)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🎬 Entertainment</span>
                      <span className="font-medium">{formatCurrency(data.entertainment, country)}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Monthly Cost</span>
                    <span className={index === 0 ? "text-blue-600" : "text-green-600"}>
                      {formatCurrency(total, country)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {showComparison && country1 && country2 && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold">Cost Difference</h3>
              <div className="text-2xl font-bold">
                {getDifference() > 0 ? (
                  <span className="text-red-600">
                    +{formatCurrency(Math.abs(getDifference()), country2)} more expensive
                  </span>
                ) : getDifference() < 0 ? (
                  <span className="text-green-600">
                    -{formatCurrency(Math.abs(getDifference()), country1)} less expensive
                  </span>
                ) : (
                  <span className="text-gray-600">Same cost</span>
                )}
              </div>
              <p className="text-gray-600">
                {country2} compared to {country1}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
