"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Heart,
  Brain,
  Users,
} from "lucide-react";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)
    ) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Please tell us what brings you here";
    }

    if (!formData.preferredTime.trim()) {
      errors.preferredTime = "Preferred contact time is required";
    }

    if (!formData.agreeToContact) {
      errors.agreeToContact = "You must agree to be contacted";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center"
        style={{ backgroundColor: "#F3F0E8", height: "120vh" }}
      >
        {/* Background video wrapper with padding */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[90vh] overflow-hidden  shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://media.istockphoto.com/id/1160402181/video/aerial-view-ocean-waves-break-into-foam-along-the-shore.mp4?s=mp4-640x640-is&k=20&c=tnxTtFqtJArKXEw2420Z2M16F7z9GNVjC2BPmxE4UPM="
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </div>

        {/* Centered Content */}
        <div className="relative z-20 text-center max-w-4xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Psychological Care for
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Change, Insight, and Well-Being
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and most U.S. states through PSYPACT participation
          </p>
          <Button
            size="lg"
            className="bg-teal-300 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-[#7E7E6B]">
              <h2 className="text-4xl font-light mb-6 text-[#7E7E6B]">
                Meet Dr. Serena Blake
              </h2>
              <div className="space-y-4 leading-relaxed text-[#7E7E6B]">
                <p className="text-lg">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                  based in Los Angeles, CA, with eight years of experience and
                  over 500 client sessions.
                </p>
                <p>
                  She blends evidence-based approaches—like cognitive-behavioral
                  therapy and mindfulness—with compassionate, personalized care
                  to help you overcome anxiety, strengthen relationships, and
                  heal from trauma.
                </p>
                <p>
                  Whether you meet in her Maplewood Drive office or connect
                  virtually via Zoom, Dr. Blake is committed to creating a safe,
                  supportive space for you to thrive.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-semibold text-blue-700">8</div>
                  <div className="text-sm text-[#7E7E6B]">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-semibold text-blue-700">
                    500+
                  </div>
                  <div className="text-sm text-[#7E7E6B]">Client Sessions</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Serena Blake"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F3F0E8] text-[#41413f] py-20">
        {/* Intro Text Block */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
            Therapy can be a space where you invest in yourself—
            <br />
            one of the highest forms of self-care.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#41413f]">
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don’t have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </p>
        </div>

        <hr className="border-[#41413f] max-w-6xl mx-auto mb-16" />

        {/* Services Section */}
        <section id="services" className="py-20 bg-[#F3F0E8] text-[#41413f]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4">Specialized Services</h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive mental health support tailored to your unique
                needs and goals
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1618616191524-a9721186cbe4?q=80&w=1169&auto=format&fit=crop"
                    alt="Anxiety & Stress Management"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <Brain className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl">
                    Anxiety & Stress Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-center">
                    Learn practical coping strategies and mindfulness techniques
                    to manage anxiety, reduce stress, and regain control over
                    your emotional well-being through evidence-based therapeutic
                    approaches.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Relationship Counseling"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-3 bg-pink-100 rounded-full w-fit">
                    <Users className="h-6 w-6 text-pink-700" />
                  </div>
                  <CardTitle className="text-xl">
                    Relationship Counseling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-center">
                    Strengthen communication, rebuild trust, and deepen intimacy
                    with your partner. Work through conflicts constructively and
                    develop healthier relationship patterns for lasting
                    connection.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1667520059892-d8633db9c768?q=80&w=1170&auto=format&fit=crop"
                    alt="Trauma Recovery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                    <Heart className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">Trauma Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-center">
                    Process difficult experiences in a safe, supportive
                    environment. Develop resilience and healing strategies to
                    move forward with renewed strength and emotional freedom.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Session Info */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4">
                    Session Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Individual sessions: $200</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Couples sessions: $240</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Superbill provided for insurance</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>In-person: Tue & Thu, 10 AM–6 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>Virtual: Mon, Wed & Fri, 1 PM–5 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="text-[#1e1e1e]">
        {/* Rates and Insurance */}
        <div className="bg-[#88A6A6] text-center py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Rates and Insurance
          </h2>
          <p className="mb-4 text-lg">Session Fee – $200</p>
          <p className="mb-6 text-lg">Psychodiagnostic Evaluation – $225</p>
          <p className="max-w-3xl mx-auto text-base mb-4">
            I accept both private pay and insurance. I am in-network with BCBS
            and Aetna.
          </p>
          <p className="max-w-3xl mx-auto text-base">
            For out-of-network plans, I’ve partnered with Mentaya using{" "}
            <a href="#" className="underline font-medium">
              this tool
            </a>{" "}
            to help you check your eligibility for reimbursement for my
            services.
          </p>
        </div>

        {/* Client Notice */}
        <div className="bg-[#F3F0E8] text-center py-16 px-4">
          <p className="text-2xl font-semibold text-[#41413f]">
            Unable to accept new clients at this time.
          </p>
        </div>

        {/* Quote Section with Ocean Background */}
        <div
          className="relative bg-cover bg-center text-center text-[#1e1e1e] py-24 px-4"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1667435845787-cbcaefb32d2d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="bg-black bg-opacity-20 absolute inset-0 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
              “I have come to believe that caring for myself is not
              self-indulgent.
              <br />
              Caring for myself is an act of survival.”
            </blockquote>
            <p className="mt-6 text-lg font-medium">— Audre Lorde</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white text-[#41413f]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl">
              Common questions about therapy and my practice
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="insurance"
              className="border border-[#ddd] rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                I do not directly accept insurance, but I provide a detailed
                superbill (receipt) after each session that you can submit to
                your insurance company for potential reimbursement...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="online"
              className="border border-[#ddd] rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors">
                Are online sessions available?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                Yes, I offer secure virtual therapy sessions via Zoom on
                Mondays, Wednesdays, and Fridays...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="cancellation"
              className="border border-[#ddd] rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                I require 24-hour advance notice for all cancellations or
                rescheduling requests...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="first-session"
              className="border border-[#ddd] rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors">
                What can I expect in my first session?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                Your first session is an opportunity for us to get to know each
                other...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="confidentiality"
              className="border border-[#ddd] rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors">
                Is what we discuss confidential?
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed">
                Yes, everything you share in therapy is strictly confidential
                and protected by law...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#F3F0E8] text-[#41413f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Get in Touch</h2>
            <p className="text-xl">
              Ready to take the first step? I'm here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 shadow-lg border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">
                    Dr. Serena Blake, PsyD
                  </CardTitle>
                  <CardDescription>Clinical Psychologist</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>(323) 555-0192</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>serena@blakepsychology.com</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">In-Person Sessions:</span>
                    <span>Tue & Thu, 10 AM–6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Virtual Sessions:</span>
                    <span>Mon, Wed & Fri, 1 PM–5 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 shadow-lg border-0">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      Thank you for reaching out!
                    </h3>
                    <p>I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={formErrors.name ? "border-red-500" : ""}
                        />
                        {formErrors.name && (
                          <p className="text-sm text-red-600">
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className={formErrors.phone ? "border-red-500" : ""}
                        />
                        {formErrors.phone && (
                          <p className="text-sm text-red-600">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={formErrors.email ? "border-red-500" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-sm text-red-600">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">What brings you here? *</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className={formErrors.message ? "border-red-500" : ""}
                        placeholder="Tell me a bit about what you're looking for help with..."
                      />
                      {formErrors.message && (
                        <p className="text-sm text-red-600">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">
                        Preferred time to reach you *
                      </Label>
                      <Input
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) =>
                          handleInputChange("preferredTime", e.target.value)
                        }
                        className={
                          formErrors.preferredTime ? "border-red-500" : ""
                        }
                        placeholder="e.g., Weekday mornings, evenings, etc."
                      />
                      {formErrors.preferredTime && (
                        <p className="text-sm text-red-600">
                          {formErrors.preferredTime}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToContact"
                        checked={formData.agreeToContact}
                        onCheckedChange={(checked) =>
                          handleInputChange("agreeToContact", !!checked)
                        }
                        className={
                          formErrors.agreeToContact ? "border-red-500" : ""
                        }
                      />
                      <Label htmlFor="agreeToContact" className="text-sm">
                        I agree to be contacted by Dr. Blake regarding my
                        inquiry *
                      </Label>
                    </div>
                    {formErrors.agreeToContact && (
                      <p className="text-sm text-red-600">
                        {formErrors.agreeToContact}
                      </p>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg rounded-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')] 
             bg-cover bg-center text-[#41413f] py-12"
      >
        <div className="bg-[#F3F0E8]/80 backdrop-brightness-95">
          <div className="max-w-6xl mx-auto px-4 text-center py-12">
            <h3 className="text-2xl font-light mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="mb-6">
              Licensed Clinical Psychologist • Los Angeles, CA
            </p>
            <div className="flex justify-center items-center gap-6 text-sm">
              <span>(323) 555-0192</span>
              <span>•</span>
              <span>serena@blakepsychology.com</span>
            </div>
            <div className="mt-8 pt-8 border-t border-[#c2c2b8] text-sm">
              <p>
                © 2024 Dr. Serena Blake. All rights reserved. Licensed in the
                state of California.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
