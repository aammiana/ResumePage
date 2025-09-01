export default function Skills() {
  const skillCategories = [
    {
      title: "Data & Analytics",
      icon: "fas fa-chart-line",
      skills: [
        "Exploratory Data Analysis",
        "Predictive Analysis", 
        "Database Management",
        "Data Mining",
        "Data Visualization",
        "API Integration"
      ]
    },
    {
      title: "Programming & Tools",
      icon: "fas fa-code",
      skills: [
        "Python",
        "SQL", 
        "R",
        "Power BI",
        "Tableau",
        "Excel/VBA"
      ]
    },
    {
      title: "Business Operations",
      icon: "fas fa-cogs",
      skills: [
        "Process Analysis",
        "Service Delivery",
        "Customer Experience", 
        "Revenue Growth",
        "KPI Optimization"
      ]
    },
    {
      title: "Digital Analytics",
      icon: "fas fa-globe",
      skills: [
        "Google Analytics",
        "Looker Studio",
        "Google Ads",
        "Meta Ads", 
        "A/B Testing"
      ]
    }
  ];

  const pythonLibraries = [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", 
    "TensorFlow", "NLTK", "OpenAI"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-skills-title">Technical Skills</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-skills-subtitle">Expertise across the data analytics stack</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border card-hover" data-testid={`card-skill-category-${index}`}>
              <div className="text-center mb-6">
                <i className={`${category.icon} text-3xl text-primary mb-3`}></i>
                <h3 className="text-lg font-semibold" data-testid={`text-category-title-${index}`}>{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="skill-tag inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2" 
                    data-testid={`tag-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Python Libraries */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-8" data-testid="text-python-title">Python Libraries & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {pythonLibraries.map((library, index) => (
              <span 
                key={index}
                className="skill-tag bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium" 
                data-testid={`tag-python-library-${index}`}
              >
                {library}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
