import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Search, Users, MapPin, CheckCircle, Circle, Clock } from "lucide-react";
import { mockSchools } from "../lib/data";

export function SchoolsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSchools = mockSchools.filter((school) => 
    school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    school.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "participating":
        return { label: "Participating", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
      case "contacted":
        return { label: "Contacted", icon: Clock, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
      case "identified":
        return { label: "Identified", icon: Circle, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" };
      default:
        return { label: "Unknown", icon: Circle, color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" };
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#fafaf8] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7f5f0] rounded-2xl mb-6">
              <Users className="size-8 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Participating Schools</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              City-based public schools being identified and contacted for collaboration in the ISD Initiative
            </p>
          </div>
        </div>
      </section>

      {/* Current Status Banner */}
      <section className="py-12 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#f7f5f0] to-white border border-[#c9a961]/20 rounded-xl p-8">
              <h2 className="text-2xl mb-4 text-center text-[#1e3a5f]">Building Our Network</h2>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                We are currently establishing partnerships with public schools within our city. This list represents schools at various stages of engagement with the initiative.
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/60">
                  <Circle className="size-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Identified</p>
                    <p className="text-xs text-gray-500">Potential participants</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/60">
                  <Clock className="size-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Contacted</p>
                    <p className="text-xs text-gray-500">In discussion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200/60">
                  <CheckCircle className="size-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Participating</p>
                    <p className="text-xs text-gray-500">Confirmed partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-md">
              <label className="text-sm font-medium mb-2 block text-gray-700">Search Schools</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <Input
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools List */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {filteredSchools.length} school{filteredSchools.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredSchools.length === 0 ? (
              <div className="text-center py-16 bg-[#fafaf8] rounded-lg">
                <Search className="size-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No schools found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSchools.map((school) => {
                  const statusInfo = getStatusInfo(school.contactStatus);
                  const StatusIcon = statusInfo.icon;
                  
                  return (
                    <Card 
                      key={school.id} 
                      className="hover:shadow-lg transition-smooth border-gray-200/60"
                    >
                      <CardHeader>
                        <div className="mb-3">
                          <div className="flex items-start justify-between mb-3">
                            <CardTitle className="text-xl flex-1">{school.name}</CardTitle>
                            <StatusIcon className={`size-5 ${statusInfo.color} shrink-0 mt-1`} />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="size-4" />
                            <span>{school.location}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-[#f7f5f0] rounded-lg">
                            <Users className="size-5 text-[#1e3a5f]" />
                            <div className="flex-1">
                              <p className="font-semibold text-[#1e3a5f]">
                                {school.studentsCount.toLocaleString()}
                              </p>
                              <p className="text-xs text-gray-600">Participating Students</p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-gray-200/60">
                            <Badge 
                              variant="outline" 
                              className={`${statusInfo.bg} ${statusInfo.color} ${statusInfo.border}`}
                            >
                              <StatusIcon className="size-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Banner */}
      <section className="py-16 bg-[#fafaf8] border-t border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border border-gray-200/60 rounded-xl p-8">
              <h3 className="text-2xl mb-4 text-[#1e3a5f]">Open to Collaboration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The ISD Initiative welcomes public schools within our city interested in academic dialogue, critical thinking, and structured communication. This city-based model allows for accessible participation, equal representation, and strengthened academic cooperation within the community.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                The initiative prioritizes educational development over competition. There are no leaderboards or rankings—all schools contribute equally to the academic community. The project aims to gradually expand participation while maintaining organization, fairness, and academic standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
