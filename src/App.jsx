import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/section2'

const App = () => {
  const users = [
  {
    id: 1,

    name: "Emily Carter",

    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",

    intro: "Product Designer",

    age: 28,

    gender: "Female",

    city: "New York",

    occupation: "UI/UX Designer",

    income: "$82K",

    savings: "$24K",

    creditScore: 781,

    accountType: "Premium",

    bankingExperience: "6 Years",

    monthlyTransactions: 54,

    satisfaction: 94,

    tag: "Satisfied",

    color: "#4CAF50",

    risk: "Low",

    products: [
      "Savings Account",
      "Credit Card",
      "Investment Plan"
    ],

    about:
      "Emily is a working professional who prefers digital-first banking experiences. She regularly invests, maintains excellent credit, and uses premium banking services.",

    recommendation:
      "Recommend Wealth Management and Travel Credit Card."
  },

  {
    id: 2,

    name: "James Wilson",

    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",

    intro: "Software Engineer",

    age: 30,

    gender: "Male",

    city: "Seattle",

    occupation: "Backend Developer",

    income: "$105K",

    savings: "$38K",

    creditScore: 802,

    accountType: "Gold",

    bankingExperience: "8 Years",

    monthlyTransactions: 67,

    satisfaction: 97,

    tag: "Satisfied",

    color: "#3B82F6",

    risk: "Very Low",

    products: [
      "Savings Account",
      "Home Loan",
      "Investment Plan"
    ],

    about:
      "James is a high-income customer with strong financial habits and multiple banking products.",

    recommendation:
      "Recommend Retirement Planning."
  },

  {
    id: 3,

    name: "Sophia Brown",

    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",

    intro: "College Student",

    age: 22,

    gender: "Female",

    city: "Boston",

    occupation: "Student",

    income: "$15K",

    savings: "$1.8K",

    creditScore: 612,

    accountType: "Student",

    bankingExperience: "2 Years",

    monthlyTransactions: 18,

    satisfaction: 72,

    tag: "Underbanked",

    color: "#F97316",

    risk: "Medium",

    products: [
      "Student Savings"
    ],

    about:
      "Sophia mainly uses mobile banking for daily expenses and has limited access to financial products.",

    recommendation:
      "Offer Student Credit Card and Education Loan."
  },

  {
    id: 4,

    name: "Michael Lee",

    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",

    intro: "Small Business Owner",

    age: 38,

    gender: "Male",

    city: "Chicago",

    occupation: "Entrepreneur",

    income: "$145K",

    savings: "$58K",

    creditScore: 754,

    accountType: "Business",

    bankingExperience: "12 Years",

    monthlyTransactions: 128,

    satisfaction: 91,

    tag: "Satisfied",

    color: "#8B5CF6",

    risk: "Low",

    products: [
      "Business Account",
      "Business Loan",
      "Credit Card"
    ],

    about:
      "Michael owns a retail business and frequently uses digital banking for business transactions.",

    recommendation:
      "Offer Merchant Payment Solutions."
  },

  {
    id: 5,

    name: "Olivia Martin",

    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",

    intro: "Marketing Manager",

    age: 31,

    gender: "Female",

    city: "Los Angeles",

    occupation: "Marketing",

    income: "$88K",

    savings: "$18K",

    creditScore: 705,

    accountType: "Silver",

    bankingExperience: "5 Years",

    monthlyTransactions: 44,

    satisfaction: 84,

    tag: "Satisfied",

    color: "#EC4899",

    risk: "Low",

    products: [
      "Savings",
      "Insurance"
    ],

    about:
      "Olivia frequently uses online banking and prefers cashback and lifestyle rewards.",

    recommendation:
      "Recommend Cashback Credit Card."
  }
]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}

export default App
