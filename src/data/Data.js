// Sidebar imports
import {
    UilEstate,
    UilSchedule,
    UilCheckSquare,
    UilClipboardAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
  

  
  // Sidebar Data
  export const SidebarData = [
    {
      id: "/",
      icon: UilEstate,
      heading: "Área de Trabalho"
    },
    {
      id: "schedule",
      icon: UilSchedule,
      heading: "Agendamento de Consulta"
    },
    {
      id: "appointment",
      icon: UilCheckSquare ,
      heading: "Consulta de Agendamentos"
    },
  ];
  
  // Analytics Cards Data
  export const CardsData = [
    {
      title: "Vendas",
      color: {
        backGround: "#fa808b",
        
      },
      barValue: 70,
      value: "27,430",
      png: UilUsdSquare,
      series: [
        {
          name: "Vendas",
          data: [15, 90, 100, 64, 82, 80, 20],
        },
      ],
    },
    {
      title: "Receita",
      color: {
        backGround: "#4e4cac",
        
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Receita",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Gastos",
      color: {
        backGround:
          "#9698d5",

      },
      barValue: 60,
      value: "2,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Gastos",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ]
 