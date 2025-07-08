import React from 'react';

export const Feature = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Panel - Dark */}
        <div className="bg-slate-900 text-white px-8 py-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-6">
              Platform
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              This is the start of something new
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A revolutionary approach to ADHD coaching that combines the best of human insight with AI-powered daily support. Experience personalized guidance that adapts to your unique needs.
            </p>
            
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Light */}
        <div className="bg-warm-white px-8 py-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="bg-card rounded-lg shadow-card p-8 mb-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Platform Screenshot 1</h3>
                <p className="text-muted-foreground text-sm">Interactive dashboard showing your progress and daily AI check-ins</p>
              </div>
              
              <div className="space-y-3">
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};