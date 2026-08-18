type BrandProps = {
  compact?: boolean
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <a className="brand" href="#inicio" aria-label="Venezianas Canaã — início">
      <svg className="brand__mark" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M7 8.5h30v27H7z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 14h20M12 20h20M12 26h20M12 32h13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
        <path d="m28 32 4-4v4z" fill="currentColor" />
      </svg>
      {!compact && (
        <span className="brand__text">
          <strong>Venezianas</strong>
          <span>Canaã</span>
        </span>
      )}
    </a>
  )
}
