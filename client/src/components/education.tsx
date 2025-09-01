export default function Education() {
  const educationData = [
    {
      degree: "Master of Business Analytics",
      school: "Macquarie Business School",
      period: "Feb 2023 – Nov 2024",
      location: "Sydney, Australia",
      icon: "fas fa-graduation-cap",
      focusAreas: [
        "Database Management and Data Extraction",
        "AI for Business",
        "Predictive Modeling and Analysis", 
        "Data Manipulation",
        "Data Visualization"
      ]
    },
    {
      degree: "Bachelor of Business Administration",
      school: "NUST Business School", 
      period: "Sep 2017 – Jun 2021",
      location: "Islamabad, Pakistan",
      icon: "fas fa-university",
      major: "Strategic Management"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-education-title">Education</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-education-subtitle">Academic foundation in business analytics and strategic management</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-lg border border-border card-hover" data-testid={`card-education-${index}`}>
              <div className="text-center mb-6">
                <i className={`${edu.icon} text-4xl text-primary mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-degree-${index}`}>{edu.degree}</h3>
                <p className="text-lg font-medium text-muted-foreground mb-2" data-testid={`text-school-${index}`}>{edu.school}</p>
                <p className="text-muted-foreground" data-testid={`text-period-${index}`}>{edu.period}</p>
                <p className="text-muted-foreground" data-testid={`text-location-${index}`}>{edu.location}</p>
              </div>
              <div className="space-y-2">
                {edu.focusAreas ? (
                  <>
                    <h4 className="font-semibold mb-3" data-testid={`text-focus-title-${index}`}>Focus Areas:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {edu.focusAreas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center gap-2" data-testid={`text-focus-area-${index}-${areaIndex}`}>
                          <i className="fas fa-dot-circle text-primary text-xs"></i>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h4 className="font-semibold mb-3" data-testid={`text-major-title-${index}`}>Major:</h4>
                    <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center font-medium" data-testid={`text-major-${index}`}>
                      {edu.major}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
