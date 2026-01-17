-- Drop existing objects if they exist, for a clean slate.
-- This is useful for development but be cautious in production.
DROP POLICY IF EXISTS "Allow public insert for bookings" ON bookings;
DROP TABLE IF EXISTS bookings;
DROP TYPE IF EXISTS room_type_enum;

-- 1. Create a new ENUM type for the room types.
-- This ensures that the 'room_type' column can only accept these specific values.
CREATE TYPE room_type_enum AS ENUM (
  'deluxe',
  'executive',
  'junior-suite',
  'junior-twin',
  'royal-suite',
  'family-suite'
);

-- 2. Create the 'bookings' table with the new ENUM type, character limits, and a CHECK constraint.
CREATE TABLE bookings (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,

  -- Ensures that at least 1 room must be booked.
  number_of_rooms INT NOT NULL CHECK (number_of_rooms >= 1),

  room_type room_type_enum NOT NULL,

  -- Set character limits to prevent excessively long inputs.
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  notes VARCHAR(500),

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS) on the 'bookings' table.
-- This is a crucial security step to control access to the data.
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- 4. Create a security policy that allows anyone to insert a new booking.
-- This policy allows new bookings to be created, but does not allow anyone to read, update, or delete existing bookings.
CREATE POLICY "Allow public insert for bookings"
ON bookings
FOR INSERT
WITH CHECK (true);
