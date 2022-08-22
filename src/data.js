import Bookkeeping_img from './assets/1_Bookkeeping.png'
import PersonalTax_img from './assets/2_Personaltax.png'
import CorporateTax_img from './assets/3_CorporateTax.png'
import Training_img from './assets/4_Training.png'
import Payroll_img from './assets/5_Payroll.png'
import NewBusiness_img from './assets/6_NewBusiness.png'

export const services = [
  {
    id: 'bookkeeping_Accounting',
    title: 'Bookkeeping & Accounting',
    intro:
      'Chart of Accounts set-up to suit and support your business. Bookkeeping, Bank Reconciliation...',
    des: 'Chart of Accounts set-up to suit and support your business. Bookkeeping, Bank Reconciliation, Visa Expense, Sales and Expenditure. Adjusting entries and month-end and year-end closing. GST, HST, and PST preparation and filing. Financial statements preparation and analysis. Canada Emergency Wage Subsidy (CEWS) application and reconciliation. Canada Emergency Rent Subsidy (CERS) application and reconciliation. Bank loan application',
    img: `${Bookkeeping_img}`,
  },
  {
    id: 'personal_tax_returns',
    title: 'Personal Tax Returns',
    intro:
      'Personal income tax (T1) return preparation (including Self Employed Professionals). Rental Properties & Capital Gaines / Losses...',
    des: 'Personal income tax (T1) return preparation (including Self Employed Professionals). Rental Properties & Capital Gaines / Losses. Interest vs Dividends vs Capital Gains. Home Offices, Automobile, Moving Expense, Medical Expense, and Donation. Tuition and Scholarship. RRSP and RESP. Canada Revenue Agency inquiries and audit support',
    img: `${PersonalTax_img}`,
  },
  {
    id: 'corporate_tax_returns',
    title: 'Corporate Tax Returns',
    intro:
      'Corporate income tax (T2) return preparation and filing. Tax Planning and Holding Companies...',
    des: 'Corporate income tax (T2) return preparation and filing. Tax Planning and Holding Companies. Salary, Dividends, and Bonuses structure and planning. Small Business, Manufacturing and Processing Tax Credits. R&D and Investment Tax Credits. Capital dividend account (CDA). Capital cost allowance (CCA)',
    img: `${CorporateTax_img}`,
  },
  {
    id: 'training',
    title: 'Training',
    intro: 'Online & on-site training and practices. Training available on...',
    des: 'Online & on-site training and practices. Training available on: Computerized Bookkeeping, Financial Statements and Reporting',
    img: `${Training_img}`,
  },
  {
    id: 'payroll',
    title: 'Payroll',
    intro:
      'Set paychecks as often as needed: Weekly/Bi-weekly/Semi-monthly/Monthly/Annually...',
    des: 'Set paychecks as often as needed: Weekly/Bi-weekly/Semi-monthly/Monthly/Annually. Payroll remittance. T4 &T4 summary',
    img: `${Payroll_img}`,
  },
  {
    id: 'business_registration',
    title: 'Business Registration',
    intro:
      'Help to open a new business and register your Business provincially and federally. Business, GST, Payroll...',
    des: 'Help to open a new business and register your Business provincially and federally. Business, GST, Payroll, Importing and exporting numbers registration. Accounting system set-up and support',
    img: `${NewBusiness_img}`,
  },
]
