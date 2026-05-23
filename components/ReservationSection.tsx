"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion, type Variants } from "framer-motion";

import { Input }    from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label }    from "@/components/ui/label";
import { Button }   from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ── Static data ───────────────────────────────────────────────────────────────

const TIME_SLOTS = [
  "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",  "4:00 PM",  "4:30 PM",
  "5:00 PM",  "5:30 PM",  "6:00 PM",  "6:30 PM",
  "7:00 PM",  "7:30 PM",  "8:00 PM",
];

const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

// ── Validation schema ─────────────────────────────────────────────────────────

const schema = z.object({
  firstName:       z.string().min(1, "First name is required"),
  lastName:        z.string().min(1, "Last name is required"),
  date:            z.string().min(1, "Please select a date"),
  time:            z.string().min(1, "Please select a time"),
  guests:          z.string().min(1, "Please select party size"),
  phone:           z.string().min(10, "Please enter a valid phone number"),
  specialRequests: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

// ── Animation ─────────────────────────────────────────────────────────────────

const cardVariant: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-brand-dark font-medium text-sm">{label}</Label>
      {children}
      {error && <p className="text-brand-red text-xs">{error}</p>}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ReservationSection() {
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    toast.success(`Thank you, ${data.firstName}!`, {
      description: "We'll confirm your booking shortly.",
    });
    reset();
  };

  return (
    <section id="reserve" className="bg-brand-cream py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-3">
            Book a Table
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-brand-dark">
            Reserve Your Table
          </h2>
        </div>

        {/* Form card */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border-t-4 border-brand-gold p-5 sm:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="First Name" error={errors.firstName?.message}>
                <Input
                  {...register("firstName")}
                  placeholder="Jane"
                  className="border-gray-200 focus-visible:ring-brand-gold"
                />
              </Field>
              <Field label="Last Name" error={errors.lastName?.message}>
                <Input
                  {...register("lastName")}
                  placeholder="Smith"
                  className="border-gray-200 focus-visible:ring-brand-gold"
                />
              </Field>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Date" error={errors.date?.message}>
                <Input
                  type="date"
                  min={today}
                  {...register("date")}
                  className="border-gray-200 focus-visible:ring-brand-gold"
                />
              </Field>
              <Field label="Time" error={errors.time?.message}>
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-gray-200 focus:ring-brand-gold">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_SLOTS.map(slot => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
            </div>

            {/* Guests + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Number of Guests" error={errors.guests?.message}>
                <Controller
                  name="guests"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-gray-200 focus:ring-brand-gold">
                        <SelectValue placeholder="Party size" />
                      </SelectTrigger>
                      <SelectContent>
                        {GUEST_OPTIONS.map(n => (
                          <SelectItem key={n} value={n}>{n} {n === "1" ? "guest" : "guests"}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
              <Field label="Phone Number" error={errors.phone?.message}>
                <Input
                  type="tel"
                  {...register("phone")}
                  placeholder="(902) 555-0123"
                  className="border-gray-200 focus-visible:ring-brand-gold"
                />
              </Field>
            </div>

            {/* Special Requests */}
            <Field label="Special Requests (optional)">
              <Textarea
                {...register("specialRequests")}
                placeholder="Dietary restrictions, celebrations, seating preferences…"
                className="border-gray-200 focus-visible:ring-brand-gold resize-none"
                rows={3}
              />
            </Field>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-red hover:bg-brand-red-light text-white font-semibold py-3 text-base mt-2"
            >
              Reserve My Table
            </Button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
