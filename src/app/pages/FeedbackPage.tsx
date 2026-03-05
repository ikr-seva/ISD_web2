import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { MessageSquare, Lightbulb, Monitor, FileText, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export function FeedbackPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [feedbackText, setFeedbackText] = useState("");
  const [name, setName] = useState("");

  const categories = [
    {
      id: "organization",
      name: "Debate Organization",
      icon: MessageSquare,
      description: "Event structure, scheduling, and coordination"
    },
    {
      id: "clarity",
      name: "Academic Clarity",
      icon: Lightbulb,
      description: "Balance, fairness, and educational value"
    },
    {
      id: "website",
      name: "Website Usability",
      icon: Monitor,
      description: "Design, navigation, and functionality"
    },
    {
      id: "content",
      name: "Content Quality",
      icon: FileText,
      description: "Articles, resources, and information"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !feedbackText.trim()) {
      toast.error("Please select a category and provide feedback");
      return;
    }

    try {
      // EmailJS configuration - Replace with your actual service ID, template ID, and public key
      // Sign up at https://www.emailjs.com/ and create a service, template, and get your public key
      // Template should include: {{from_name}}, {{category}}, {{message}}, {{to_email}}
      const serviceId = 'your_service_id'; // Replace with your EmailJS service ID
      const templateId = 'your_template_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: name || 'Anonymous',
        category: categories.find(cat => cat.id === selectedCategory)?.name || selectedCategory,
        message: feedbackText,
        to_email: 'familyikromovs@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Thank you for your feedback! Your message has been sent.");
      setFeedbackText("");
      setName("");
      setSelectedCategory("");
    } catch (error) {
      console.error('Email send error:', error);
      toast.error("Failed to send feedback. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#fafaf8] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f7f5f0] rounded-2xl mb-6">
              <MessageSquare className="size-8 text-[#1a3a52]" />
            </div>
            
            <h1 className="text-4xl md:text-5xl mb-6">
              Share Your Feedback
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your observations and suggestions help us improve the platform and debate events. All feedback is reviewed thoughtfully to support continuous development.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl mb-3 text-center">Select a Category</h2>
              <p className="text-gray-600 text-center">
                Choose the area you'd like to provide feedback on
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <Card
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? "border-[#1a3a52] bg-[#f7f5f0] shadow-md"
                        : "border-gray-200/60 hover:border-[#1a3a52]/30 hover:shadow-sm"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          isSelected ? "bg-[#1a3a52] text-white" : "bg-[#f7f5f0] text-[#1a3a52]"
                        }`}>
                          <Icon className="size-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="mb-2">{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            {selectedCategory && (
              <Card className="border-gray-200/60">
                <CardHeader>
                  <CardTitle>Your Feedback</CardTitle>
                  <CardDescription>
                    Share your observations, suggestions, or constructive comments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (Optional)</Label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="feedback">Your Feedback</Label>
                      <Textarea
                        id="feedback"
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Please share your thoughts, observations, or suggestions..."
                        className="min-h-[200px] resize-none"
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Feedback is used for evaluation and improvement, not for ranking or comparison.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full gap-2 bg-[#1a3a52] hover:bg-[#2d5270]"
                    >
                      <Send className="size-4" />
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 bg-[#fafaf8] border-t border-gray-200/60">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Our Commitment</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Feedback supports continuous improvement and transparency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200/60 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-[#1a3a52]">Thoughtful Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  All feedback is carefully reviewed and considered by organizers and coordinators. Your input directly contributes to planning and improvements.
                </p>
              </div>

              <div className="bg-white border border-gray-200/60 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-[#1a3a52]">No Public Ranking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Feedback is used for development purposes only, not for public comparison, scoring, or competitive evaluation.
                </p>
              </div>

              <div className="bg-white border border-gray-200/60 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-[#1a3a52]">Constructive Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We value observations and suggestions that help strengthen the initiative's educational value and organizational quality.
                </p>
              </div>

              <div className="bg-white border border-gray-200/60 rounded-lg p-6">
                <h3 className="text-xl mb-3 text-[#1a3a52]">Continuous Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your feedback reflects our commitment to ongoing improvement, transparency, and responsiveness to community needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
