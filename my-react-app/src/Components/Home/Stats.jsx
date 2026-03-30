import React, { useEffect, useRef, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
} from "recharts";

const graphData = [
  { date: "২৪ মার্চ", value: 62 },
  { date: "২৬ মার্চ", value: 64 },
  { date: "২৮ মার্চ", value: 57 },
  { date: "৩০ মার্চ", value: 60 },
  { date: "১ এপ্রিল", value: 49 },
  { date: "৩ এপ্রিল", value: 66 },
  { date: "৫ এপ্রিল", value: 58 },
];

const colors = {
  front: "#00ACB1",
  side: "#015D67",
  top: "#87E4DB",
  grid: "#E3EFF0",
  text: "#1F6C75",
  subtext: "#47878E",
  border: "#D5E4E6",
  surface: "#F5F9F9",
};

const Custom3DBar = (props) => {
  const { x, y, width, height } = props;

  const depthX = 10;
  const depthY = 8;

  if (height <= 0) return null;

  return (
    <g>
      {/* front */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={0}
        fill={colors.front}
      />

      {/* right side */}
      <path
        d={`
          M ${x + width} ${y}
          L ${x + width + depthX} ${y - depthY}
          L ${x + width + depthX} ${y + height - depthY}
          L ${x + width} ${y + height}
          Z
        `}
        fill={colors.side}
        opacity={0.95}
      />

      {/* top */}
      <path
        d={`
          M ${x} ${y}
          L ${x + depthX} ${y - depthY}
          L ${x + width + depthX} ${y - depthY}
          L ${x + width} ${y}
          Z
        `}
        fill={colors.top}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-[#D5E4E6] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(1,93,103,0.12)]">
      <p className="text-sm font-semibold text-[#015D67]">{label}</p>
      <p className="mt-1 text-sm text-[#47878E]">
        সেবা কার্যক্রম:{" "}
        <span className="font-bold text-[#015D67]">{payload[0].value}</span>
      </p>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute left-0 top-10 h-56 w-56 rounded-full bg-[#87E4DB]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-1000 sm:px-6 lg:px-8 ${
          show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="rounded-[30px] border border-[#D5E4E6] bg-white p-6 shadow-[0_20px_60px_rgba(1,93,103,0.08)] sm:p-8 md:p-10">
          <div className="mb-10">
            <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-[#F5F9F9] px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm">
              CLINIC PROGRESS
            </span>

            <h3 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl">
              আমাদের সেবার অগ্রগতি
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base">
              প্রতিদিন কতজন রোগী ভর্তি হচ্ছেন, কতটি সফল অপারেশন সম্পন্ন হচ্ছে
              এবং কতগুলো পরীক্ষা করা হচ্ছে — তার একটি সংক্ষিপ্ত অগ্রগতি চিত্র।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[24px] border border-[#D5E4E6] bg-[#F5F9F9] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(1,93,103,0.10)]">
              <p className="text-sm font-semibold text-[#47878E]">
                পেশেন্ট ভর্তি আছে
              </p>
              <h4 className="mt-2 text-4xl font-bold text-[#015D67]">৫৮৭</h4>
              <p className="mt-2 text-sm font-semibold text-[#E4572E]">
                ↓ -০.১%
              </p>
            </div>

            <div className="rounded-[24px] border border-[#D5E4E6] bg-[#F5F9F9] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(1,93,103,0.10)]">
              <p className="text-sm font-semibold text-[#47878E]">
                সফল অপারেশন
              </p>
              <h4 className="mt-2 text-4xl font-bold text-[#015D67]">৪৬</h4>
              <p className="mt-2 text-sm font-semibold text-[#169B62]">
                ↑ +০.১%
              </p>
            </div>

            <div className="rounded-[24px] border border-[#D5E4E6] bg-[#F5F9F9] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(1,93,103,0.10)]">
              <p className="text-sm font-semibold text-[#47878E]">
                টেস্ট সংখ্যা
              </p>
              <h4 className="mt-2 text-4xl font-bold text-[#015D67]">২২২</h4>
              <p className="mt-2 text-sm font-semibold text-[#169B62]">
                ↑ +২৬৬.৭%
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-5">
              <h4 className="text-lg font-bold text-[#015D67]">
                সেবা কার্যক্রমের 3D প্রবণতা চিত্র
              </h4>
              <p className="mt-1 text-sm text-[#47878E]">
                ২৪ মার্চ থেকে ৫ এপ্রিল পর্যন্ত ক্লিনিকের অগ্রগতির 3D bar graph
              </p>
            </div>

            <div className="rounded-[24px] border border-[#E5EEEF] bg-[#FBFEFE] p-3 sm:p-5">
              <div className="h-[300px] w-full sm:h-[360px]">
                {show && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={graphData}
                      margin={{ top: 30, right: 28, left: 0, bottom: 10 }}
                      barCategoryGap="18%"
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke={colors.grid}
                      />

                      <XAxis
                        dataKey="date"
                        tick={{
                          fill: colors.text,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                        axisLine={false}
                        tickLine={false}
                      />

                      <YAxis
                        tick={{
                          fill: colors.subtext,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                        axisLine={false}
                        tickLine={false}
                        width={42}
                      />

                      <Tooltip content={<CustomTooltip />} cursor={false} />

                      <Bar
                        dataKey="value"
                        shape={<Custom3DBar />}
                        animationDuration={1600}
                        animationBegin={150}
                        radius={[0, 0, 0, 0]}
                      >
                        {graphData.map((entry, index) => (
                          <Cell key={`cell-${index}`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
