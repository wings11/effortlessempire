"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sampleUniversities = [
  { name: "University of Oxford", country: "United Kingdom", ranking: 1, tuition: "£9,250", programs: ["Medicine", "Law", "Engineering", "Business"] },
  { name: "Harvard University", country: "United States", ranking: 2, tuition: "$51,925", programs: ["Medicine", "Law", "Business", "Computer Science"] },
  { name: "ETH Zurich", country: "Switzerland", ranking: 8, tuition: "CHF 1,460", programs: ["Engineering", "Computer Science", "Physics"] },
  { name: "University of Toronto", country: "Canada", ranking: 25, tuition: "CAD 58,160", programs: ["Medicine", "Engineering", "Business", "Computer Science"] },
  { name: "KTH Royal Institute", country: "Sweden", ranking: 73, tuition: "Free", programs: ["Engineering", "Computer Science", "Architecture"] },
  { name: "Technical University of Munich", country: "Germany", ranking: 37, tuition: "€150", programs: ["Engineering", "Computer Science", "Medicine"] },
  { name: "University of Melbourne", country: "Australia", ranking: 33, tuition: "AUD 45,824", programs: ["Medicine", "Law", "Engineering", "Business"] },
  { name: "National University of Singapore", country: "Singapore", ranking: 11, tuition: "SGD 37,650", programs: ["Engineering", "Computer Science", "Business", "Medicine"] }
];

export default function UniversityFinder() {
  const [filters, setFilters] = useState({
    country: "all",
    program: "all",
    maxRanking: "",
    searchTerm: ""
  });
  const [results, setResults] = useState(sampleUniversities);
  const [hasSearched, setHasSearched] = useState(false);

  const countries = [...new Set(sampleUniversities.map(uni => uni.country))].sort();
  const programs = [...new Set(sampleUniversities.flatMap(uni => uni.programs))].sort();

  const handleSearch = () => {
    let filtered = sampleUniversities;

    if (filters.country && filters.country !== "all") {
      filtered = filtered.filter(uni => uni.country === filters.country);
    }

    if (filters.program && filters.program !== "all") {
      filtered = filtered.filter(uni => uni.programs.includes(filters.program));
    }

    if (filters.maxRanking) {
      filtered = filtered.filter(uni => uni.ranking <= parseInt(filters.maxRanking));
    }

    if (filters.searchTerm) {
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    setResults(filtered);
    setHasSearched(true);
  };

  const reset = () => {
    setFilters({ country: "all", program: "all", maxRanking: "", searchTerm: "" });
    setResults(sampleUniversities);
    setHasSearched(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎓 University Finder
          </CardTitle>
          <CardDescription>
            Search and filter universities based on your preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search Universities</Label>
              <Input
                id="search"
                placeholder="Search by name or country..."
                value={filters.searchTerm}
                onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label>Country</Label>
              <Select value={filters.country} onValueChange={(value) => setFilters(prev => ({ ...prev, country: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Program</Label>
              <Select value={filters.program} onValueChange={(value) => setFilters(prev => ({ ...prev, program: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  {programs.map(program => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ranking">Max World Ranking</Label>
              <Input
                id="ranking"
                type="number"
                placeholder="e.g., 100"
                value={filters.maxRanking}
                onChange={(e) => setFilters(prev => ({ ...prev, maxRanking: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleSearch} className="bg-yellow-500 hover:bg-yellow-600">
              Search Universities
            </Button>
            <Button variant="outline" onClick={reset}>
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {hasSearched ? `Found ${results.length} Universities` : `All Universities (${results.length})`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((uni, index) => (
              <Card key={index} className="border-yellow-200 hover:border-yellow-400 transition-colors">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{uni.name}</h3>
                    <p className="text-gray-600">📍 {uni.country}</p>
                    <p className="text-gray-600">🏆 World Ranking: #{uni.ranking}</p>
                    <p className="text-gray-600">💰 Tuition: {uni.tuition}</p>
                    <div>
                      <p className="text-gray-600 mb-1">📚 Programs:</p>
                      <div className="flex flex-wrap gap-1">
                        {uni.programs.map(program => (
                          <span key={program} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {results.length === 0 && hasSearched && (
            <div className="text-center py-8 text-gray-500">
              No universities found matching your criteria. Try adjusting your filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
