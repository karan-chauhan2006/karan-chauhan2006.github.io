// Choose the main front-page article by its Markdown filename (without .md).
// Set to null to display the editorial empty state; publishing new articles does not change this.
export const featuredFinanceSlug = null;

export const financeDepartments = [
 {slug:'quantitative-research',number:'12',name:'Quantitative Research',description:'Regressions, volatility models, backtests, and investment strategies.',categories:['Quantitative Research'],filters:['Regression','Backtesting','Volatility','Strategy']},
 {slug:'security-desk',number:'19',name:'The Security Desk',description:'Concise analyses of companies, bonds, and other instruments.',categories:['Security Analysis'],filters:['Equity','Fixed Income','Commodities','Other']},
 {slug:'in-depth-research',number:'34',name:'In-Depth Research',description:'Full valuations, modelling assumptions, sensitivities, and supporting reports.',categories:['In-Depth Research'],filters:['Valuation','Financial Statements','Industry Analysis']},
 {slug:'paper-portfolio',number:'67',name:'The Paper Portfolio',description:'A dated record of simulated portfolio decisions, strategy, and performance.',categories:['Paper Portfolio'],filters:['Decisions','Performance','Strategy','Notes']},
];
export const financeNotice = 'Independent research and simulated analysis for educational purposes only. Not investment advice.';
