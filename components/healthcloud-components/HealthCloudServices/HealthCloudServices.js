"use client";
import { motion } from "framer-motion";
import {
  LuShieldHalf,
  LuBrain,
  LuCalendarCheck,
  LuHospital,
  LuHandshake,
  LuMonitorCheck,
} from "react-icons/lu";

const services = [
  {
    title: "Unified Patient 360",
    desc: "Get a real-time, comprehensive view of patient history and care goals, seamlessly integrated with EHR systems.",
    icon: LuShieldHalf,
  },
  {
    title: "Intelligent Care Coordination",
    desc: "Coordinate care plans, assign tasks, and monitor patient progress across multidisciplinary teams.",
    icon: LuBrain,
  },
  {
    title: "Smart Scheduling & Outreach",
    desc: "Enable AI-powered appointment scheduling, automated reminders, and personalized engagement.",
    icon: LuCalendarCheck,
  },
  {
    title: "Home Health & Virtual Care",
    desc: "Support telehealth, remote monitoring, and post-discharge workflows for seamless care at home.",
    icon: LuHospital,
  },
  {
    title: "Behavioral & Crisis Care Support",
    desc: "Manage behavioral health and crisis interventions with structured workflows and escalation paths.",
    icon: LuHandshake,
  },
  {
    title: "Mobile-Ready Portals & Apps",
    desc: "Provide self-service options, mobile access, and real-time communication tools to patients and caregivers.",
    icon: LuMonitorCheck,
  },
];

export default function HealthCloudServices() {
  return (
    <motion.section
      className="py-20 px-4 md:px-20"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Aekot&apos;s Health Cloud Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Icon className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
