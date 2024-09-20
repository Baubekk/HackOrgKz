'use client'

import { columns } from "./columns";
import { DataTable } from "./data-table";
import React, { useState, useEffect } from 'react';

// email = ФИО участников , статус  = название команды
async function getData() {
  let data = [
    {
      id: "9b2d1a6e",
      amount: 120,
      status: "SkyLab",
      email: "Ivan Petrov, Anna Sidorova",
    },
    {
      id: "8c3f4b7d",
      amount: 110,
      status: "NextWave",
      email: "Dmitry Orlov, Olga Sergeeva",
    },
    {
      id: "7a1d3c5f",
      amount: 95,
      status: "CodeFusion",
      email: "Sofia Kuznetsova, Andrey Romanov",
    },
    {
      id: "5d4e6f8a",
      amount: 85,
      status: "DevMind",
      email: "Alexander Ivanov, Maria Smirnova",
    },
    {
      id: "3f2c5b9d",
      amount: 75,
      status: "TechNova",
      email: "Sergey Vasiliev, Yulia Popova",
    },
    {
      id: "2e1f4a7c",
      amount: 65,
      status: "ByteWorks",
      email: "Elena Pavlova, Pavel Morozov",
    },
    {
      id: "4b5d7e6c",
      amount: 55,
      status: "LogicLoop",
      email: "Oleg Lebedev, Natalia Filippova",
    },
    {
      id: "6c3a1f8b",
      amount: 45,
      status: "CodeSphere",
      email: "Victor Kruglov, Alina Zaytseva",
    },
    {
      id: "1d2f3c4e",
      amount: 135,
      status: "AlphaDev",
      email: "Vladimir Petrenko, Ksenia Markova",
    },
    {
      id: "2b3e4f5a",
      amount: 125,
      status: "DataWave",
      email: "Artem Fedorov, Tatiana Bogdanova",
    },
    {
      id: "5c6a7e9d",
      amount: 115,
      status: "ProtoCore",
      email: "Maxim Gusev, Liza Belyaeva",
    },
    {
      id: "8f2e1c7b",
      amount: 105,
      status: "DevXpert",
      email: "Daniil Sorokin, Ekaterina Volkova",
    },
    {
      id: "7d3c5b9a",
      amount: 90,
      status: "ByteStorm",
      email: "Kirill Zaitsev, Vera Nikolaeva",
    },
    {
      id: "9e2b6d8f",
      amount: 80,
      status: "TechPulse",
      email: "Yuriy Yakovlev, Marina Egorova",
    },
    {
      id: "6a5d4f1b",
      amount: 70,
      status: "CodeStream",
      email: "Igor Smolnikov, Daria Pavlova",
    },
    {
      id: "3f2a1e4d",
      amount: 60,
      status: "CloudLab",
      email: "Alexey Polyakov, Tatyana Kuzmina",
    },
    {
      id: "8c4e6b9d",
      amount: 50,
      status: "LogicStorm",
      email: "Roman Karpov, Olga Soboleva",
    }
  ];

  // Sort data by amount (descending)
  data.sort((a, b) => b.amount - a.amount);

  // Assign rank based on the sorted position
  data = data.map((item, index) => ({
    ...item,
    ranking: index + 1,  // rank starts from 1
  }));

  return data;
}

export default function DemoPage() {
  const [data, setData] = React.useState([]);

  // Fetch the data on component mount
  React.useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
