export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text" data-testid="text-name">Ansab Arfan Miana</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6" data-testid="text-title">
              Data & Business Operations Analyst
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-summary">
              Results-driven analyst with 3+ years of experience leveraging data to drive operational efficiency, 
              cost optimization, and strategic decision-making. Proven track record of improving business KPIs 
              through advanced analytics and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center" data-testid="button-contact">
                Get In Touch
              </a>
              <a href="#experience" className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center" data-testid="button-experience">
                View Experience
              </a>
            </div>
            
          </div>
          
          <div className="animate-fade-in-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional headshot" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
                data-testid="img-headshot"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
