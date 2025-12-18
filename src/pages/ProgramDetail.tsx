import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Award, IndianRupee, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const programs = {
  "management-bba": {
    title: "BBA + Aviation & Hospitality Management",
    subtitle: "Bachelor of Business Administration",
    duration: "3 Years",
    eligibility: "10+2 in any stream with minimum 50% marks",
    fee: "₹85,000 per year",
    seats: 60,
    description: "A comprehensive business administration program with specialized training in aviation and hospitality management. Students gain practical exposure through internships with leading airlines and hotels.",
    curriculum: [
      { semester: "Semester 1-2", subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication", "Aviation Industry Overview"] },
      { semester: "Semester 3-4", subjects: ["Marketing Management", "Human Resource Management", "Hospitality Operations", "Airport Management", "Customer Relationship Management"] },
      { semester: "Semester 5-6", subjects: ["Strategic Management", "Airline Revenue Management", "Hotel & Resort Management", "Internship & Project Work", "Industry Certification"] },
    ],
    careers: ["Airline Manager", "Hotel Manager", "Airport Operations", "Travel Consultant", "Event Manager", "Hospitality Entrepreneur"],
    addons: ["Artificial Intelligence", "Cyber Security", "Digital Marketing", "Supply Chain Management"],
  },
  "management-bca": {
    title: "BCA + Data Science & AI",
    subtitle: "Bachelor of Computer Applications",
    duration: "3 Years",
    eligibility: "10+2 with Mathematics, minimum 50% marks",
    fee: "₹75,000 per year",
    seats: 60,
    description: "An industry-aligned computer applications program with specializations in Data Science, Artificial Intelligence, and modern software development practices.",
    curriculum: [
      { semester: "Semester 1-2", subjects: ["Programming Fundamentals", "Data Structures", "Database Management", "Web Technologies", "Mathematics for Computing"] },
      { semester: "Semester 3-4", subjects: ["Python Programming", "Machine Learning Basics", "Data Visualization", "Cloud Computing", "Mobile App Development"] },
      { semester: "Semester 5-6", subjects: ["Deep Learning", "Big Data Analytics", "Natural Language Processing", "Capstone Project", "Industry Internship"] },
    ],
    careers: ["Data Scientist", "AI Engineer", "Software Developer", "Data Analyst", "Cloud Architect", "ML Engineer"],
    addons: ["Cyber Security", "Full Stack Development", "DevOps", "Blockchain Technology"],
  },
  "management-bcom": {
    title: "B.Com + Finance & Banking",
    subtitle: "Bachelor of Commerce",
    duration: "3 Years",
    eligibility: "10+2 in Commerce/Science with minimum 50% marks",
    fee: "₹65,000 per year",
    seats: 60,
    description: "A commerce degree with specialization in finance and banking, preparing students for careers in financial services, banking, and corporate finance.",
    curriculum: [
      { semester: "Semester 1-2", subjects: ["Financial Accounting", "Business Economics", "Business Law", "Quantitative Techniques", "Principles of Management"] },
      { semester: "Semester 3-4", subjects: ["Corporate Finance", "Banking Operations", "Cost Accounting", "Taxation", "Financial Markets"] },
      { semester: "Semester 5-6", subjects: ["Investment Analysis", "Risk Management", "International Finance", "Audit & Assurance", "Project & Internship"] },
    ],
    careers: ["Financial Analyst", "Bank Manager", "Investment Banker", "Tax Consultant", "Auditor", "Corporate Finance Manager"],
    addons: ["FinTech", "Digital Marketing", "Stock Market Trading", "GST Certification"],
  },
  "nursing-bsc": {
    title: "BSc Nursing",
    subtitle: "Bachelor of Science in Nursing",
    duration: "4 Years",
    eligibility: "10+2 with PCB, minimum 45% marks, Age 17-35 years",
    fee: "₹1,20,000 per year",
    seats: 100,
    description: "A comprehensive nursing program approved by Indian Nursing Council with extensive clinical training in partner hospitals. Prepares students for professional nursing practice.",
    curriculum: [
      { semester: "Year 1", subjects: ["Anatomy & Physiology", "Nutrition & Biochemistry", "Nursing Foundations", "Psychology", "Microbiology"] },
      { semester: "Year 2", subjects: ["Medical-Surgical Nursing", "Pharmacology", "Pathology", "Community Health Nursing", "Clinical Practicum"] },
      { semester: "Year 3-4", subjects: ["Pediatric Nursing", "Obstetric Nursing", "Psychiatric Nursing", "Nursing Administration", "Research & Project"] },
    ],
    careers: ["Staff Nurse", "ICU Nurse", "Nursing Educator", "Community Health Nurse", "Hospital Administrator", "International Nursing"],
    addons: ["Critical Care Certification", "Dialysis Training", "Neonatal Care", "Emergency Nursing"],
  },
  "nursing-gnm": {
    title: "GNM Nursing",
    subtitle: "General Nursing & Midwifery",
    duration: "3.5 Years",
    eligibility: "10+2 in any stream, minimum 40% marks, Age 17-35 years",
    fee: "₹80,000 per year",
    seats: 60,
    description: "A diploma program in nursing and midwifery providing practical nursing skills and clinical experience for entry-level nursing positions.",
    curriculum: [
      { semester: "Year 1", subjects: ["Anatomy & Physiology", "Fundamentals of Nursing", "First Aid", "Personal Hygiene", "Community Health"] },
      { semester: "Year 2", subjects: ["Medical Nursing", "Surgical Nursing", "Pharmacology", "Pediatric Nursing", "Clinical Practice"] },
      { semester: "Year 3", subjects: ["Midwifery", "Mental Health Nursing", "Nursing Administration", "Clinical Internship", "Final Practicum"] },
    ],
    careers: ["Staff Nurse", "Midwife", "Home Care Nurse", "Clinic Nurse", "Community Health Worker"],
    addons: ["IV Therapy", "Wound Care", "Elderly Care", "Basic Life Support"],
  },
  "paramedical": {
    title: "Paramedical Sciences",
    subtitle: "Allied Health Programs",
    duration: "2-3 Years",
    eligibility: "10+2 with Science, minimum 45% marks",
    fee: "₹55,000 per year",
    seats: 40,
    description: "Allied health programs training students in medical laboratory technology, radiology, and other paramedical fields with hands-on hospital training.",
    curriculum: [
      { semester: "Year 1", subjects: ["Human Anatomy", "Physiology", "Basic Pathology", "Medical Terminology", "Healthcare Ethics"] },
      { semester: "Year 2", subjects: ["Clinical Biochemistry", "Microbiology Lab", "Hematology", "Diagnostic Imaging", "Hospital Internship"] },
      { semester: "Year 3", subjects: ["Advanced Diagnostics", "Quality Control", "Hospital Management", "Research Methods", "Final Practicum"] },
    ],
    careers: ["Lab Technician", "Radiology Technician", "OT Technician", "Dialysis Technician", "Cardiac Technician"],
    addons: ["Phlebotomy", "ECG Technician", "CT Scan Operation", "MRI Technology"],
  },
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? programs[slug as keyof typeof programs] : null;

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-8">The program you're looking for doesn't exist.</p>
          <Link to="/programs">
            <Button variant="gold">View All Programs</Button>
          </Link>
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
        <div className="container mx-auto px-6">
          <Link to="/programs" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                {program.subtitle}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream-DEFAULT mb-6">
                {program.title}
              </h1>
              <p className="text-cream-DEFAULT/70 text-lg mb-8">{program.description}</p>
              <Link to="/admission">
                <Button variant="hero" size="lg">Apply Now</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cream-DEFAULT/10 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-cream-DEFAULT font-semibold">{program.duration}</p>
                <p className="text-cream-DEFAULT/60 text-sm">Duration</p>
              </div>
              <div className="bg-cream-DEFAULT/10 rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-cream-DEFAULT font-semibold">{program.seats} Seats</p>
                <p className="text-cream-DEFAULT/60 text-sm">Available</p>
              </div>
              <div className="bg-cream-DEFAULT/10 rounded-xl p-6 text-center">
                <IndianRupee className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-cream-DEFAULT font-semibold">{program.fee}</p>
                <p className="text-cream-DEFAULT/60 text-sm">Tuition Fee</p>
              </div>
              <div className="bg-cream-DEFAULT/10 rounded-xl p-6 text-center">
                <Award className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-cream-DEFAULT font-semibold">100%</p>
                <p className="text-cream-DEFAULT/60 text-sm">Placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12 bg-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-gold" />
              <span className="font-semibold text-foreground">Eligibility:</span>
              <span className="text-muted-foreground">{program.eligibility}</span>
            </div>
            <Link to="/admission">
              <Button variant="gold">Check Your Eligibility</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Curriculum <span className="text-gold">Structure</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {program.curriculum.map((sem, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6 hover:shadow-elegant transition-shadow">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 pb-4 border-b border-border">
                  {sem.semester}
                </h3>
                <ul className="space-y-3">
                  {sem.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Specialized <span className="text-gold">Add-ons</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {program.addons.map((addon, index) => (
              <span key={index} className="px-6 py-3 bg-gold/20 text-foreground rounded-full font-medium">
                {addon}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Career <span className="text-gold">Opportunities</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {program.careers.map((career, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-4 text-center hover:border-gold transition-colors">
                <p className="text-foreground font-medium">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-cream-DEFAULT mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-cream-DEFAULT/70 mb-8 max-w-xl mx-auto">
            Apply now and take the first step towards a successful career.
          </p>
          <Link to="/admission">
            <Button variant="hero" size="xl">Apply for Admission</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
