import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { 
  ArrowLeft, 
  Calendar,
  Users,
  MapPin,
  MessageSquare,
  Lightbulb,
  HelpCircle,
  Eye
} from "lucide-react";
import { mockDebateEvents, mockReflections } from "../lib/data";
import { toast } from "sonner";

export function DebateDetailPage() {
  const { id } = useParams<{ id: string }>();
  const event = mockDebateEvents.find((e) => e.id === id);
  const eventReflections = mockReflections[id || ""] || [];
  
  const [newReflection, setNewReflection] = useState("");
  const [reflectionType, setReflectionType] = useState<string>("");
  const [authorName, setAuthorName] = useState("");

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4 text-gray-700">Event not found</h1>
        <Link to="/debates">
          <Button variant="outline" className="border-[#1a3a52]/20">
            Back to Events
          </Button>
        </Link>
      </div>
    );
  }

  const handleSubmitReflection = () => {
    if (!reflectionType) {
      toast.error("Please select a reflection type");
      return;
    }
    if (newReflection.trim().length < 30) {
      toast.error("Your reflection must be at least 30 characters long");
      return;
    }
    
    toast.success("Reflection posted successfully!");
    setNewReflection("");
    setReflectionType("");
    setAuthorName("");
  };

  const getReflectionIcon = (type: string) => {
    switch (type) {
      case "question": return <HelpCircle className="size-4" />;
      case "analysis": return <Lightbulb className="size-4" />;
      case "observation": return <Eye className="size-4" />;
      default: return <MessageSquare className="size-4" />;
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="py-8 bg-[#fafaf8] border-b border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/debates">
              <Button variant="ghost" className="gap-2 mb-6 hover:bg-white">
                <ArrowLeft className="size-4" />
                Back to Event Archive
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-[#f7f5f0] text-[#1a3a52] px-3 py-1">
                  {event.category}
                </Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="size-4" />
                  {new Date(event.eventDate).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl mb-4">
                {event.title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  {event.location}
                </span>
                <span className="flex items-center gap-2">
                  <MessageSquare className="size-4" />
                  {event.reflectionCount} reflections
                </span>
              </div>
            </div>

            {/* Participating Schools */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-gray-200/60">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">Pro Position</CardTitle>
                    <Badge className="bg-[#1a3a52] hover:bg-[#1a3a52]">PRO</Badge>
                  </div>
                  <p className="text-base font-medium text-gray-700">{event.proSchool.name}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600">Team Members:</h4>
                    <ul className="space-y-1">
                      {event.proSchool.team.map((member, idx) => (
                        <li key={idx} className="text-sm text-gray-700">• {member}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200/60">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">Con Position</CardTitle>
                    <Badge variant="outline" className="border-[#b73333] text-[#b73333]">CON</Badge>
                  </div>
                  <p className="text-base font-medium text-gray-700">{event.conSchool.name}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600">Team Members:</h4>
                    <ul className="space-y-1">
                      {event.conSchool.team.map((member, idx) => (
                        <li key={idx} className="text-sm text-gray-700">• {member}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Judge Panel */}
            <Card className="mb-12 border-gray-200/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5" />
                  Judge Panel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.judgePanel.map((judge, idx) => (
                    <li key={idx} className="text-gray-700">• {judge}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Event Summary */}
            <Card className="mb-12 border-gray-200/60">
              <CardHeader>
                <CardTitle>Debate Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {event.summary}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-[#1a3a52] mb-3">Key Arguments - Pro Position</h3>
                    <ul className="space-y-3">
                      {event.keyArgumentsPro.map((arg, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-[#1a3a52] font-medium shrink-0">{idx + 1}.</span>
                          <span className="text-gray-700 leading-relaxed">{arg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-[#b73333] mb-3">Key Arguments - Con Position</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {event.keyArgumentsCon}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Reflections */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl mb-6">Community Reflections</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                These reflections are intended for thoughtful discussion and understanding, not judgment or competition. Share observations, ask questions, or offer interpretations.
              </p>

              {eventReflections.length > 0 && (
                <div className="space-y-4 mb-8">
                  {eventReflections.map((reflection) => (
                    <Card key={reflection.id} className="border-gray-200/60">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="font-medium text-gray-700">{reflection.author}</span>
                              <span className="text-sm text-gray-500">• {reflection.school}</span>
                              <Badge variant="outline" className="text-xs">
                                {getReflectionIcon(reflection.type)}
                                <span className="ml-1 capitalize">{reflection.type}</span>
                              </Badge>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {reflection.content}
                            </p>
                            <span className="text-sm text-gray-500 mt-3 block">
                              {new Date(reflection.createdAt).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Add Reflection Form */}
              <Card className="border-gray-200/60">
                <CardHeader>
                  <CardTitle>Share Your Reflection</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    Contribute your thoughts, questions, or observations about this debate
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name (Optional)</Label>
                      <input
                        id="name"
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Reflection Type</Label>
                      <Select value={reflectionType} onValueChange={setReflectionType}>
                        <SelectTrigger id="type" className="border-gray-300">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="observation">Observation</SelectItem>
                          <SelectItem value="question">Question</SelectItem>
                          <SelectItem value="analysis">Analysis</SelectItem>
                          <SelectItem value="interpretation">Interpretation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reflection">Your Reflection</Label>
                    <Textarea
                      id="reflection"
                      value={newReflection}
                      onChange={(e) => setNewReflection(e.target.value)}
                      placeholder="Share your thoughts, questions, or interpretations about this debate..."
                      className="min-h-[150px] resize-none border-gray-300"
                    />
                    <p className="text-sm text-gray-500">
                      Minimum 30 characters. Focus on understanding and constructive discussion.
                    </p>
                  </div>

                  <Button 
                    onClick={handleSubmitReflection}
                    size="lg"
                    className="w-full gap-2 bg-[#1a3a52] hover:bg-[#2d5270]"
                  >
                    <MessageSquare className="size-4" />
                    Post Reflection
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Information Note */}
      <section className="py-12 bg-[#fafaf8] border-t border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200/60 rounded-xl p-8 text-center">
              <h3 className="text-xl mb-3 text-[#1a3a52]">About This Archive</h3>
              <p className="text-gray-600 leading-relaxed">
                This is a post-event documentation for educational and informational purposes. The debate took place at a live event where topics were determined through predefined procedures. Reflections here are for learning and understanding, not for competitive evaluation or ranking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
