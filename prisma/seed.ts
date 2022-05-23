import prisma from "../src/database.js";

async function main() {
  await prisma.profileIcon.createMany({
    data: [
      {
        name: "Rick Sanchez",
        cursor1: "../public",
        cursor2: "../../../public/img/perfil01.png",
      },
      {
        name: "Beth Smith",
        cursor1: "../public",
        cursor2: "../../../public/img/perfil02.png",
      },
      {
        name: "Gato Falante",
        cursor1: "../public",
        cursor2: "../../../public/img/perfil04.png",
      },
    ],
  });

  await prisma.banners.createMany({
    data: [
      {
        title: "Perdidos na dimensão A-31",
        description: `Esse portal por alguma razão tende a invocar mais humanos... 
          sera que você vai ter a sorte de invocar o famoso terráqueo Rick Sanchez?`,
        path: "/public/img/845321.jpeg",
        theme: `{"primary": "rgba(76,207,58,1)", 
          "secondary": "rgba(0,0,0,0.8), 
          "buttonColor1": "rgba(240,158,16,1)", 
          "buttonColor2": "rgba(0,0,0)"}`,
        filter: `{"type": "species", "value":"human"}`,
      },
      {
        title: "Viajantes do espaço",
        description:
          "Esse portal invoca apenas seres curiosos! Claro, se você for um terraqueo!",
        path: "/public/img/909638.png",
        theme: `{"primary": "rgba(76,207,58,1)", 
          "secondary": "rgba(0,0,0,0.8), 
          "buttonColor1": "rgba(240,158,16,1)", 
          "buttonColor2": "rgba(0,0,0)"}`,
        filter: `{"type": "species", "value":"alien"}`,
      },
      {
        title: "Perdidos na dimensão A-31",
        description:
          "Esse portal.. beep-pop.. invoca apenas.. be-poop.. robos.. bee-oop.",
        path: "/public/img/936818.png",
        theme: `{"primary": "rgba(76,207,58,1)", 
          "secondary": "rgba(0,0,0,0.8), 
          "buttonColor1": "rgba(240,158,16,1)", 
          "buttonColor2": "rgba(0,0,0)"}`,
        filter: `{"type": "species", "value":"robot"}`,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
