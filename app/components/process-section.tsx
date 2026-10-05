import { processSteps } from "../lib/process";

function BotanicalShadow() {
  return <svg className="process-botanical" viewBox="0 0 420 400" fill="none" aria-hidden="true" focusable="false">
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M410 415C324 321 304 205 270 43M340 321C270 275 214 180 167 121M310 246C340 193 361 111 382 26M290 147C228 115 209 64 192 8M365 370C355 298 392 231 423 195"/>
    </g>
    <g fill="currentColor">
      <path d="M279 84C240 65 233 27 245 5C272 18 285 46 279 84ZM282 110C276 69 299 33 322 28C327 59 310 90 282 110ZM296 165C257 157 233 125 239 101C269 109 293 133 296 165ZM306 205C307 168 330 149 350 146C353 174 334 196 306 205ZM327 285C293 266 276 236 283 214C311 228 328 257 327 285Z"/>
      <path d="M243 224C208 224 178 201 174 181C206 178 232 196 243 224ZM218 190C224 153 212 127 194 119C179 144 192 172 218 190ZM180 140C149 132 126 109 129 89C157 90 176 111 180 140ZM343 164C333 128 345 99 366 89C377 115 365 142 343 164ZM360 114C379 111 403 87 405 64C380 64 363 86 360 114ZM372 73C353 44 357 18 374 1C393 18 389 48 372 73ZM224 77C188 76 164 50 161 29C191 29 215 53 224 77ZM377 295C368 259 377 235 398 219C412 242 401 275 377 295ZM373 321C393 291 414 284 436 291C427 317 402 327 373 321Z"/>
    </g>
  </svg>;
}

export default function ProcessSection() {
  return <section className="process-section" id="process" aria-labelledby="process-title">
    <BotanicalShadow />
    <div className="process-inner shell">
      <p className="eyebrow">How it works</p>
      <h2 id="process-title">A simple process,<br/>from idea to launch.</h2>
      <ol className="process-steps">
        {processSteps.map((step) => <li className="process-step" key={step.number}>
          <div className="process-marker" aria-hidden="true"><span className="process-number">{step.number}</span><span className="process-connector"><span>→</span></span></div>
          <div className="process-step-copy"><h3>{step.title}</h3><p>{step.description}</p></div>
        </li>)}
      </ol>
    </div>
  </section>;
}
