import { Badge } from "@/components/ui/badge";
import {
  formatMemory,
  formatNotesHours,
  formatUsd,
  getPlans,
} from "@/lib/copper/catalog";
import { cn } from "@/lib/utils";

export function PlusPricing() {
  const plans = getPlans();
  return (
    <section
      id="plus"
      data-testid="plus-pricing"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 md:py-24"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Free, or Copper Plus</h2>
        <p className="text-muted-foreground mt-3 text-lg">
          Every Copper works on the Free plan. Copper Plus remembers more,
          records more and refines its answers.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((plan) => {
          const plus = plan.id === "copper-plus";
          return (
            <div
              key={plan.id}
              data-plan={plan.id}
              className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl p-8 ring-1",
                plus ? "ring-primary shadow-xl ring-2" : "ring-foreground/10",
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plus && <Badge>Most popular</Badge>}
              </div>
              <div>
                <p className="text-4xl font-bold">
                  {formatUsd(plan.monthlyUsd)}
                  <span className="text-muted-foreground text-base font-medium">
                    /month
                  </span>
                </p>
                <p className="text-muted-foreground mt-1">
                  or {formatUsd(plan.annualUsd)}/year
                </p>
              </div>
              <dl className="flex flex-col gap-3 border-t pt-6">
                <Row
                  label="Memory kept"
                  value={formatMemory(plan.memoryDays)}
                />
                <Row
                  label="Notes recording"
                  value={formatNotesHours(plan.notesHoursPerMonth)}
                />
                <Row
                  label="Refined answers"
                  value={plan.refinedAnswers ? "Included" : "Not included"}
                />
              </dl>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-semibold">{value}</dd>
    </div>
  );
}
