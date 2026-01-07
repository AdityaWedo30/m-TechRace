import React from 'react';
import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Gauge, Flag, Timer, Upload, ChevronRight, Zap, Battery, Satellite } from 'lucide-react';

const DashboardPage = () => {
  // Data dummy untuk list rendering riwayat sesi
  const sessionHistory = [
    { id: 1, date: "Jan 2, 2026", track: "Sentul International", type: "Drag 201m", duration: "2h 15m", bestLap: "0:07.890", isBest: true },
    { id: 2, date: "Dec 28, 2025", track: "Mandalika GP", type: "Practice", duration: "45m", bestLap: "1:55.120", isBest: false },
    { id: 3, date: "Dec 15, 2025", track: "Private Test Track", type: "Dyno Run", duration: "1h 30m", bestLap: "--", isBest: false },
  ];

  return (
    <Container fluid className="p-4 bg-black min-vh-100 text-white">
      {/* HEADER & STATUS SECTION */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h1 className="fw-bold display-6">give your performance.</h1>
          <p className="text-secondary">Welcome back, Alex. Your telemetry station is ready.</p>
        </div>
        <div className="d-flex gap-2">
          <StatusItem icon={<Zap size={16} className="text-yellow"/>} label="STATUS" value="Online" />
          <StatusItem icon={<Battery size={16} className="text-yellow"/>} label="BATTERY" value="84%" />
          <StatusItem icon={<Satellite size={16} className="text-yellow"/>} label="GPS" value="12 Sats" />
        </div>
      </div>

      <Row>
        {/* LEFT COLUMN: Stats and Table */}
        <Col lg={9}>
          <Row className="mb-4 g-3">
            <StatCard icon={<Gauge/>} title="Total Distance" value="1,240 km" trend="+12%" />
            <StatCard icon={<Flag/>} title="Total Sessions" value="42" trend="+3 New" />
            <StatCard icon={<Timer/>} title="All-Time Best Lap" value="1:54.202" trend="-0.4s" isBest />
          </Row>

          <Card className="card-custom p-3">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="fw-bold">Recent Sessions</h5>
              <Link to="/sessions" className="text-yellow text-decoration-none small fw-bold">View All History</Link>
            </div>
            <Table responsive variant="dark" className="m-0 align-middle">
              <thead className="text-secondary small border-secondary">
                <tr>
                  <th>DATE</th>
                  <th>TRACK / EVENT</th>
                  <th>TYPE</th>
                  <th>DURATION</th>
                  <th>BEST LAP</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {sessionHistory.map((s) => (
                  <tr key={s.id} className="border-secondary">
                    <td className="py-3 text-secondary">{s.date}</td>
                    <td className="fw-bold">{s.track}</td>
                    <td className="text-secondary">{s.type}</td>
                    <td>{s.duration}</td>
                    <td className={s.isBest ? "text-yellow fw-bold" : ""}>{s.bestLap}</td>
                    <td><ChevronRight size={18} className="text-secondary" /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>

        {/* RIGHT COLUMN: Upload and Tips */}
        <Col lg={3}>
          <Card className="card-custom p-3 mb-3">
            <h6 className="fw-bold">Quick Upload</h6>
            <p className="text-secondary small">Import .csv telemetry data from SD Card.</p>
            <div className="upload-area py-5 text-center mb-3">
              <div className="bg-dark d-inline-block p-3 rounded-circle mb-2">
                <Upload size={24} className="text-yellow" />
              </div>
              <p className="small mb-0 fw-bold">Click to upload</p>
              <p className="text-secondary" style={{fontSize: '10px'}}>or drag and drop .csv files</p>
            </div>
            <div className="d-flex align-items-center bg-black p-2 rounded border border-secondary mb-3">
              <div className="flex-grow-1 small text-truncate">session_2026_01...</div>
              <Badge bg="success" pill>✓</Badge>
            </div>
            <Button className="btn-process w-100 py-2">Process Data &rarr;</Button>
          </Card>

          <Card className="card-custom p-3 bg-gradient">
            <div className="d-flex gap-2 align-items-center mb-2">
              <Zap size={18} className="text-yellow" />
              <span className="fw-bold small">Pro Tip</span>
            </div>
            <p className="text-secondary small mb-0">
              Improve your corner exit speed by analyzing throttle position vs lean angle in the <span className="text-yellow">Analysis</span> tab.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Sub-komponen StatCard
const StatCard = ({ icon, title, value, trend, isBest }) => (
  <Col md={4}>
    <Card className="card-custom p-3 h-100">
      <div className="d-flex justify-content-between mb-3">
        <div className="p-2 bg-dark rounded">{icon}</div>
        <Badge bg="dark" className="text-yellow border border-secondary">{trend}</Badge>
      </div>
      <p className="text-secondary small mb-1">{title}</p>
      <h2 className={`fw-bold mb-0 ${isBest ? 'text-yellow' : ''}`}>{value}</h2>
    </Card>
  </Col>
);

// Sub-komponen StatusItem
const StatusItem = ({ icon, label, value }) => (
  <div className="card-custom px-3 py-1 d-flex align-items-center gap-2" style={{fontSize: '11px'}}>
    {icon}
    <div>
      <div className="text-secondary fw-bold" style={{lineHeight: '1'}}> {label}</div>
      <div className="fw-bold">{value}</div>
    </div>
  </div>
);

export default DashboardPage;