"use client";

import Section from "../section";
import { siteContent } from "@/components/content/site-content";
import MaterialsKit from "./material-kit";
import MaterialsGrid from "./material-grid";
import CombineStepper from "./combine-stepper";

export default function LearningMaterials() {
  const { learningMaterials } = siteContent;

  return (
    <Section
      id="materials"
      eyebrow={learningMaterials.eyebrow}
      title={learningMaterials.title}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left: kit + intro */}
        <div className="md:col-span-5">
          <p data-reveal className="text-white/85 leading-relaxed">
            {learningMaterials.intro}
          </p>

          <div className="mt-6">
            <MaterialsKit
              title="Materials Kit"
              desc="A calm set of tools designed to plug into the books — fast to use, easy to repeat."
              chips={[
                "Low-noise design",
                "Tiny daily sessions",
                "Works with all 3 books",
              ]}
              actions={
                learningMaterials.primaryCtas ?? {
                  primary: { label: "Get the Materials Pack", href: "#" },
                  secondary: { label: "See sample pages", href: "#" },
                  tertiary: {
                    label: "How it works →",
                    href: "#materials-workflow",
                  },
                }
              }
            />
          </div>
        </div>

        {/* Right: workflow stepper (interactive) */}
        <div className="md:col-span-7" id="materials-workflow">
          <CombineStepper combine={learningMaterials.combine} />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10">
        <MaterialsGrid items={learningMaterials.materials} />
      </div>
    </Section>
  );
}
