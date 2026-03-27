import { useEffect } from "react";
import { Link } from "react-router-dom"; // Imported Link for routing
import campusesData from "../data/campuses.json"; // Imported the JSON data

export default function Campuses() {
  useEffect(() => {
    document.body.className = "bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed";
    document.documentElement.className = "";
  }, []);

  return (
    <>
      {/* TopNavBar  */}

      {/* Hero Section  */}
      {/* Main Content Section: Grid Layout  */}
      <section className="campuses-page px-8 pt-32 pb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          
          {/* Dynamically render all campuses from JSON */}
          {campusesData.map((campus) => (
            <div key={campus.id} className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border border-outline/50 transition-all duration-500 group-hover:ring-4 ring-primary/30">
                <img
                  alt={campus.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={campus.thumbnail}
                />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-3">{campus.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 px-4 line-clamp-3">
                {campus.description}
              </p>
              
              {/* This Link tells the router to go to /campuses/bmsce, etc. */}
              <Link 
                to={`/campuses/${campus.id}`}
                className="font-label text-xs uppercase tracking-widest font-bold text-primary hover:text-blue-700 transition-colors flex items-center gap-2"
              >
                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}

        </div>
      </section>
      {/* Footer  */}

      <style>{`.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }`}</style>
    </>
  );
}