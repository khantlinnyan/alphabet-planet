import Section from "./section";
import LeadCaptureForm from "./lead-capture-form";

export default function LeadMagnet() {
  return (
    <Section
      id="free-sample"
      eyebrow="Free Sample Lesson Pack"
      title="Try one 10-minute lesson today."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div data-reveal className="md:col-span-7 space-y-4">
          <p className="text-white/75 leading-relaxed">
            Get a full letter experience you can use right away: a mini story,
            a sing-along song, and a printable activity plus the matching video.
          </p>
          <ul className="list-disc pl-5 space-y-3 text-sm text-white/70">
            <li>1 letter lesson</li>
            <li>Story + song + printable activity</li>
            <li>PDF + video download</li>
            <li>Takes 10 minutes</li>
          </ul>
        </div>

        <div data-reveal className="md:col-span-5" id="school-inquiry">
          <LeadCaptureForm
            idPrefix="sample-lead"
            title="Get the Free Sample"
            ctaLabel="Send My Sample"
          />
        </div>
      </div>
    </Section>
  );
}
