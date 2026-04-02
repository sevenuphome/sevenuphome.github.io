export default function Badge({ children }) {
  return (
    <span
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--accent-primary)',
        backgroundColor: 'var(--accent-muted)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-sm)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}
