import { brand } from '../content.js'

// 用 SVG 绘制的咖啡袋，换成真实产品照片时替换这个组件即可。
export default function Bag({ coffee, className = '' }) {
  const { bag, bagInk, name, nameEn, roastLabel } = coffee

  return (
    <svg
      className={`bag ${className}`}
      viewBox="0 0 240 340"
      role="img"
      aria-label={`${name}咖啡袋`}
    >
      <path d="M22 34 H218 L228 322 Q228 334 216 334 H24 Q12 334 12 322 Z" fill={bag} />
      <path d="M22 34 L12 322 Q12 334 24 334 H40 L44 34 Z" fill="#000" opacity="0.14" />
      <path d="M196 34 L200 334 H216 Q228 334 228 322 L218 34 Z" fill="#fff" opacity="0.07" />
      <rect x="16" y="8" width="208" height="32" rx="3" fill={bag} />
      <rect x="16" y="8" width="208" height="32" rx="3" fill="#000" opacity="0.2" />
      <rect x="16" y="38" width="208" height="2" fill="#000" opacity="0.25" />

      <g fill={bagInk} textAnchor="middle">
        <text x="120" y="88" className="bag-brand">{brand.name}</text>
        <text x="120" y="188" className="bag-name">{name}</text>
        <text x="120" y="218" className="bag-en">{nameEn}</text>
        <text x="120" y="302" className="bag-meta">{roastLabel} · 250 g</text>
      </g>
      <path d="M70 108 H170 M70 244 H170" stroke={bagInk} strokeWidth="1" opacity="0.45" />
    </svg>
  )
}
