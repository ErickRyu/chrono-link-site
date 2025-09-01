-- Create funding_applications table
CREATE TABLE IF NOT EXISTS funding_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  package_type TEXT NOT NULL,
  price TEXT NOT NULL,
  message TEXT,
  language TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped'))
);

-- Enable Row Level Security
ALTER TABLE funding_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to insert (for public funding applications)
CREATE POLICY "Anyone can insert funding applications"
ON funding_applications FOR INSERT
WITH CHECK (true);

-- Only authenticated users can read (admin access)
CREATE POLICY "Authenticated users can read funding applications"
ON funding_applications FOR SELECT
USING (auth.role() = 'authenticated');

-- Create funding stats view
CREATE OR REPLACE VIEW funding_stats AS
SELECT 
  COUNT(*) as total_backers,
  50 - COUNT(CASE WHEN package_type LIKE '%슈퍼 얼리버드%' OR package_type LIKE '%Super Early%' THEN 1 END) as super_early_bird_remaining,
  200 - COUNT(CASE WHEN package_type LIKE '%얼리버드%' OR package_type LIKE '%Early%' THEN 1 END) as early_bird_remaining,
  ROUND((COUNT(*) * 100.0 / 500), 1) as funding_percentage,
  SUM(CASE 
    WHEN package_type LIKE '%슈퍼 얼리버드%' OR package_type LIKE '%Super Early%' THEN 39000
    WHEN package_type LIKE '%얼리버드%' OR package_type LIKE '%Early%' THEN 49000
    ELSE 69000
  END) as total_raised
FROM funding_applications
WHERE status != 'cancelled';