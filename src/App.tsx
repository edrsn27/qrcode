// @ts-expect-error -  QRCode is not exported from "react-qr-code"
import { QRCode } from "react-qr-code";

import { FORMS } from "./const";
import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="page-header">
        <div className="header-brand">
          <img src="/revsph-icon.png" alt="REVSPH" className="brand-icon" />
          <div>
            <h1>REVSPH Forms</h1>
            <p>QR Codes — Share &amp; Edit</p>
          </div>
        </div>
        <button className="print-btn" onClick={() => window.print()}>
          Print
        </button>
      </header>
      <div className="forms-grid">
        {FORMS.map((form) => (
          <div key={form.id} className="form-card">
            <div className="form-title">
              <span className="form-id">{form.id}</span>
              <span className="form-name">{form.name}</span>
            </div>
            <div className="qr-pair">
              <div className="qr-item">
                <span className="qr-label share">Share</span>
                <QRCode value={form.share} size={140} />
                <span className="qr-url">{form.share}</span>
              </div>
              <div className="qr-divider" />
              <div className="qr-item">
                <span className="qr-label edit">Edit</span>
                <QRCode value={form.edit} size={140} />
                <span className="qr-url">{form.edit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
