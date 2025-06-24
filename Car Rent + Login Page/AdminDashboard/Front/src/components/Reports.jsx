import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Card, Title } from "@tremor/react";

function Reports() {
  const bookingData = [
    { month: 'Jan', bookings: 20 },
    { month: 'Feb', bookings: 32 },
    { month: 'Mar', bookings: 48 },
    { month: 'Apr', bookings: 39 },
    { month: 'May', bookings: 50 },
    { month: 'Jun', bookings: 60 },
  ];
  const [tot, setTot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/calc/total")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const monthNames = [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const formatted = [{
          Month: monthNames[data.Month - 1],
          TotalPayement: data.TotalPayement
        }];

        setTot(formatted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-6">
      <Title>Rapports et analyses</Title>
      <div className="flex flex-col gap-6 mt-6 ">
        <Card className="w-fit">
          <Title>Revenu mensuel dernier chaque mois</Title>
          {tot.length === 0 ? (
            <p className="text-center text-gray-500">Chargement...</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <LineChart width={800} height={400} data={tot}>
                <XAxis dataKey="Month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="TotalPayement"
                  stroke="blue"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          )}
        </Card>
            {/* test of the chart with data */}
        <Card className="w-fit">
          <Title>Revenu mensuel dernier chaque mois</Title>
          {tot.length === 0 ? (
            <p className="text-center text-gray-500">Chargement...</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <LineChart width={800} height={400} data={bookingData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="blue"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Reports;