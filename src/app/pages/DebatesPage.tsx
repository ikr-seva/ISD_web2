import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MessageSquare, Calendar, BookOpen, ArrowRight } from "lucide-react";

export function DebatesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-[#fafaf8] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7f5f0] rounded-2xl mb-6">
              <MessageSquare className="size-8 text-[#1e3a5f]" />
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">Debate Archive</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Post-event documentation of structured debates. Topics are determined at live events, not through this platform.
            </p>
          </div>
        </div>
      </section>

      {/* Empty State - Foundational Phase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200/60">
              <CardContent className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#f7f5f0] rounded-2xl mb-6">
                  <Calendar className="size-10 text-[#1e3a5f]" />
                </div>
                <h2 className="text-2xl md:text-3xl mb-4 text-gray-900">
                  Debates Coming Soon
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  The ISD Initiative is currently in its foundational phase. Official inter-school debate events have not yet taken place. Once debates begin, summaries and educational materials will be published here.
                </p>
                
                <div className="bg-[#fafaf8] border border-gray-200/60 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold mb-4 text-[#1e3a5f]">What to Expect</h3>
                  <ul className="space-y-3 text-left text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] shrink-0">•</span>
                      <span>Neutral summaries of debate sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] shrink-0">•</span>
                      <span>Reflections on discussion quality and structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] shrink-0">•</span>
                      <span>Educational highlights and key arguments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] shrink-0">•</span>
                      <span>Opportunities for thoughtful commentary and reflection</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/learn">
                    <Button className="gap-2 bg-[#1e3a5f] hover:bg-[#2d5270]">
                      <BookOpen className="size-4" />
                      Explore Learning Resources
                    </Button>
                  </Link>
                  <Link to="/schools">
                    <Button variant="outline" className="gap-2 border-[#1e3a5f]/20 hover:bg-[#f7f5f0]">
                      View Participating Schools
                      <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Banner */}
      <section className="py-16 bg-[#fafaf8] border-t border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border border-gray-200/60 rounded-xl p-8">
              <h3 className="text-2xl mb-4 text-[#1e3a5f]">Our Approach to Debate Documentation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The ISD Initiative prioritizes educational development over competition. While structured debate events may include evaluation for academic purposes during live sessions, the website emphasizes learning and growth rather than rankings or competitive comparison.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                All publications will remain aligned with the platform's principles of fairness, neutrality, and academic integrity. The initiative is being built carefully to ensure that when debates begin, they operate under a clear structure supporting equal opportunity for all participating schools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
