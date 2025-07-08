import React from 'react';

export const Feature = () => {
  return (
    <section className="w-full bg-warm-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Why Hybrid Beats Traditional Coaching</h2>
          <p className="text-xl text-muted-foreground">Keep what works. Fix what doesn't.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Traditional Human-Only Coaching */}
          <div className="benefit-card bg-red-50 border-red-100">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl">⚠️</div>
            </div>
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Traditional Human-Only Coaching</h3>
            
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>Deep insight — but only once a week</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>Expert guidance — but expensive and limited</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1 text-lg">❌</span>
                <span>No daily feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1 text-lg">❌</span>
                <span>Progress slows between sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1 text-lg">❌</span>
                <span>Hard for ADHD brains to stay consistent</span>
              </li>
            </ul>
          </div>

          {/* Hybrid Coaching */}
          <div className="benefit-card bg-green-50 border-green-100">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl">🚀</div>
            </div>
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Hybrid Coaching (Human + AI)</h3>
            
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>Keeps everything great about human coaching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>Adds daily AI check-ins for support between sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>Instant feedback = faster learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>Builds habits through repetition and reminders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-lg">✅</span>
                <span>More affordable + more effective</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};