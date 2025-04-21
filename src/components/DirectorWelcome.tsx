
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DirectorWelcome = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-mokotla-blue">Director's Welcome</h2>
          <Card className="bg-mokotla-blue/5 border-none">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                "Welcome to Mokotla Group, where excellence meets innovation in construction and logistics. 
                For over a decade, we've been building not just structures, but trust and lasting relationships 
                with our clients. Our commitment to quality, safety, and timely delivery sets us apart in the industry. 
                As we continue to grow and evolve, our core values remain unchanged: integrity, professionalism, 
                and dedication to exceeding our clients' expectations."
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-mokotla-blue">John Mokotla</h4>
                <p className="text-gray-600">Managing Director</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DirectorWelcome;
