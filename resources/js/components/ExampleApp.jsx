import React, { useState, useEffect } from 'react';

export default function ExampleApp() {
    const [pingData, setPingData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/ping')
            .then((res) => res.json())
            .then((data) => {
                setPingData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error al conectar con backend:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
            color: '#f8fafc',
            padding: '20px'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                maxWidth: '560px',
                width: '100%',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                textAlign: 'center'
            }}>
                <div style={{ display: 'inline-block', padding: '10px 16px', borderRadius: '50px', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
                    🚀 Proyecto Monolítico: Laravel + React
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '12px' }}>
                    ¡React funcionando en Laravel!
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
                    Este frontend está renderizado directamente desde React dentro del monolito de Laravel usando Vite.
                </p>

                <div style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'left',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', tracking: '1px', marginBottom: '10px' }}>
                        📡 Prueba de Conexión al Backend (/api/ping)
                    </div>
                    {loading ? (
                        <div style={{ color: '#fbbf24', fontSize: '14px' }}>Cargando respuesta de Laravel...</div>
                    ) : pingData ? (
                        <div>
                            <div style={{ color: '#4ade80', fontWeight: '600', marginBottom: '6px', fontSize: '15px' }}>
                                ✅ {pingData.message}
                            </div>
                            <div style={{ color: '#94a3b8', fontSize: '13px' }}>
                                Estado: <span style={{ color: '#e2e8f0' }}>{pingData.status}</span> | Timestamp: <span style={{ color: '#e2e8f0' }}>{pingData.timestamp}</span>
                            </div>
                        </div>
                    ) : (
                        <div style={{ color: '#f87171', fontSize: '14px' }}>Error al conectar con la API.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
