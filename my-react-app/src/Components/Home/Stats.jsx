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

const statsCards = [
  {
    title: "পেশেন্ট ভর্তি",
    value: "৫৮৭",
    change: "-০.১%",
    direction: "down",
  },
  {
    title: "সফল অপারেশন",
    value: "৪৬",
    change: "+০.১%",
    direction: "up",
  },
  {
    title: "টেস্ট সংখ্যা",
    value: "২২২",
    change: "+২৬৬.৭%",
    direction: "up",
  },
];

const Custom3DBar = ({ x, y, width, height }) => {
  const depthX = 8;
  const depthY = 6;

  if (height <= 0) return null;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={colors.front} />
      <path
        d={`
          M ${x + width} ${y}
          L ${x + width + depthX} ${y - depthY}
          L ${x + width + depthX} ${y + height - depthY}
          L ${x + width} ${y + height}
          Z
        `}
        fill={colors.side}
        opacity={0.94}
      />
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
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.18 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC] py-12 sm:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute left-0 top-10 h-44 w-44 rounded-full bg-[#87E4DB]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#CAF0C1]/20 blur-3xl"></div>

      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-1000 sm:px-6 lg:px-8 ${
          show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="rounded-[28px] border border-[#DCE9EA] bg-white p-4 shadow-[0_18px_50px_rgba(1,93,103,0.08)] sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
            <span className="inline-flex rounded-full border border-[#87E4DB]/50 bg-[#F5F9F9] px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#1F6C75] shadow-sm mx-auto sm:mx-0">
              CLINIC PROGRESS
            </span>

            <h3 className="mt-4 text-2xl font-bold text-[#015D67] sm:text-3xl">
              আমাদের সেবার অগ্রগতি
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#47878E] sm:text-base mx-auto sm:mx-0">
              রোগী ভর্তি, সফল অপারেশন এবং পরীক্ষার সাম্প্রতিক অগ্রগতির সংক্ষিপ্ত
              পরিসংখ্যান।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {statsCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#D8E7E8] bg-gradient-to-br from-[#FBFEFE] to-[#F3F9F9] px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(1,93,103,0.09)] sm:px-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#47878E]">
                      {item.title}
                    </p>
                    <h4 className="mt-1 text-2xl font-bold text-[#015D67] sm:text-3xl">
                      {item.value}
                    </h4>
                  </div>

                  <div
                    className={`inline-flex min-w-[78px] items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold ${
                      item.direction === "up"
                        ? "bg-[#EAF8F1] text-[#169B62]"
                        : "bg-[#FFF3EF] text-[#E4572E]"
                    }`}
                  >
                    {item.direction === "up" ? "↑" : "↓"} {item.change}
                  </div>
                </div>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#EAF1F2]">
                  <div
                    className={`h-full rounded-full ${
                      item.direction === "up" ? "bg-[#00ACB1]" : "bg-[#E4572E]"
                    } ${
                      item.title === "পেশেন্ট ভর্তি"
                        ? "w-[46%]"
                        : item.title === "সফল অপারেশন"
                          ? "w-[68%]"
                          : "w-[84%]"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="mb-4 sm:mb-5">
              <h4 className="text-base font-bold text-[#015D67] sm:text-lg">
                সেবা কার্যক্রমের 3D প্রবণতা চিত্র
              </h4>
              <p className="mt-1 text-sm text-[#47878E]">
                ২৪ মার্চ থেকে ৫ এপ্রিল পর্যন্ত ক্লিনিকের অগ্রগতির bar graph
              </p>
            </div>

            <div className="rounded-[24px] border border-[#E6EFF0] bg-[#FBFEFE] p-3 sm:p-4 lg:p-5">
              <div className="h-[250px] w-full sm:h-[300px] lg:h-[340px]">
                {show && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={graphData}
                      margin={{ top: 22, right: 18, left: -10, bottom: 0 }}
                      barCategoryGap="20%"
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
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                        axisLine={false}
                        tickLine={false}
                      />

                      <YAxis
                        tick={{
                          fill: colors.subtext,
                          fontSize: 11,
                          fontWeight: 600,
                        }}
                        axisLine={false}
                        tickLine={false}
                        width={36}
                      />

                      <Tooltip content={<CustomTooltip />} cursor={false} />

                      <Bar
                        dataKey="value"
                        shape={<Custom3DBar />}
                        animationDuration={1400}
                        animationBegin={120}
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
