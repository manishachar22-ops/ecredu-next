-- Create admission_inquiries table for storing form submissions
CREATE TABLE public.admission_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  pincode TEXT,
  qualification TEXT,
  percentage TEXT,
  program TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts (no auth required for inquiries)
ALTER TABLE public.admission_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit an inquiry
CREATE POLICY "Anyone can submit admission inquiry"
ON public.admission_inquiries
FOR INSERT
WITH CHECK (true);

-- Create news_events table for announcements and events
CREATE TABLE public.news_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  category TEXT NOT NULL DEFAULT 'news',
  image_url TEXT,
  event_date DATE,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS and allow public read access
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published news
CREATE POLICY "Anyone can read published news"
ON public.news_events
FOR SELECT
USING (published = true);

-- Insert sample news and events
INSERT INTO public.news_events (title, slug, excerpt, content, category, event_date, published) VALUES
('Admissions Open for 2024-25', 'admissions-open-2024-25', 'Applications are now being accepted for all programs for the academic year 2024-25.', 'ECR Group of Institutions is pleased to announce that admissions are now open for the academic year 2024-25. Apply now for BBA, BCA, B.Com, Nursing, and Paramedical programs.', 'announcement', '2024-06-01', true),
('Annual Sports Meet 2024', 'annual-sports-meet-2024', 'Join us for the Annual Sports Meet featuring inter-collegiate competitions.', 'The Annual Sports Meet will be held on our campus featuring track and field events, team sports, and individual competitions. All students are encouraged to participate.', 'event', '2024-08-15', true),
('Campus Placement Drive', 'campus-placement-drive-2024', 'Major airlines and hospitality companies visiting for campus recruitment.', 'Leading companies including Qatar Airways, Air India, and Taj Hotels will be conducting campus interviews for final year students.', 'event', '2024-09-20', true),
('New AI & Data Science Lab Inaugurated', 'ai-lab-inauguration', 'State-of-the-art AI and Data Science laboratory opened for students.', 'ECR Group has inaugurated a new AI and Data Science laboratory equipped with the latest hardware and software to provide hands-on training to students.', 'news', NULL, true),
('Guest Lecture by Industry Expert', 'guest-lecture-aviation', 'Senior Aviation Professional to address students on career opportunities.', 'A distinguished aviation industry veteran will be visiting our campus to share insights about career opportunities in the aviation sector.', 'event', '2024-07-10', true);