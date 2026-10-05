/** Lightweight decorative artwork shared by the contact banner and footer. */
export default function BotanicalDetail({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 300 360" fill="none" aria-hidden="true" focusable="false">
    <path d="M15 372C88 250 135 135 238-17M67 282C130 261 200 238 271 236M125 172C73 134 57 80 49 28" stroke="currentColor" strokeWidth="4"/>
    <g fill="currentColor">
      <path d="M89 245C26 229 8 172 20 143C65 156 94 198 89 245ZM105 215C111 156 166 133 208 139C196 183 154 215 105 215ZM151 125C99 109 83 66 91 30C129 40 153 84 151 125ZM167 102C174 48 219 20 262 26C247 67 214 95 167 102ZM212 35C183 4 183-31 202-56C237-28 233 8 212 35ZM86 277C144 223 208 238 249 276C192 292 141 298 86 277ZM164 255C192 205 230 195 273 209C244 239 207 255 164 255ZM81 112C43 116 14 84 7 54C45 55 75 77 81 112ZM64 79C66 34 90 6 116 1C120 31 99 62 64 79Z"/>
    </g>
    <g stroke="#f5eee7" strokeOpacity=".14" strokeWidth="1"><path d="M89 245 28 161M106 213l87-63M151 125 100 46M168 103l76-68M89 277l142-4"/></g>
  </svg>;
}
