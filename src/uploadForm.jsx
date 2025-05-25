import { useState } from 'react';

const fields = [
  { label: 'Betreibungsauszug', id: 'betreibung' },
  { label: 'Schuldnerinformationen', id: 'schuldnerinfo' },
  { label: 'Privatschulden', id: 'privatschulden' },
  { label: 'Krankenkassenprämien', id: 'kkpraemien' },
  { label: 'Krankenkassenauszüge', id: 'kkauszug' },
  { label: 'Gesundheitskosten', id: 'gesundheit' },
  { label: 'Einkommen (IV/EL/SKOS)', id: 'einkommen' },
  { label: 'Letzte Steuererklärung', id: 'steuer' }
];

export default function UploadForm() {
  const [files, setFiles] = useState({});

  const handleChange = (event, id) => {
    setFiles({ ...files, [id]: event.target.files[0] });
  };

  const handleSubmit = () => {
    alert('Dateien bereit für den Upload (noch keine echte Serververbindung).');
    console.log(files);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px' }}>
      <h1>📤 Projekt NULL – Dokumenten-Upload</h1>
      {fields.map(field => (
        <div key={field.id} style={{ marginBottom: '1rem' }}>
          <label>{field.label}</label><br />
          <input type="file" onChange={(e) => handleChange(e, field.id)} />
        </div>
      ))}
      <button onClick={handleSubmit} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Dateien validieren
      </button>
    </div>
  );
}