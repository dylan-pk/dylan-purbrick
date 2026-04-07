// src/components/SkillsRadar.jsx
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

// MUST be 'export default'
export default function SkillsRadar() { 
  const data = [
    { subject: 'CAD (SolidWorks)', A: 95 },
    { subject: 'Coding (Python/C++)', A: 85 },
    { subject: 'Robotics (ROS 2)', A: 80 },
    { subject: 'Fabrication', A: 85 },
    { subject: 'Management', A: 90 },
  ];

  return (
    <div className="h-[400px] w-full rounded-sm border border-gray-100 bg-gray-50 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#1A1A1A', fontSize: 10, fontWeight: 'bold' }} />
          <Radar dataKey="A" stroke="#571B7E" fill="#571B7E" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}