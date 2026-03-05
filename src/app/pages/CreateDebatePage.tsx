import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { mockSchools } from "../lib/data";

export function CreateDebatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [proSchool, setProSchool] = useState("");
  const [conSchool, setConSchool] = useState("");
  const [endDate, setEndDate] = useState("");

  const categories = ["Education", "Technology", "Environment", "Social Issues", "Politics", "Health", "Sports"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !category || !proSchool || !conSchool || !endDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (proSchool === conSchool) {
      toast.error("Pro and Con schools must be different");
      return;
    }

    if (new Date(endDate) <= new Date()) {
      toast.error("End date must be in the future");
      return;
    }

    // In a real app, this would make an API call
    toast.success("Debate created successfully!");
    setTimeout(() => {
      navigate("/debates");
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link to="/debates">
        <Button variant="ghost" className="gap-2 mb-6">
          <ArrowLeft className="size-4" />
          Back to Debates
        </Button>
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Create a New Debate</CardTitle>
          <CardDescription>
            Start a debate between two schools on a topic you're passionate about
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Debate Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Should school start times be later?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500">
                Make it clear and engaging
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide context and background for this debate..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
              <p className="text-sm text-gray-500">
                Explain what this debate is about and why it matters
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="proSchool">Pro Side School *</Label>
                <Select value={proSchool} onValueChange={setProSchool} required>
                  <SelectTrigger id="proSchool">
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockSchools.map((school) => (
                      <SelectItem key={school.id} value={school.id}>
                        {school.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">School arguing FOR the motion</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="conSchool">Con Side School *</Label>
                <Select value={conSchool} onValueChange={setConSchool} required>
                  <SelectTrigger id="conSchool">
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockSchools.map((school) => (
                      <SelectItem key={school.id} value={school.id}>
                        {school.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">School arguing AGAINST the motion</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date *</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
              <p className="text-sm text-gray-500">
                When should voting and arguments close?
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Debate Guidelines</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Keep arguments respectful and evidence-based</li>
                <li>• Focus on the topic, not personal attacks</li>
                <li>• Cite sources when making factual claims</li>
                <li>• Be open to different perspectives</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Create Debate
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/debates")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
