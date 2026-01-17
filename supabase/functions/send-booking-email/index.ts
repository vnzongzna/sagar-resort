import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  const { booking } = await req.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "vaibhav1997kaushik@gmail.com",
    subject: "New Booking Request",
    html: `
      <h1>New Booking Request</h1>
      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Check In:</strong> ${booking.check_in}</p>
      <p><strong>Check Out:</strong> ${booking.check_out}</p>
      <p><strong>Room Type:</strong> ${booking.room_type}</p>
      <p><strong>Number of Rooms:</strong> ${booking.number_of_rooms}</p>
      <p><strong>Notes:</strong> ${booking.notes}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
