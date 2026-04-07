"use client";

import { Marquee } from "../ui/marquee";

const reviews = [
  {
    name: "Suresh Yadav",
    username: "Digital Marketing · Kolkata",
    body: "Go Ads Live is an excellent digital marketing agency based in Kolkata. Their team is highly professional, creative, and result-oriented. From social media marketing to paid advertising campaigns, they deliver strategies that actually drive real growth for businesses. The most important thing is their communication is clear and transparency as well. Good environment to work with them.",
    img: "https://avatar.vercel.sh/suresh",
  },
  {
    name: "Bengal Fencing",
    username: "Ice Dealer · Kolkata",
    body: "The team is professional, responsive, and really understands how to deliver result. Love the result for my business.",
    img: "https://avatar.vercel.sh/bengal-f",
  },
  {
    name: "Business Owner",
    username: "Growth · Kolkata",
    body: "Happy with the work . I am highly recommended for anyone looking to grow their business online go with GO ADS LIVE",
    img: "https://avatar.vercel.sh/business",
  },
  {
    name: "Owner, Irfa Family Salon",
    username: "Salon · Kolkata",
    body: "Within 45 days we were getting consistent walk-ins. The WhatsApp system handles follow-ups automatically — we just focus on the service.",
    img: "https://avatar.vercel.sh/irfa",
  },
  {
    name: "Owner, Auto Aura",
    username: "Automobile · Kolkata",
    body: "We were spending on ads before with zero results. Goadslive built a proper system — leads started coming in week 3. Complete game changer.",
    img: "https://avatar.vercel.sh/auto",
  },
  {
    name: "Owner, Zohra Style",
    username: "Fashion · Kolkata",
    body: "The GMB optimisation started bringing walk-ins on its own. Now we rank on Google Maps AND get Meta leads every day. Double impact.",
    img: "https://avatar.vercel.sh/zohra",
  },
  {
    name: "Bengal Ice Agency",
    username: "Agency · Kolkata",
    body: "Predictable enquiries every single day. The 90-day system really compounding over time. Highly recommended.",
    img: "https://avatar.vercel.sh/bengal",
  },
  {
    name: "Home Appliance",
    username: "Home Appliance · Kolkata",
    body: "The YouTube ad strategy combined with WhatsApp AI nurtured our leads perfectly. Excellent ROI.",
    img: "https://avatar.vercel.sh/star",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure 
      style={{
        position: "relative",
        width: "320px",
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.06)",
        padding: "1.5rem",
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        transition: "background 0.3s"
      }}
      className="hover-card"
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
        <img style={{ borderRadius: "50%" }} width="40" height="40" alt="" src={img} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <figcaption style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff" }}>
            {name}
          </figcaption>
          <p style={{ fontSize: "0.7rem", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>{username}</p>
        </div>
      </div>
      <blockquote style={{ marginTop: "1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <section className="reviews-section" style={{ 
      position: "relative", 
      display: "flex", 
      minHeight: "600px", 
      width: "100%", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      overflow: "hidden", 
      padding: "100px 0",
      background: "#060708"
    }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 className="reviews-heading" style={{ 
          fontSize: "3.5rem", 
          fontWeight: 900, 
          color: "#fff", 
          marginBottom: "1rem",
          fontFamily: "var(--font-montserrat)",
          textTransform: "uppercase"
        }}>
          Trusted by <span style={{ color: "#f5a623" }}>Industry Leaders</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>See what our clients are saying about their digital transformations.</p>
      </div>
      
      <Marquee pauseOnHover className="[--duration:30s]" style={{ marginBottom: "1rem" }}>
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      <div style={{ pointerEvents: "none", position: "absolute", top: 0, bottom: 0, left: 0, width: "33%", background: "linear-gradient(to right, #060708, transparent)" }}></div>
      <div style={{ pointerEvents: "none", position: "absolute", top: 0, bottom: 0, right: 0, width: "33%", background: "linear-gradient(to left, #060708, transparent)" }}></div>
      
      <style>{`
        .hover-card:hover { background: rgba(255,255,255,0.08) !important; }
      `}</style>
    </section>
  );
}
