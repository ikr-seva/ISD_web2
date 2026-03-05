import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, MessageSquare, Users, BookOpen, Award, Lightbulb, Target, Shield } from "lucide-react";

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-white to-white"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1e3a5f] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a961] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="mb-6">
              <Badge variant="outline" className="px-4 py-1.5 text-sm border-[#1e3a5f]/20 bg-white/80">
                Inter-School Debate (ISD) Initiative
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl mb-8 text-balance">
              Fostering Intellectual Growth &
              <span className="block text-[#1e3a5f] mt-2">Critical Thinking</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A student-led platform connecting schools in a collaborative, professional environment where ideas are exchanged, arguments are analyzed, and learning is prioritized.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" className="gap-2 px-8 py-6 bg-[#1e3a5f] hover:bg-[#2d5270]">
                  Explore Resources
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link to="/schools">
                <Button size="lg" variant="outline" className="px-8 py-6 border-[#1e3a5f]/20 hover:bg-[#f7f5f0]">
                  View Participating Schools
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">About the ISD Initiative</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive academic platform designed as both a competitive debate space and an informational educational resource
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-gray-200/60 hover:shadow-md transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a5f]/10 rounded-xl mb-3">
                    <BookOpen className="size-6 text-[#1e3a5f]" />
                  </div>
                  <CardTitle className="text-xl">Informational Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    The platform provides structured knowledge, debate summaries, and analytical resources to help students reflect and learn from structured discussions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200/60 hover:shadow-md transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#c9a961]/10 rounded-xl mb-3">
                    <Shield className="size-6 text-[#c9a961]" />
                  </div>
                  <CardTitle className="text-xl">Neutrality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Topics are determined live during events, ensuring fairness. The website does not host proposals, voting, or online scoring to maintain integrity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200/60 hover:shadow-md transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a5f]/10 rounded-xl mb-3">
                    <MessageSquare className="size-6 text-[#1e3a5f]" />
                  </div>
                  <CardTitle className="text-xl">Feedback-Oriented</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Students and teachers can provide constructive feedback through dedicated sections to continuously improve debates and platform quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200/60 hover:shadow-md transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#c9a961]/10 rounded-xl mb-3">
                    <Lightbulb className="size-6 text-[#c9a961]" />
                  </div>
                  <CardTitle className="text-xl">Educational Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Articles on debate techniques, critical thinking, and communication skills are available for reading and reflection without competitive pressure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20 bg-[#fafaf8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Purpose & Objectives</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Building essential academic skills through structured debate
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-lg bg-white hover:shadow-md transition-smooth">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d5270] rounded-xl">
                  <Target className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Critical Thinking</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enhance analytical skills and logical reasoning through structured argumentation
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg bg-white hover:shadow-md transition-smooth">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#b8964d] rounded-xl">
                  <MessageSquare className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Public Speaking</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Develop confident, articulate communication skills for effective presentations
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg bg-white hover:shadow-md transition-smooth">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d5270] rounded-xl">
                  <Users className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Teamwork</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Foster collaboration and leadership through team-based debate activities
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg bg-white hover:shadow-md transition-smooth">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#b8964d] rounded-xl">
                  <Shield className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Respectful Dialogue</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Encourage ethical discussion and respect for diverse perspectives
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg bg-white hover:shadow-md transition-smooth">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d5270] rounded-xl">
                  <BookOpen className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Problem-Solving</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Build collaborative problem-solving abilities through academic challenges
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-lg bg-white hover:shadow-md transition-smooth">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#b8964d] rounded-xl">
                  <Award className="size-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Academic Network</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Build sustainable connections between schools in our city
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Banner */}
      <section className="py-16 bg-white border-y border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#f7f5f0] to-white border border-[#c9a961]/20 rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9a961]/10 rounded-2xl mb-6">
                <Lightbulb className="size-8 text-[#c9a961]" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-4">Foundational Phase</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The ISD Initiative is currently establishing its structure and identifying participating schools within our city. Official debate events have not yet begun.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="p-4 bg-white rounded-lg border border-gray-200/60">
                  <p className="font-medium text-[#1e3a5f] mb-1">City-Based Model</p>
                  <p className="text-gray-600">Accessible participation for local public schools</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200/60">
                  <p className="font-medium text-[#1e3a5f] mb-1">Building Structure</p>
                  <p className="text-gray-600">Establishing fair and equal standards</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200/60">
                  <p className="font-medium text-[#1e3a5f] mb-1">Future Focus</p>
                  <p className="text-gray-600">Gradual expansion with maintained quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Schools Section */}
      <section className="py-20 bg-[#fafaf8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">City-Based Collaboration</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The initiative includes public schools within our city as part of a collaborative academic network
              </p>
            </div>

            <Card className="border-gray-200/60 bg-white">
              <CardContent className="pt-8">
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    At the current stage of development, participating schools are being identified and contacted to establish future cooperation. The platform is open to collaboration with public schools interested in academic dialogue, critical thinking, and structured communication initiatives.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#1e3a5f] font-semibold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Accessible Participation</h4>
                        <p className="text-sm text-gray-600">Convenient involvement for schools within the city</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#1e3a5f] font-semibold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Equal Representation</h4>
                        <p className="text-sm text-gray-600">Fair opportunities for all local public schools</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#1e3a5f] font-semibold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Strengthened Cooperation</h4>
                        <p className="text-sm text-gray-600">Building academic connections within the community</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                          <span className="text-[#1e3a5f] font-semibold">✓</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Shared Development</h4>
                        <p className="text-sm text-gray-600">Collective educational growth and learning</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200/60 text-center">
                  <Link to="/schools">
                    <Button className="gap-2 bg-[#1e3a5f] hover:bg-[#2d5270]">
                      View School List
                      <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles Section Banner */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5270] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
              <BookOpen className="size-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Educational Articles & Resources</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Explore medium-length articles on debate techniques, critical thinking, communication skills, and thought-provoking academic topics designed for reflective learning.
            </p>
            <Link to="/learn">
              <Button size="lg" variant="secondary" className="gap-2 px-8 py-6 bg-white text-[#1e3a5f] hover:bg-white/90">
                Visit Learning Center
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Join the Academic Community
            </h2>
            <p className="text-lg mb-10 text-gray-600 leading-relaxed">
              Whether you're a student, teacher, or school administrator, the ISD Initiative welcomes your participation in building a strong foundation for structured debate and intellectual growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/feedback">
                <Button size="lg" className="gap-2 px-8 py-6 bg-[#1e3a5f] hover:bg-[#2d5270]">
                  Share Feedback
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link to="/learn">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 px-8 py-6 border-[#1e3a5f]/20 hover:bg-[#f7f5f0]"
                >
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
