import { useState } from 'react';

export default function ProjektNULL() {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const simulateAnalysis = () => {
    if (!file || !documentType) return;

    let analysisText = '';
    let recommendationText = '';

    switch (documentType) {
      case 'Betreibungsauszug':
        analysisText = 'Das Dokument zeigt aktive oder vergangene Schuldenforderungen. Wichtig ist zu prüfen, ob Forderungen verjährt sind oder keine Pfändbarkeit besteht.';
        recommendationText = 'Empfohlen: Antrag auf Schuldenruhe bei nicht pfändbarem Einkommen, Verjährungsprüfung nach OR 127 ff.';
        break;
      case 'Krankenkassenforderung':
        analysisText = 'Krankenkassenforderungen können unter gewissen Umständen gestundet oder über EL abgedeckt werden.';
        recommendationText = 'Empfohlen: Anfrage an EL-Stelle zur Übernahme, Ratenvereinbarung mit Krankenkasse, ggf. Antrag auf Erlass bei Härtefall.';
        break;
      case 'Gesundheitsbericht':
        analysisText = 'Gesundheitsberichte dienen als Nachweis für Einschränkungen und können zur Begründung von Zahlungsunfähigkeit verwendet werden.';
        recommendationText = 'Empfohlen: Beilage bei Anträgen zur Stundung, Entschuldung oder Ergänzungsleistungen.';
        break;
      default:
        analysisText = 'Unbekannter Dokumenttyp.';
        recommendationText = 'Bitte wählen Sie einen definierten Typ aus.';
    }

    setAnalysis(analysisText);
    setRecommendation(recommendationText);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Projekt NULL – Simulationsprototyp</h1>
      <div style={{ margin: '1rem 0' }}>
        <label>1. Dokument hochladen (Dummy-Funktion)</label><br />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <div style={{ margin: '1rem 0' }}>
        <label>2. Dokumenttyp auswählen</label><br />
        <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
          <option value="">-- Bitte wählen --</option>
          <option value="Betreibungsauszug">Betreibungsauszug</option>
          <option value="Krankenkassenforderung">Krankenkassenforderung</option>
          <option value="Gesundheitsbericht">Gesundheitsbericht</option>
        </select>
      </div>
      <button onClick={simulateAnalysis}>Analyse starten</button>

      {analysis && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Analyse</h2>
          <p>{analysis}</p>
          <h2>Empfehlung</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
}