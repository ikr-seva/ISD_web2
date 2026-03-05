import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { BookOpen, MessageSquare, Users, Clock, Eye, ArrowRight, Lightbulb, Search, FileText, ChevronDown } from "lucide-react";
import { mockResources, mockDiscussions, resourceCategories } from "../lib/learn-data";

export function LearnPage() {
  const [expandedResource, setExpandedResource] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredResources = selectedCategory
    ? mockResources.filter(r => r.category === selectedCategory)
    : mockResources;
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#fafaf8] to-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[#2d5a3d] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200/60 rounded-full mb-6">
              <Lightbulb className="size-4 text-[#1a3a52]" />
              <span className="text-sm text-gray-600">Knowledge-Based Learning Space</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">
              Learn & Explore
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A supportive environment for intellectual curiosity, understanding, and thoughtful discussion—free from competition or pressure.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="flex gap-3 items-start">
                <div className="bg-[#f7f5f0] p-2 rounded-lg mt-1">
                  <BookOpen className="size-5 text-[#1a3a52]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1a3a52] mb-1">Build Knowledge</h3>
                  <p className="text-sm text-gray-600">Access structured educational materials</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-[#f7f5f0] p-2 rounded-lg mt-1">
                  <MessageSquare className="size-5 text-[#1a3a52]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1a3a52] mb-1">Explore Ideas</h3>
                  <p className="text-sm text-gray-600">Discuss topics from multiple perspectives</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-[#f7f5f0] p-2 rounded-lg mt-1">
                  <Users className="size-5 text-[#1a3a52]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1a3a52] mb-1">Learn Together</h3>
                  <p className="text-sm text-gray-600">Engage in non-competitive dialogue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-3">Educational Resources</h2>
              <p className="text-gray-600 text-lg">
                Comprehensive guides and materials to support your learning journey
              </p>
            </div>

            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
              {/* include an "All" button */}
              <Card
                key="all"
                onClick={() => setSelectedCategory(null)}
                className={`hover:shadow-md transition-smooth cursor-pointer border-gray-200/60 ${selectedCategory === null ? 'border-[#1a3a52] bg-[#e0f2f1]' : ''}`}
              >
                <CardHeader className="space-y-2 pb-4">
                  <div className="bg-[#f7f5f0] w-10 h-10 rounded-lg flex items-center justify-center">
                    <FileText className="size-5 text-[#1a3a52]" />
                  </div>
                  <CardTitle className="text-base leading-snug">
                    All
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Show all resources
                  </CardDescription>
                </CardHeader>
              </Card>
              {resourceCategories.map((category) => (
                <Card 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`hover:shadow-md transition-smooth cursor-pointer border-gray-200/60 ${selectedCategory === category.id ? 'border-[#1a3a52] bg-[#e0f2f1]' : ''}`}
                >
                  <CardHeader className="space-y-2 pb-4">
                    <div className="bg-[#f7f5f0] w-10 h-10 rounded-lg flex items-center justify-center">
                      <FileText className="size-5 text-[#1a3a52]" />
                    </div>
                    <CardTitle className="text-base leading-snug">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Resource Articles */}
            <div className="space-y-4">
              {filteredResources.length === 0 && (
                <p className="text-center text-gray-500 py-8">No resources found for this category.</p>
              )}
              {filteredResources.map((resource) => {
                const category = resourceCategories.find(c => c.id === resource.category);
                const isExpanded = expandedResource === resource.id;
                return (
                  <Card 
                    key={resource.id}
                    className="hover:shadow-md transition-smooth border-gray-200/60">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="bg-[#f7f5f0] text-[#1a3a52]">
                              {category?.name}
                            </Badge>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="size-3" />
                              {resource.readTime}
                            </span>
                          </div>
                          
                          <CardTitle className="mb-2 leading-snug">
                            {resource.title}
                          </CardTitle>
                          
                          <CardDescription className="leading-relaxed">
                            {resource.description}
                          </CardDescription>
                          
                          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                            <span>{resource.author}</span>
                            <span>•</span>
                            <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="gap-2 border-[#1a3a52]/20 hover:bg-[#f7f5f0] shrink-0"
                          onClick={() => setExpandedResource(isExpanded ? null : resource.id)}
                        >
                          {isExpanded ? 'Close' : 'Read'}
                          <ChevronDown className={`size-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {isExpanded && (
                      <CardContent className="pt-0">
                        <div className="border-t border-gray-200/60 pt-6">
                          <div className="prose prose-sm max-w-none whitespace-pre-wrap text-gray-700 leading-relaxed">
                            {resource.content}
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Discussions */}
      <section className="py-16 bg-[#fafaf8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-3">Community Discussions</h2>
              <p className="text-gray-600 text-lg mb-6">
                Thoughtful, non-competitive conversations exploring ideas from multiple perspectives
              </p>
              
              <div className="bg-white border border-gray-200/60 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f7f5f0] p-3 rounded-lg">
                    <MessageSquare className="size-6 text-[#1a3a52]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a3a52] mb-2">Discussion Guidelines</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      This space is designed for learning and exploration, not competition. All discussions emphasize comprehension, reflection, and respectful exchange of ideas. There is no scoring or judging—the focus is purely on understanding.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ask questions to deepen understanding</li>
                      <li>• Share interpretations thoughtfully</li>
                      <li>• Explore topics from multiple angles</li>
                      <li>• Respect all viewpoints and contributions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {mockDiscussions.map((discussion) => (
                <Card 
                  key={discussion.id}
                  className="hover:shadow-md transition-smooth border-gray-200/60 bg-white"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-[#2d5a3d]/20 text-[#2d5a3d]">
                            {discussion.category}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {discussion.author} · {discussion.school}
                          </span>
                        </div>
                        
                        <CardTitle className="mb-2 leading-snug">
                          {discussion.title}
                        </CardTitle>
                        
                        <CardDescription className="leading-relaxed mb-4">
                          {discussion.description}
                        </CardDescription>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="size-4" />
                            {discussion.replies} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="size-4" />
                            {discussion.views} views
                          </span>
                          <span>•</span>
                          <span>{new Date(discussion.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-2 border-[#1a3a52]/20 hover:bg-[#f7f5f0] shrink-0"
                      >
                        View Discussion
                        <ArrowRight className="size-3" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                className="gap-2 border-[#1a3a52]/20 hover:bg-white"
              >
                Start a New Discussion
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white border-t border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Why This Space Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                By separating informational learning from competitive debate, we create a supportive environment for intellectual growth at your own pace.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-[#f7f5f0] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Search className="size-6 text-[#1a3a52]" />
                </div>
                <h3 className="text-xl">Prepare and Explore</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop foundational knowledge before engaging in formal debates. Learn concepts, formats, and principles in a pressure-free environment.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#f7f5f0] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Users className="size-6 text-[#1a3a52]" />
                </div>
                <h3 className="text-xl">Learn from Peers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exchange ideas and interpretations with students from other schools. Build understanding through shared reflection and thoughtful questions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#f7f5f0] w-12 h-12 rounded-lg flex items-center justify-center">
                  <BookOpen className="size-6 text-[#1a3a52]" />
                </div>
                <h3 className="text-xl">Accessible Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access well-organized materials written in clear, neutral language. Content is designed for students at all experience levels.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#f7f5f0] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Lightbulb className="size-6 text-[#1a3a52]" />
                </div>
                <h3 className="text-xl">Intellectual Curiosity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore topics that interest you without competitive pressure. Understanding and reflection are valued above all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
