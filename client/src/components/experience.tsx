export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Under CTRL",
      period: "Nov 2024 – Present",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      achievements: [
        "Automated Data Extraction Workflow using AI Tool with Python and OpenAI API integration, improving efficiency by 50%",
        "Designed Predictive Model for Customer Profiling, improving Customer growth by 25% and reducing Customer Churn by 10%",
        "Standardized Data Manipulation using Pandas and Excel for improved Analysis accuracy",
        "Conducted comprehensive end-to-end Analysis tracking Business KPIs including ROI, Revenue Growth, and Customer Satisfaction"
      ]
    },
    {
      title: "Data Analyst (Sales Operations and Marketing)",
      company: "Minova Australia",
      period: "Jul 2023 – Mar 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      achievements: [
        "Consolidated Sales Operations Data from CRM into SQL Server relational Database implementing Data Management protocols",
        "Developed fully automated, interactive Power BI dashboard for real-time insights across multiple business functions",
        "Improved order processing time by 3 days and Lead time by 25% through data-driven optimizations",
        "Conducted Market Analysis enabling 15% Market share expansion and 8-10% ROI improvement"
      ]
    },
    {
      title: "Data Analyst",
      company: "In Digital Group",
      period: "May 2022 – Jun 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      achievements: [
        "Automated ETL processes from multiple sources using APIs and Power Query into Excel relational Data Models",
        "Designed interactive Power BI dashboards tracking Revenue, ROI, and Customer Conversion metrics",
        "Analyzed Customer Acquisition funnel to identify and fix process leakages, improving Conversion Rate",
        "Facilitated cross-functional communication presenting actionable insights to senior leadership"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-experience-title">Professional Experience</h2>
          <p className="text-muted-foreground text-lg" data-testid="text-experience-subtitle">A track record of driving data-driven business improvements</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg border border-border card-hover" data-testid={`card-experience-${index}`}>
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2" data-testid={`text-job-title-${index}`}>{exp.title}</h3>
                  <p className="text-lg font-medium mb-2" data-testid={`text-company-${index}`}>{exp.company}</p>
                  <p className="text-muted-foreground" data-testid={`text-period-${index}`}>{exp.period}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <img 
                    src={exp.image} 
                    alt={`${exp.company} workspace`} 
                    className="rounded-lg w-full lg:w-64 h-40 object-cover" 
                    data-testid={`img-workspace-${index}`}
                  />
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-3" data-testid={`text-achievement-${index}-${achIndex}`}>
                    <i className="fas fa-check-circle text-primary mt-1"></i>
                    <span dangerouslySetInnerHTML={{
                      __html: achievement.replace(/(\d+%|\d+ days?)/g, '<strong class="text-foreground">$1</strong>')
                    }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
