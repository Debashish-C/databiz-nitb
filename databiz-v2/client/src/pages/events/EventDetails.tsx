import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";

const eventsData = [
  {
    id: "data-brew-zomato",
    title: "The Data Brew Show – Data Analyst at Zomato",
   date: "15 Nov 2025, 4:30 PM",
    location: "YouTube Live",
      description:[
        "Join us for an engaging session with Mr Ashutosh Sharma, Data Analyst at Zomato and former Business Analyst at EXL, and a proud alumnus of MANIT as we explore the dynamic world of data-driven solutions, real business problem-solving, and actionable career insights drawn from his professional journey.",
        "This session will cover:-",
"👉The Winning Blueprint: How a data analyst turned strategy into success.",
"👉The Career Compass: Charting your path in the world of analytics.",
"👉The Analyst’s Odyssey:",
" Lessons from a journey through data, decisions, and discovery."

      ],
    image: "/databrew-zomato.jpeg",
    resources: [
      { type: "WhatsApp Group For Details", link: "https://chat.whatsapp.com/LATcJyWekFgJKsMum6nxHo?mode=wwt" },
      // { type: "YouTube", link: "https://youtu.be/sample" },
    ],
  },
];

export default function EventDetails() {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Event not found 😔
        </h1>
        <Link
          to="/events"
          className="mt-4 text-blue-600 hover:underline flex items-center"
        >
          <ArrowLeft className="mr-2" size={18} /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <Link
            to="/events"
            className="text-blue-600 hover:underline flex items-center mb-4"
          >
            <ArrowLeft className="mr-2" size={18} /> Back to Events
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">{event.title}</h1>
          <div className="flex items-center text-gray-600 space-x-4 mb-5">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" /> {event.date}
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" /> {event.location}
            </div>
          </div>
          {
            event.description.map((val, ind) => 
                <p className="text-gray-700 leading-relaxed mb-3" key={ind}>{val}</p>
            )
          }

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Resources
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {event.resources.map((res, i) => (
              <li key={i}>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {res.type} Link
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
