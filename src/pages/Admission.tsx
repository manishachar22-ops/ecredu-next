import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const admissionSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  date_of_birth: z.string().optional(),
  gender: z.string().optional(),
  address: z.string().max(500).optional(),
  city: z.string().max(100).optional(),
  state: z.string().max(100).optional(),
  pincode: z.string().max(10).optional(),
  qualification: z.string().optional(),
  percentage: z.string().optional(),
  program: z.string().min(1, "Please select a program"),
  message: z.string().max(1000).optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const programs = [
  "BBA + Aviation & Hospitality Management",
  "BCA + Data Science & AI",
  "B.Com + Finance & Banking",
  "BSc Nursing",
  "GNM Nursing",
  "Paramedical Sciences",
];

const Admission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    try {
      const insertData = {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        program: data.program,
        date_of_birth: data.date_of_birth || null,
        gender: data.gender || null,
        address: data.address || null,
        city: data.city || null,
        state: data.state || null,
        pincode: data.pincode || null,
        qualification: data.qualification || null,
        percentage: data.percentage || null,
        message: data.message || null,
      };
      const { error } = await supabase.from("admission_inquiries").insert([insertData]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Application Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your interest in ECR Group of Institutions. Our admissions team will
              contact you within 24-48 hours to guide you through the next steps.
            </p>
            <Button variant="gold" onClick={() => setIsSubmitted(false)}>
              Submit Another Application
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-DEFAULT mb-4">
            Apply for <span className="text-gold">Admission</span>
          </h1>
          <p className="text-cream-DEFAULT/70 text-lg max-w-2xl mx-auto">
            Start your journey towards a successful career. Fill out the form below and our
            admissions team will get in touch with you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      placeholder="Enter your full name"
                      {...register("full_name")}
                      className="mt-2"
                    />
                    {errors.full_name && (
                      <p className="text-destructive text-sm mt-1">{errors.full_name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className="mt-2"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      {...register("phone")}
                      className="mt-2"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="date_of_birth">Date of Birth</Label>
                    <Input
                      id="date_of_birth"
                      type="date"
                      {...register("date_of_birth")}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(value) => setValue("gender", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Address Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address"
                      {...register("address")}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      {...register("city")}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="State"
                      {...register("state")}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      placeholder="Pincode"
                      {...register("pincode")}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Education & Program */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Education & Program Selection
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="qualification">Highest Qualification</Label>
                    <Select onValueChange={(value) => setValue("qualification", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10th">10th Standard</SelectItem>
                        <SelectItem value="12th-science">12th Science</SelectItem>
                        <SelectItem value="12th-commerce">12th Commerce</SelectItem>
                        <SelectItem value="12th-arts">12th Arts</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="percentage">Percentage/CGPA</Label>
                    <Input
                      id="percentage"
                      placeholder="e.g., 85% or 8.5 CGPA"
                      {...register("percentage")}
                      className="mt-2"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="program">Program of Interest *</Label>
                    <Select onValueChange={(value) => setValue("program", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.program && (
                      <p className="text-destructive text-sm mt-1">{errors.program.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any questions or additional information you'd like to share..."
                      {...register("message")}
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-muted-foreground text-sm">
                  * Required fields. We'll contact you within 24-48 hours.
                </p>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-2">Call our admissions team</p>
              <a href="tel:+918277755777" className="text-gold font-semibold hover:underline">
                +91 82777 55777
              </a>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-2">Send your queries via email</p>
              <a href="mailto:admission@ecredu.com" className="text-gold font-semibold hover:underline">
                admission@ecredu.com
              </a>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Visit Campus
              </h3>
              <p className="text-muted-foreground mb-2">Schedule a campus tour</p>
              <span className="text-foreground font-semibold">Udupi, Karnataka</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admission;
