// Dynamic SEO Content & Documentation Generator for All 50 Tools
const toolSeoDocs = {
  emi_calc: {
    title: "How to Calculate Loan EMI Online",
    formula: "EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]",
    desc: "Equated Monthly Installment (EMI) is the fixed payment amount made by a borrower to a lender at a specified date each calendar month.",
    faqs: [
      { q: "What factors affect home loan EMI?", a: "Principal loan amount, annual interest rate, and repayment tenure determine the monthly EMI." },
      { q: "Can I reduce my monthly EMI?", a: "Yes, by making pre-payments toward the principal or negotiating a lower interest rate with your bank." }
    ]
  },
  sip_calc: {
    title: "Mutual Fund SIP Wealth Accumulation Guide",
    formula: "M = P x [ (1 + i)^n - 1 ] x (1 + i) / i",
    desc: "A Systematic Investment Plan (SIP) allows you to invest small sums periodically into mutual funds to harness the power of compounding.",
    faqs: [
      { q: "What is the recommended SIP duration?", a: "A minimum horizon of 5 to 10 years is recommended to benefit from market cycles and compounding." }
    ]
  },
  json_format: {
    title: "JSON Formatter, Validator & Pretty Print Guide",
    desc: "Format raw, minified JSON strings into human-readable formatted trees. Validate JSON syntax errors in real-time.",
    faqs: [
      { q: "Is my JSON data safe?", a: "Yes, all parsing and validation runs 100% client-side in your browser; no data is sent to external servers." }
    ]
  }
};

window.renderSeoContent = (toolId, toolName) => {
  const doc = toolSeoDocs[toolId] || {
    title: `About ${toolName}`,
    desc: `${toolName} is a fast, lightweight, and client-side online utility designed for accuracy and productivity.`,
    faqs: [
      { q: `Is this ${toolName} free to use?`, a: "Yes, 100% free with unlimited calculations and zero data logging." }
    ]
  };

  return `
    <div class="mt-6 border-t border-stone-200 pt-5 text-left space-y-4">
      <h3 class="text-sm font-bold text-stone-900">${doc.title}</h3>
      <p class="text-xs text-stone-600 leading-relaxed">${doc.desc}</p>
      ${doc.formula ? `<div class="p-3 bg-stone-100 rounded-xl font-mono text-[11px] text-stone-800"><b>Formula:</b> ${doc.formula}</div>` : ''}
      <div class="space-y-2">
        <h4 class="text-xs font-bold text-stone-800">Frequently Asked Questions</h4>
        ${doc.faqs.map(f => `
          <div class="text-xs">
            <b class="text-stone-700">Q: ${f.q}</b>
            <p class="text-stone-500 mt-0.5">${f.a}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};
